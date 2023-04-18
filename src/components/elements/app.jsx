import { useEffect, useState } from "react";
import "./style.css";

function App(props) {
  let elements = {
    Table: { "Round Table": 700, "Square Table": 700 },
    Chair: { Regular: 300, Covered: 700 },
  };

  const [selectedElement, setSelectedElement] = useState(null);
  const [subTypeSelected, setSubTypeSelected] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // console.log(props.parent_total);
  });

  function mainElementChanged(event) {
    setSelectedElement(event.target.value);
  }

  function subTypeChanged(event) {
    setSubTypeSelected(event.target.value);
    setPrice(elements[selectedElement][event.target.value]);
  }

  function handleQuantity(event) {
    setQuantity(event.target.value);
    setTotal(event.target.value * price);
    props.updateGlobalTotal(event.target.value * price, props.index);
  }

  function handlePrice(event) {
    setPrice(event.target.value);
    setTotal(quantity * event.target.value);
    props.updateGlobalTotal(quantity * event.target.value, props.index);
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
          <input type="number" value={price} onChange={handlePrice}></input>
          <input
            type="number"
            onChange={handleQuantity}
            value={quantity}
          ></input>{" "}
          <span>{total}</span>
        </>
      )}
    </form>
  );
}

export default App;
