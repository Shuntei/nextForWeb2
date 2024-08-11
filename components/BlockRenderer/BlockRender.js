import { Cover } from "components/Cover";
import { Heading } from "components/Heading";

export function BlockRender({ blocks }) {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign} //這裡沒有拿到textAlign的json,但教學有
          />
        );
      }

      case "core/cover": {
        console.log("BLOCK", block);
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRender blocks={block.innerBlocks} />
          </Cover>
        );
      }

      default:
        return null;
    }
  });
}
