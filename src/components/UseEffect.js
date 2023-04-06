import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [method, setMethod] = useState("posts");
  const [count, setCount] = useState(0);
  const [Items, setItems] = useState([]);
  //   Render every time's we re-render the component
//   console.log("render");
  useEffect(() => {
    console.log("render");
  });
  // Renders particular dependance That was in the Array
//   useEffect(()=>{
//     console.log("method type Changed")
//   }, [method])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${method}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  },[method]);
  function Decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function Increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <div>
        <button onClick={() => setMethod("posts")}>"Posts"</button>
        <button onClick={() => setMethod("photos")}>"Photos"</button>
        <button onClick={() => setMethod("comments")}>"comments"</button>
        <h1>{method}</h1>
      </div>
      <div>
        <button onClick={Decrement}>Decrement -</button>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment +</button>
      </div>
      <div>
        {Items.map(i=>{
            return <>
            <div key={i.id}>
                <pre>{JSON.stringify(i)}</pre>
            <img src={i.url} alt=''></img>
            <h1>{i.title}</h1>
            <h1>{i.id}</h1>
            </div>
            </>
        })}
      </div>
    </>
  );
}
