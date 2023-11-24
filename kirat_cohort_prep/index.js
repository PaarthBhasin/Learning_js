function simplei(){
    const principle = document.getElementById("principleId").value;
    const rate = document.getElementById("rateId").value;
    const years = document.getElementById("yearsId").value;

    const p = parseFloat(principle);
    const r = parseFloat(rate);
    const t = parseFloat(years);

    const si = (p*r*t)/100;

    const interest = document.getElementById("interest");
    interest.textContent = `The simple interest is : ${si}`;
}
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
});