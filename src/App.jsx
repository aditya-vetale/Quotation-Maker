import Element from "./components/elements/app";
import { useState } from "react";
import "./App.css";

function App() {
  const [components, setComponenets] = useState([]);
  const [child_sum, setChild_sum] = useState([]);
  const [sum, setSum] = useState(0);

  function handleAddElement() {
    setComponenets([...components, components.length]);
  }

  function totalSum(value_from_child, childIndex) {
    child_sum[childIndex] = value_from_child;
    setSum(
      child_sum.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
    );
  }
  return (
    <>
      <p>Type</p>
      <p>Subtype</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      {components.map((e, i) => (
        <Element key={i} updateGlobalTotal={totalSum} index={i} />
      ))}
      <br />
      <button onClick={handleAddElement}>Add Element</button>
      <br />
      Total :{sum}
    </>
  );
}

export default App;
