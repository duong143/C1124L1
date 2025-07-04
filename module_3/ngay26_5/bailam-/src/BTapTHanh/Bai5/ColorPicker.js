function ColorPicker({ onColorChange }) {
  const colors = ["white", "lightblue", "lightgreen", "lightpink", "lightyellow"];

  return (
    <div>
      <h2>Chọn màu:</h2>
      {colors.map((color) => (
        <button key={color} onClick={() => onColorChange(color)}
          style={{
            backgroundColor: color,
            margin: "5px",
            padding: "10px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}>{color}</button>
      ))}
    </div>
  );
}

export default ColorPicker;
