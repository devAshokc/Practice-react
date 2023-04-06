import React,{useContext} from 'react'
import { ThemeContext } from './ContextHook'
// import { Theme } from './ContextHook'
export default function FunctionContextComponent() {
    const theme = useContext(ThemeContext)
    const FunContext ={
        backgroundColor: theme ? "#cdeccd": "gray",
        color: theme ? "black": "white",
        padding: "15px",
        fontSize: "20px"
    }
  return (
    <div style={FunContext}>FunctionContextComponent</div>
  )
}
