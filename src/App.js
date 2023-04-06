import "./App.css";
import React from "react";
import RefHook from './components/RefHook'
import ContextHook from "./components/ContextHook";
import StateHook from "./components/StateHook";
import Parentprops from "./components/Parentprops";
import UseEffect from "./components/UseEffect";
import { Login } from "./components/Login/Login";
function App() {
  
  return (
    <div className="App">
     <RefHook/>
     <ContextHook/>
     <StateHook/>
     <Parentprops/>
     <UseEffect/>
     <Login/>
    </div>
  );
}

export default App;
