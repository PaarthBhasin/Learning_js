// function x(){
//     var i = 1;
//     setTimeout( function (){
//         console.log(i);
//     }, 1000);
//     console.log('Paarth')
// }
// x();

function x(){
    for( var i=1; i<=5; i++){
        setTimeout( function (){
            console.log(i);
        }, i* 1000);
    }
    console.log('Paarth')
}
x();