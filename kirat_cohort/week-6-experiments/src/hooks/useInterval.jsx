export function useInterval(fn, timeout){
    const time = setInterval(()=>{
        fn();
    }, timeout)
    return () =>{
        clearInterval(time);
    }
}