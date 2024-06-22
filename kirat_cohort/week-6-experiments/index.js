const axios = require('axios')
//get requests
// .then method
// function main() {
//     fetch("https://sum-server.100xdevs.com/todos")
//         .then(async response => {
//             const json = await response.json();
//             console.log(json.todos.length)
//         })  
// }

// axios 
// async function main() {
//     const response = await axios.get("https://sum-server.100xdevs.com/todos");
//     console.log(response.data.todos.length);
// }

// async function main() {
//     const response = await fetch("https://sum-server.100xdevs.com/todos");
//     const json = await response.json();
//     console.log(json)
// }

// POST

async function main() {
    const response = await fetch("https://www.toptal.com/developers/postbin/1718968829140-4359859260730", {
        method: "POST",
        headers: {
            "Authorization": "Bearer 123"
        }
    });
    const textualData = await response.text;
    console.log(textualData)
}

async function main() {
    const response = await axios.post("https://www.toptal.com/developers/postbin/1718968829140-4359859260730");
    console.log(response.data)
}

main();

