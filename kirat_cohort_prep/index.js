function calcArea(){
    const radius = document.getElementById("radius").value;
    const Radius = parseFloat(radius);

    if(isNaN(Radius)){
        alert("enter a valid radius");
        return;
    }

    const a = 3.14 * Radius * Radius;

    const result = document.getElementById("area");
    result.textContent = `the area of a circle of radius ${radius} is ${a}`
}
document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
});