import React, { useState } from "react";

export default function StateHook() {
  const [count, setCount] = useState(0);
  const [Incount, setIncount] = useState(0);
  const [Decount, setDecount] = useState(0);
  function Decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function Increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function Increment1() {
    setIncount((prevCount) => prevCount + 1);
  }
  function Increment2() {
    setDecount((prevCount) => prevCount + 1);
  }
  const btn = {
    backgroundColor: "gray",
  };
  return (
    <>
      <div>
        <button onClick={Decrement}>Decrement -</button>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment +</button>
      </div>
      <div>
        <button onClick={Increment1} style={btn}>
          👍🏻{Incount}
        </button>
        <button onClick={Increment2} style={btn}>
          👎🏻{Decount}
        </button>
      </div>
 
    </>
  );
}
