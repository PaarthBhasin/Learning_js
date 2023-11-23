function convertDistance(){
    const distance = document.getElementById("dist").value;//returns string value
    const kilometers = parseFloat(distance);//converts string to float value

    if(isNaN(kilometers)){
        alert("Please enter a valid distance");
        return;
    }
    else{
        const meters = kilometers * 1000;
        const centimeters = kilometers *100000;

        const result = document.getElementById("ans");
        result.textContent = `${kilometers} kilometers is equivalent to ${meters}meters and ${centimeters} centimeters`
    }
}
document.getElementById('myForm').addEventListener('submit', function (event){
    event.preventDefault();
});