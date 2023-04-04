import { useState } from "react";
import "./App.css";

function App() {
  let counter = 0;
  //const [data, setData] = useState(0);
  function updateData() {
    counter++;
    console.log(counter);
    //setData(data + 1);
  }
  console.warn("______ ");
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default App;
