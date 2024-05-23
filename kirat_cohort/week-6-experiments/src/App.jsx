import { useMemo, useState } from "react";

function App(){

  const [click, setClick] = useState(0);
  const [inputValue, setInputValue] = useState(1);


  let count = useMemo(() =>{
    let finalCount = 0;
    for(let i=1; i<= inputValue; i++){
      finalCount = finalCount + i; 
    }
    return finalCount; 
  }, [inputValue])


  return(
    <div>
      <input type="text" onChange={e=> setInputValue(e.target.value)} placeholder="Find the sum from 1 to n" />
      Sum from 1 to {inputValue} is {count}
      <button onClick={() => setClick(click+1)}>Counter({click})</button>
    </div>
  )
}
export default App;