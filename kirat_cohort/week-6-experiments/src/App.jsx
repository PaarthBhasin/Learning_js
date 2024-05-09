import { useEffect, useState } from "react";

function App(){
  const [todos, setTodos] = useState([]);
  
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then( async (res) =>{
      const json = await res.json();
      setTodos(json.todos);
    })
  }, []);

  return(
    <div>
      {todos.map(todo=> <li key={todo.id}>{todo.title} : {todo.description}</li>)}
    </div>
  )
}

export default App;