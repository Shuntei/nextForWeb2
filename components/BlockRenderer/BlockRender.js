import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";

export function BlockRender({ blocks }) {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/paragraph": {
        console.log(block.attributes.style.elements.link.color.text);

        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.textAlign} //教學是align,但實際是textAlign
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] || ""
              // block.attributes.style.elements.link.color.text //教學的內容, 實際無顏色
            }
          />
        );
      }

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
