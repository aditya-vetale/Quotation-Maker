import Element from "./components/elements/app";
import { useEffect, useState } from "react";

function App() {
  const [components, setComponenets] = useState([]);
  const [child_sum_relation, setChild_sum_relation] = useState({});

  useEffect(() => {
    // console.log(globalTotal);
    console.log(child_sum_relation, components);
  });

  function handleAddElement() {
    setComponenets([
      ...components,
      <Element
        key={components.length}
        updateGlobalTotal={totalSum}
        index={components.length + 1}
      />,
    ]);
  }

  function totalSum(value_from_child, childIndex) {
    // child_sum_relation[childIndex] = value_from_child;
    let tempObj = child_sum_relation;
    console.log(tempObj);
    tempObj[childIndex] = value_from_child;
    setChild_sum_relation(tempObj);
  }
  return (
    <>
      {components}
      <button onClick={handleAddElement}>Add Element</button>
      <br />
      Total :
      {Object.values(child_sum_relation).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)}
    </>
  );
}

export default App;
