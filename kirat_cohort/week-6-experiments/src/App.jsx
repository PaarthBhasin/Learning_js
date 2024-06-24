// import { useState } from "react";
import React from "react";

function App(){
    return <div>
        <MyComponent />
    </div>
}

// Class based component
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    incrementCount = () => {
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <div>
          <p>{this.state.count}</p>
          <button className="border border-solid text-white bg-black rounded-lg" onClick={this.incrementCount}>Increment</button>
        </div>
      );
    }
  }


// function based component
// function MyComponent(){
//     const [count, setCount]= useState(0);

//     const incrementCount = () =>{
//         setCount(count+1);
//     }
//     return(
//         <div>
//             <p>{count}</p>
//             <button className="border border-solid" onClick={incrementCount}>Increment</button>
//         </div>
//     )
// }

export default App;