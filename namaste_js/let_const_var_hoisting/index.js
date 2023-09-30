const users = [
    {
        firstName: "paarth",
        lastName: "bhasin",
        age:'21'
    },
    {
        firstName: "pankaj",
        lastName: "bhasin",
        age:'61'
    },
    {
        firstName: "prakhar",
        lastName: "bhasin",
        age:'27'
    },
    {
        firstName: "guljeet",
        lastName: "kaur",
        age:'52'
    },

]

const output = users.reduce(function (acc,curr){
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;
},[])

console.log(output);