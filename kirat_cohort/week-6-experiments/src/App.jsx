import React, { useEffect, useState, Component } from "react";

function App(){
    const [render, setRender] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setRender(r=>!r);
        },3000)
    })

    return <div>
        {render ?<MyComponent />: <div></div> }
    </div>
}
// functional component
// function MyComponent(){
//     useEffect(()=>{
//         console.error("component mounted");
//         return () =>{
//             console.log("component unmounted")
//         }
//     },[])
//     return <div>
//         From inside my component
//     </div>
// }

// class component
class MyComponent extends React.Component(){
    componentDidMount(){
        console.log("component mounted")
    }
    componentWillUnmount(){
        console.log("component unmounted")
    }
    render (){
        return <div> Hi there</div>
    }
}

export default App;