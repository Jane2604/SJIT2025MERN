import { useState } from "react";

function UseState() {
  var stateVar = 0;
  var [num, setNum] = useState(stateVar);
  function handleDecrement() {
    setNum(num - 1);
  }

  return (
    <div>
      <h1>useState</h1><br />
      <h2>State intial value is {stateVar}</h2><br />
      <button onClick={handleDecrement}>-</button>
      <h3>Updating State:{num}</h3><br />
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >+</button><br /><br />
      <button>Reset</button>
    </div>
  );
}
export default UseState;