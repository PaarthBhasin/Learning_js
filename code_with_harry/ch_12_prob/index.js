// Prob 1-Sol1
// const a = () =>{
//     setTimeout(()=>{
//         console.log("Hello")
//     },2000)
//     setTimeout(()=>{
//         console.log("World")
//     },4000)
// }
// a();

// Prob 1-Sol2
// const a = async (text) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return resolve(text);
//         },2000)
//     })
// }
// (
//     async() => {
//     let text = await a("Hello");
//     console.log(text);
//     let text1 = await a("World");
//     console.log(text1);

// })()

// Prob 2
// function sum(a,b,c){
//     return a+b+c;
// }
// let x= [1,3,5];
// console.log(sum(...x))

// Prob 3
// const a = async (text,n) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return resolve(text);
//         },1000*n)
//     })
// }
// (
//     async() => {
//     let text = await a("Hello",2);
//     console.log(text);
//     let text1 = await a("World",4);
//     console.log(text1);

// })()

// Prob 4
function simple(p, r, t) {
    return (p * r * t) / 100;
}
console.log(simple(1000, 5, 1));