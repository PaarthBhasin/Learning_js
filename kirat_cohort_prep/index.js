function calculate(){
    const len = document.getElementById("len").value
    const bre = document.getElementById("bre").value

    const l = parseFloat(len);
    const b = parseFloat(bre);

    const area = l*b;
    const peri = 2*(l+b);

    const ans = document.getElementById("ans");
    ans.textContent = `The area of the rectangle is : ${area} and the perimter is : ${peri}`;
}
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
})