import Element from "./components/elements/app";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [components, setComponenets] = useState([]);
  const [child_sum, setChild_sum] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // console.log(components, child_sum);
  });

  function handleAddElement() {
    setComponenets([
      ...components,
      <Element
        key={components.length}
        updateGlobalTotal={totalSum}
        index={components.length}
        deleteChild={deleteChild}
      />,
    ]);
  }

  function totalSum(value_from_child, childIndex) {
    child_sum[childIndex] = value_from_child;
    setSum(
      child_sum.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
    );
  }

  function deleteChild(index) {
    console.log("index", index);
    console.log(child_sum, child_sum.splice(index, 1));
    // setComponenets(components.splice(index, 1));
    // setChild_sum(child_sum.splice(index, 1));
  }
  return (
    <>
      <main>
        <p>Type</p>
        <p>Subtype</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <div className="elements">
          {/* {components.map((e, i) => (
            <Element
              key={i}
              updateGlobalTotal={totalSum}
              index={i}
              deleteChild={deleteChild}
            />
          ))} */}
          {components}
        </div>
      </main>
      <footer>
        <hr />
        <button onClick={handleAddElement}>Add Element</button>
        <p>Total :{sum}</p>
      </footer>
    </>
  );
}

export default App;
