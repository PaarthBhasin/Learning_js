try {
    console.log(paarth);
} catch (err) {
    console.log("this is an error");
    console.log(paarth);
} finally {
    console.log("this is finally") //it will execute even if there is an error in catch
}
// finally will run even if the entire program is within a function and there is a return in try or catch.