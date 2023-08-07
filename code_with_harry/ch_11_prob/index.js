class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
    get real() {
        return this._real;
    }
    get imaginary() {
        return this._imaginary;
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }
    set real(newReal) {
        this._real = newReal;
    }
}

let a = new Complex(2, 4)
a.real = 10
a.imaginary = 10
let b = new Complex(3, 6)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`);



// Prob 3
// class Human{
//     constructor(name,favfood){
//         this.name = name;
//         this.favfood =favfood;
//     }
//     walk(){
//         console.log(this.name+ " Human is walking");
//     }
// }
// class Student extends Human{
//     walk(){
//         console.log(this.name+ " student is walking");
//     }
// }
// let o = new Student("Paarth","Chicken");
// o.walk();

// console.log(o instanceof Human);//returns true