let p = fetch("https://goweather.herokuapp.com/weather/NewDelhi");

p.then((value) => {
    console.log(value.ok);
    console.log(value.status);
    console.log(value.text()); //can only read the input once
    return value.json();
}).then((value) => {
    console.log(value);
})