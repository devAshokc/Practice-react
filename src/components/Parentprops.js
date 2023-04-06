import React, { useState } from 'react'
import Childprops from './Childprops'
export default function Parentprops() {
    const [Color, setColor] = useState('')
    function handleChange(e){
        setColor(e.target.value)
    }
  return <>
  <input type="text" placeholder='Enter the Color...' onChange={handleChange}/>
  
  <Childprops color={Color}/>
  </>
}
