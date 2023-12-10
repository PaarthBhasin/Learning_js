function fact(num){
    if(num == 1){
        return 1;
    }
    return num * fact(num-1);
}
const a = fact(3);
console.log(a)