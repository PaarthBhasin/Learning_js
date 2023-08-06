let a = [
    "Initializing hack tool...",
    "Connecting to Facebook...",
    "Connected to Server 1...",
    "Connection Failed.Retrying...",
    "Connected to Server 2...",
    "Username iampaarth...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing account...",
    "Successful..."
];

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, seconds * 1000);
    })
}
const showHack = async (message) => {
    await sleep(2);
    text.innerHTML = text.innerHTML + message + "<br/>";
}

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i]);
    }
})()
// iif=immediately invoked function- is called immediately when it is defined