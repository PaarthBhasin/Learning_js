import {useState} from "react";

function App() {
  const [todos, setToDos] = useState([{
    title:"Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  },{
    title:"Study DSA",
    description: "Study DSA from 9-11",
    completed: false
  }]);

  function addToDo(){
    setToDos([...todos,{
      title: "new Todo",
      description:"desc of new todo"
    }])
  }
  
  return (
    <div>
      <button onClick={addToDo}>Add random todos</button>
      {/* <Todo title={todos[0].title} description={todos[0].description} /> 
      <Todo title={todos[1].title} description={todos[1].description} />  */}
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} /> 
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
