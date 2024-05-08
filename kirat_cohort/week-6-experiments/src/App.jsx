import { useState } from "react";

let counter = 4;

function App(){
  const [todos, setTodos] = useState([{
    id:1,
    title:"Go to gym",
    description: "Need to hit the gym from 7-9pm"
  },{
    id:2,
    title:"Go to college",
    description: "Need to attend college from 9-4pm"
  },{
    id:3,
    title:"Go to sleep",
    description: "Need to go to sleep from 12-7am"
  }]);

  function addTodo(){
    setTodos([...todos, {
      id:counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }
  return(
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}
function Todo({title, description}){
  return(
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
export default App;