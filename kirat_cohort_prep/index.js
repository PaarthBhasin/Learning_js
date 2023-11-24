function gradeCal(){
    const marks = document.getElementById("marksId").value;

    const m = parseFloat(marks);

    if(m >= 90 && m <= 100){
        console.log("Your grade is A")
    }
}
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
})