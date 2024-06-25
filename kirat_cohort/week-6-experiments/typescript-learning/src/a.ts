function identity<T>(arg:T ):T {
    return arg;
}

let output1 = identity<string>("myString1");
let output2 = identity<number>(100);

console.log(output1.toUpperCase());

function firstFunction<T>(arr:T[]) :T{
    return arr[0];
}

console.log(firstFunction([1,2,3,4]))