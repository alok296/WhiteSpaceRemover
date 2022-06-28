import "./styles.css";

export default function App() {
  // const testElement = document.querySelector("div");
  // const lineBreak = document.createElement("br");
  // testElement.appendChild(lineBreak);
  const str = "1.test commet line 1 \n2.hgjgh";

  document.querySelector("div");
  // const newstr = str.replaceAll("\n", document.createElement("br"));
  // const newstr = str.split("\n").join({ lineBreak });
  return (
    <div style={{ whiteSpace: "pre-line" }} className="App">
      {str}
    </div>
  );
}
