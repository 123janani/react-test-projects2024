import Color from "./Color";
import * as colorsData from "../colors";

export default function ColorRenderer() {
  return (
    <div>
      {colorsData.colors.map((color) => (
        <Color name={color.name} hex={color.hex} />
      ))}
    </div>
  );
}
