async function paarth(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 degrees");
        },2000);
    });

    let bangaloreWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("24 degrees");
        },5000);
    });
    // delhiWeather.then(alert);
    // bangaloreWeather.then(alert);
    console.log("fetching delhi weather...");
    let delhiW = await delhiWeather;
    console.log("fetched the delhi weather "+delhiW);
    console.log("fetching delhi weather...");
    let bangaloreW = await bangaloreWeather;
    console.log("fetched the bangalore weather "+bangaloreW);
    return [delhiW,bangaloreW];
}
const cherry = async () =>{
    console.log("Hey, I am cherry and I am  waiting");
}
const main1 = async ()=>{
    console.log("welcome to weather control room!");
    let a = await paarth();
    let b = await cherry();
    
}
main1();
// await stops the execution until the current line is executed
