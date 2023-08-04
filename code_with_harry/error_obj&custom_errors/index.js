try {
    let age = prompt("Enter your age :");
    age = Number.parseInt(age);
    if (age > 100) {
        throw new Error("This is probably not true");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}