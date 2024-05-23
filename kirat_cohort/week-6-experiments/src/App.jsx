import { useEffect, useState } from "react";
import axios from "axios"

function App(){
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button onClick={()=> setSelectedId(1)}>1</button>
      <button onClick={()=> setSelectedId(2)}>2</button>
      <button onClick={()=> setSelectedId(3)}>3</button>
      <button onClick={()=> setSelectedId(4)}>4</button>
      <Todo id={selectedId} />
    </div>
  )
}
function Todo({id}){
  const [todo, setTodo] = useState({});

  useEffect(()=>{
      axios.get("https://sum-server.100xdevs.com/todos?id="+id)
      .then((res) =>{
        setTodo(res.data.todos);
        console.log(res.data.todos)
    }).catch((error)=>{
      console.error("Error fetching data:" , error);
    })
  }, [id])
  return(
    <div>
      Id: {id}
      <h1>{todo.title}</h1> 
       <h3>{todo.description}</h3>
    </div>
  )
}


export default App;