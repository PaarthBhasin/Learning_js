// function x(){
//     let a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
//     // return function y(){
//     //     console.log(a);
//     // } means the same as above
// }
// var b = x();
// console.log(b)
// b();




// function x(){
//     let a = 7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;//will return 100 now
// }
// var b = x();
// console.log(b)
// b();

function z(){
    function x(){
        let a = 7;
        function y(){
            console.log(a);
        }
        y();
    }
    x();
}
z();
// it forms closures for x and z also