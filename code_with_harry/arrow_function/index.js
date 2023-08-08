// const sayHello = () =>{
//     console.log("hello");
// }
// sayHello();

const sayHello = () => console.log("hello");
console.log("hi")
sayHello(); //works but not recommmended for more than 1 line of code

const x = {
    name: "Paarth",
    role: "JS Developer",
    exp: 30,
    show: function () {
        setTimeout(() => {
            console.log(`The name is ${this.name} and the role is ${this.role}`)
        }, 2000)
    }
}
// in an arrow function within a normal function in javascript, this is the object and in case of a norma function within a normal function within an object, this is the function within which the inner function is wrapped around.
// to solve this ,
const y = {
    name: "Paarth",
    role: "JS Developer",
    exp: 30,
    show: function () {
        let that = this;
        setTimeout(function () {
            console.log(`The name is ${that.name} and the role is ${that.role}`)
        }, 2000)
    }
}
y.show()