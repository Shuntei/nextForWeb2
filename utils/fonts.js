export function getTextAlign(textAlign = "center") {
  //教學是textAlign = "left" 因為有拿到textAlign的center,這裡沒有所以用textAlign = "center" 預設
  const textAlignMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
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
