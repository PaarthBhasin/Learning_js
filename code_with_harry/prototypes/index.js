let a={
    name:"paarth",
    language:"JavaScript",
    run:()=>{
        alert("self run");
    }
}
console.log(a);


let p={
    run : () =>{
        alert("run");
    }
}
p.__proto__={
    name1:"pb"
};
a.__proto__=p;
a.run();