import React, {useState } from 'react'
import HOC from './HOC'
import FunctionContextComponent from './FunctionContextComponent'
export const ThemeContext = React.createContext()
// export function Theme(){
//   return useContext(ThemeContext)
//  }
 function ContextHook({value}) {
     const [theme, setTheme] = useState(true)
     function Toggle(){
        setTheme(prevTheme => !prevTheme)
     }

  return (
    <div>
        <ThemeContext.Provider value={theme}>
        <button onClick={Toggle}>ToggleButton</button>
        <FunctionContextComponent/>
        </ThemeContext.Provider>
        <h1>My Name is: {value.name}</h1>
        <h1>My Role is: {value.Role}</h1>
        <h1>My Position is: {value.position}</h1>
    </div>
  )
}
export default HOC(ContextHook)
