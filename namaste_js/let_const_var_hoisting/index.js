const radius = [3,1,2,4];
const area = function(radius){
    return Math.PI * radius * radius;
}
console.log(radius.map(function(radiu){
    return Math.PI * radiu * radiu;
}));
console.log(radius.map(area));