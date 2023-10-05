const radii = [3,1,2,4];
console.log(radii.filter(function (radius){
    return radius<3;
}))