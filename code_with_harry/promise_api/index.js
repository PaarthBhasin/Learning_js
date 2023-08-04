let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 1");
        // reject(new Error("Error"));
    },1000);
});
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 2");
    },2000);
});
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 3");
    },3000);
});

// p1.then((value)=>{
//     console.log(value);
// });
// p2.then((value)=>{
//     console.log(value)
// });
// p3.then((value)=>{
//     console.log(value);
// });

// let promise_all = Promise.all([p1,p2,p3]);//doesn't work in case of error in any one promise
// let promise_all = Promise.allSettled([p1,p2,p3]);//works even in case of error in any  promise
// let promise_all = Promise.race([p1,p2,p3]);//returns the promise first completed and if first promise is rejected, it throws an error
// let promise_all= Promise.any([p1,p2,p3]);//waits for the first problem to be fulfilled but not rejected
promise_all.then((value)=>{
    console.log(value);
});
