import React,  { useRef }  from 'react';
import HOC from './HOC';
  function RefHook({value}){
    const inputRef = useRef();
  const paraRef = useRef();
  function focus() {
    paraRef.current.style.backgroundColor = "yellow";
    paraRef.current.style.color = `black`;
    console.log(inputRef.current.rel);
    console.log(inputRef.current.className);
    console.log(inputRef.current.href);
    inputRef.current.style.color = "green";
    inputRef.current.style.textDecoration = "none";
  }
    return<>
      <p ref={paraRef}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          ref={inputRef}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={focus}>Click</button>
        <div>{value.name}</div>
        <div>{value.Role}</div>
        <div>{value.position}</div>
        <div>{value.color}</div>
    </>
}
export default HOC(RefHook)