function x(){
    let a = 10;
     function y(){
        console.log(a);
     }
     return y;
}
console.log(x());