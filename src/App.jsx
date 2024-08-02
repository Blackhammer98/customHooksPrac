
import { useState } from 'react';
import { useIsOnline } from './Hooks/isOnline'
import { useDimension } from './Hooks/useDimensions';
import { useInterval } from './Hooks/useInterval';
import { useMousePointer } from './Hooks/useMousePointer';
import { useDebounce } from './Hooks/useDebounce';



function App() {
   const [inputValue ,  setInputValue] = useState("")
    const debouncedValue = useDebounce(inputValue,500)
   
   return<>
   Debounced value is : {debouncedValue}<br/>
   <input 
   type='text'
   value={inputValue}
   onChange={(e)=>setInputValue(e.target.value)}
   placeholder="Search....">
   </input>
   </>

}

export default App