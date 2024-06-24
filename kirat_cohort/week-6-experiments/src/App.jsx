import { useState} from "react";

// useInterval
// import { useInterval } from "./hooks/useInterval";

// function App(){
//     const [count, setCount] = useState(0);

//     useInterval(()=>{
//         setCount(c => c+1);
//     }, 3000);
//     return (
//         <>
//         Timer is at {count}</>
//     )
// }

// useDebouncing
import React from 'react';
import { useDebounce } from "./hooks/useDebounce";

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    Debounced value is {debouncedValue}
    </>
  );
};


export default App;