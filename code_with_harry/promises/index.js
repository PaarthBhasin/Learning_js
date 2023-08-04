let promise = new Promise(function (resolve,reject){
    alert("I am an alert of the promise");
});

console.log("hello one");
setTimeout(function(){
    console.log("Hello Two in two seconds");
},2000);
console.log("My name is "+"Hello Three");

