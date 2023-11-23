function total(){
    const m1 = document.getElementById("m1").value;
    const m2 = document.getElementById("m2").value;

    const t1 = parseFloat(m1);
    const t2 = parseFloat(m2);

    const sum = (t1 + t2)/2;

    const percentage = document.getElementById("percentage");
    percentage.textContent = `The total percentage is: ${sum}%`;
}
document.getElementById("myForm").addEventListener('submit', function(event){
    event.preventDefault();
})