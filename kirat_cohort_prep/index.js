function a (arr, callback){
    const modifiedArray = arr.map(callback);
    return modifiedArray;
}
const originalArray = [1,2,3,4];

const doubleCallback = function (element){
    return element*2;
}
const doubleArray = a(originalArray, doubleCallback);
console.log(doubleArray);