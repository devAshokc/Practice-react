import React from 'react'

export default function HOC(Component) {
    const sampleObject ={
        name:"sathish",
        Role: "Full Stack Developer",
        position:"Public Speeker",
        color:"orange"
    }
  return ()=>
   <Component value={sampleObject}/>
}
