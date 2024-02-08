let globalId = 1;

function marksAsDone(todoId){
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!"
}
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
function addToDo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parent = document.getElementById("outerDiv");
    parent.appendChild(createChild(title, description, globalId++));
}
