function sasync(message,delay){
    setTimeout(()=>{
        console.log(message);
    },delay)
}
sasync("Hello", 10000);
