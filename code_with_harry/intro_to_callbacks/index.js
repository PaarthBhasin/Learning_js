// let i=0;
// setTimeout(()=>{
//     i++;
//     console.log(`This is completion of ${2*i} seconds`);
// },2000);


// Callbacks
function loadScript(src,callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload= function(){
        console.log('Script is loaded : '+src);
        callback(null,src);//another function called inside another function ie. loadScript.
    }
    script.onerror = function(){
        console.log('Error loading script with SRC' +src);
        callback(new Error("Scr got some error"));
    }
    document.head.append(script);

}
function hello(error,src){
    if(error){
        console.log(error);
        return;
    }
    console.log("Good morning! "+src);
}
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js',hello);//hello is the callback function
