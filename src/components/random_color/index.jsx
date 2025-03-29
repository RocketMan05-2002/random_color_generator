import { useState } from "react";

export default function RandomColor() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [selected, setSelected] = useState("");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #976673
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    console.log(r, g, b);
    setColor(`rgb(${r},${g},${b})`);
  }

  function handleHexClick() {
    setType("hex");
    setSelected("hex");
  }
  function handleRgbClick() {
    setType("rgb");
    setSelected("rgb");
  }

  return (
    <div
      className="container"
      style={{ width: "100vw", height: "100vh", backgroundColor: color }}
    >
      <div className="btns">
        <button
          onClick={handleHexClick}
          className={selected === "hex" ? "selected" : ""}
        >
          {selected === "hex" ? "Hex Selected!" : "Select Hex Type"}
        </button>
        <button
          onClick={handleRgbClick}
          className={selected === "rgb" ? "selected" : ""}
        >
          {selected === "rgb" ? "Rgb Selected!" : "Select Rgb Type"}
        </button>
        <button
          onClick={
            type === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color{" "}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h1>{color}</h1>
      </div>
    </div>
  );
}
