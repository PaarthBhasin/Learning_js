import { useIsOnline } from "./hooks/useIsOnline";
import { useWindowDimension } from "./hooks/useWindowDimension";


// useIsOnline()
// function App(){
//     const isOnline = useIsOnline();
//     if(isOnline){
//         return "You are online yay!!!"
//     }
//     return "You are offline, please connect to the internet"
// }

// useMousePointer()
// function App(){
//     const mousePointer = useMousePointer();
//    return (
//     <>
//     Your mouse position is : {mousePointer.x} : {mousePointer.y}
//     </>
//    )
// }

function App() {
    const windowDimensions = useWindowDimension();

    return(
        <>
        Your window dimensions are: {windowDimensions.height} : {windowDimensions.width}</>
    )
}

export default App;