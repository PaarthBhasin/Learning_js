const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(src);
        }
        document.head.append('script');
    });
}
// Prob 1
// let a= loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
// a.then((value)=>{
//     console.log(value);
// })

// Prob 2
// const main2=()=>{
//     console.log(new Date().getSeconds());
//     let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date());
// }
// main2();

// Prob3
// let p = () =>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("Please this is not acceptable"));
//     },3000)
// })
// }
// let a = async() =>{
//     let c = await p();
//     console.log(c);
// }
// a();

// Prob 4
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}
let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000)
    })
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    })
}
const run = async () => {
    console.time("run");
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();

    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1, a2, a3]);
    console.log(a1a2a3);
    console.timeEnd("run");
}
run();