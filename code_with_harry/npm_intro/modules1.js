const hello = () =>{
    console.log("hello")
}
const ahello = (name) =>{
    console.log("Hello "+name);
}
// add "type":"modules" to the package.json file
module.exports = {hello,ahello};