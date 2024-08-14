import { gql } from "@apollo/client";
import client from "client";
import { BlockRender } from "components/BlockRenderer/BlockRender";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";

export default function Home(props) {
  console.log("PROPS", props);
  // console.log(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL);

  return (
    <div>
      <BlockRender blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            title
            blocks(postTemplate: false)
          }
        }
      }
    `,
  });
  return {
    props: {
      // blocks: data.nodeByUri.blocks,
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks), //產生uuid
    },
  };
};
