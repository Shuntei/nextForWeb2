import { gql } from "@apollo/client";
import client from "client";
import { BlockRender } from "components/BlockRenderer";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";

export default function Page(props) {
  console.log("PAGE PROPS", props);

  return (
    <div>
      <BlockRender blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  console.log("CONTEXT", context);
  const uri = `/${context.params.slug.join("/")}/`;
  console.log("URI", uri);

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks(postTemplate: false, attributes: true)
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks); //產生uuid
  return {
    props: {
      title: data.nodeByUri.title,
      blocks,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes.map((page) => ({
      params: {
        slug: page.uri.substring(1, page.uri.length - 1).split("/"),
      },
    })),
    fallback: "blocking",
  };
};
