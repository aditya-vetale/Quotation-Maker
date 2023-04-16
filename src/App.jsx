import Element from "./components/elements/app";
import { useEffect, useState } from "react";

function App() {
  const [components, setComponenets] = useState([]);

  useEffect(() => {
    console.log(components);
  });

  function handleAddElement() {
    setComponenets([...components, <Element key={components.length} />]);
  }
  return (
    <>
      {components}
      <button onClick={handleAddElement}>Add Element</button>
    </>
  );
}

export default App;
