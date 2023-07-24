// normal function
function addNums(num1=0,num2=0){
    return num1+num2;
}
console.log(addNums());

// arrow function
const addNum = (num1=0,num2=1) =>{
    return num1+num2;
}
console.log(addNum());

// simplified
const addnum = (num1=1,num2=0) => console.log(num1+num2);
addnum();

// one parameter
const addnum1 = num1 => num1++;
console.log(addnum1(1));