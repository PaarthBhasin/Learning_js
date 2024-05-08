
function createChild(title, description, id){
    const child = document.createElement("div");
    const firstGrandChild = document.createElement("div");
    firstGrandChild.innerHTML = title;
    const secondGrandChild = document.createElement("div");
    secondGrandChild.innerHTML = description;
    const thirdGrandChild = document.createElement("button");
    thirdGrandChild.textContent = "Mark as done";
    thirdGrandChild.setAttribute("onclick", `marksAsDone(${id})`);
    child.appendChild(firstGrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);
    child.setAttribute("id",id);
    return child;
}
function updateDomAccToState(state){
    const parent = document.getElementById("container");
    parent.innerHTML = "";
    for(let i = 0; i< state.length; i++){
        const child = createChild(state[i].title, state[i].description, state[i].id);
        parent.appendChild(child);
    }
}

window.setInterval(async function (){
    // const res = await fetch("https://sum-server.100xdevs.com/todos");
    // const json = await res.json();
    // updateDomAccToState(json.todos);
})
