import { useState } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);
  return (
    <div>
      <div class="toggle-switch">
        <input
          type="checkbox"
          checked={windowEvent}
          onClick={() => setWindowEvent((prevState) => !prevState)}
        />
        <label class="toggle-switch-label" for="toggleSwitch">
          Toggle Window Event, Toggle Me!
        </label>
      </div>

      {windowEvent && <WindowEvent />}
    </div>
  );
}

// export function ScrollWindowEvent(){
//   const [windowEvent, setWindowEvent] = useState(false);

// }

// module.exports ={
//   ToggleWindowEvent
// }