function calculateSum(){
    const num1 = document.getElementById("a1").value;
    const num2 = document.getElementById("a2").value;

    const a1 = parseFloat(num1);
    const a2 = parseFloat(num2);

    const sum = document.getElementById("ans");
    const a = a1 + a2;

    sum.textContent = `The sum of ${a1} and ${a2} is : ${a}`;
}
document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
})