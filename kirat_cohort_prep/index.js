function checklegal(){
    const ageId = document.getElementById("age").value;

    const a = parseFloat(ageId);
    if(a >18){
        console.log("You are eligible to drive");
    }
    else{
        console.log("You are not eligible to drive")
    }
}
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
})