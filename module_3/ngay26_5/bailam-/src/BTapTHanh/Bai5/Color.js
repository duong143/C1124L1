import { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";

function Color() {
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    console.log(`🎨 Màu nền đã đổi thành: ${bgColor}`);
  }, [bgColor]);

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}>
      <h1> Chọn màu nền</h1>
      <ColorPicker onColorChange={setBgColor} />
    </div>
  );
}

export default Color;
