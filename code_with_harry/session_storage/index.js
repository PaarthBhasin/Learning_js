// sessionStorage.setItem("name","Paarth")
// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")

window.onstorage = (e) => {
    alert("changed");
    console.log(e);
}
// this function is triggered whenever either the session storage or the local storage is changed/updated