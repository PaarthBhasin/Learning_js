let a=[1,2,3,4,5];

function filterOddNumbers(a){
    const arr = a.filter( b => b%2 != 0);
    return arr;
}

const oddNumbers = filterOddNumbers(a);
console.log(oddNumbers)