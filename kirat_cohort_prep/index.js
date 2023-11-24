function dayNum(){
    const num = document.getElementById("dayId").value;
    const n = parseFloat(num);

    switch(n){
        case 1: 
        write("Sunday");
        break;
        case 2:
            write("Monday");
             break;
        case 3: 
            write("Tuesday");
            break;
        case 4: 
            write("Wednesday");
            break;
        case 5: 
            write("Thursday");
            break;
        case 6: 
            write("Friday");
            break;
        case 7: 
            write("Saturday");
            break;
    }
}
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
})

function write(p){
    document.getElementById("ans").textContent = p;
}