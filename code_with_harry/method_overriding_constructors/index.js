// super keyword is used to use the parent class methods in child classes
class Employee{
    constructor(name){//automatically called even in the child class if there is no constructor in the child class
        console.log(`${name} Employee's constructor is here : `);
    }
    login(){
        console.log("Employee has logged in");
    }
    logout(){
        console.log("Employee has logged out");
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}
class Programmer extends Employee{
    // constructor(){
    //     super();//constructor is automatically made without writing these 3 lines.We have to call the constructor of the parent class. Thus, we need to have super keyword in the child constructor.ie. super()
    // }
    requestCoffee(){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
        // console.log(`Employee has requested ${leaves+1}(one extra) leaves`);
    }
}

let e = new Programmer("Paarth")
e.login()
e.requestLeaves(3);

// this keyword needs to be written after the super keyword in the program