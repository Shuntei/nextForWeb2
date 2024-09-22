export function getTextAlign(textAlign) {
  const textAlignMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
  console.log(textAlignMap[textAlign]);
  return `${textAlignMap[textAlign] || ""}`;
}

export function getFontSizeForHeading(level) {
  const fontSizeMap = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };
  return `${fontSizeMap[level] || ""}`;
}
