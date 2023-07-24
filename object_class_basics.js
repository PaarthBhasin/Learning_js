//constructor function
function Person(firstname,lastname,dob){
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob= new Date(dob);
    this.birthyear=function(){
        return this.dob.getFullYear();
    }
    this.fullname= function(){
        return `${firstname} ${lastname}`;
    }
}
// we can attach methods or functions to the prototypes.
// Instantiate Object

// prototype (which has the function definition)
Person.prototype.getBirthYear=function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName=function(){
    return `${this.firstname} ${this.lastname}`;
}


// Class
class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=dob;
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


const person1=new Person('Paarth','Bhasin','8-15-2002');

console.log(person1);
console.log(person1.birthyear());
console.log(person1.firstname);
console.log(person1.fullname());