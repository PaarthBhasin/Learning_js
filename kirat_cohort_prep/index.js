function transform(str){
    const uStr = str.map((s)=>{
        return s.toUpperCase();
    })
    return uStr;
}
const arr = ["paarth", "ginni","neha", "pankaj"]
const ans = transform(arr);
console.log(ans)