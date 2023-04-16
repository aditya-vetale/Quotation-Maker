import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [subTypeSelected, setSubTypeSelected] = useState(null);

  let elements = {
    Table: { "Round Table": 700, "Square Table": 700 },
    Chair: { Regular: 300, Covered: 700 },
  };

  function mainElementChanged(event) {
    setSelectedElement(event.target.value);
  }

  function subTypeChanged(event) {
    setSubTypeSelected(event.target.value);
  }

  return (
    <form>
      <select onChange={mainElementChanged}>
        <option value="" selected disabled>
          Select Element
        </option>
        {Object.keys(elements).map((e, i) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>

      {selectedElement && (
        <select onChange={subTypeChanged}>
          <option value="" selected disabled>
            Select Subtype
          </option>
          {Object.keys(elements[selectedElement]).map((e, i) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      )}

      {subTypeSelected && (
        <>
          <input type="number"></input>
          <input type="number"></input>
          <input type="number"></input>
        </>
      )}
    </form>
  );
}

export default App;
