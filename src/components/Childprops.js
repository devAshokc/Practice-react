import React from 'react'

function Childprops({color}) {
    const style ={
        border:"1px solid black", 
        backgroundColor:`${color}`,
        padding:"2rem"
    }
  return (
    <div style={style}>You have entered this Color: {color} </div>
  )
}

export default Childprops