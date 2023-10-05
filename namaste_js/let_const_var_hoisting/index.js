const radii = [3,1,2,4];
const area = function(radius){
    return Math.PI * radius * radius;
}
console.log(radii.map(function(radius){
    return Math.PI * radius * radius;
}));
console.log(radiuss.map(area));