import axios from "axios";
import { useEffect, useState } from "react";

function App(){
    const todos = useTodos();

    return <>
        {todos.map((todo, index) => <Track key={index} todo={todo} />)}
    </>
}

function Track({todo}){
    return <div>
        {todo.title}
        <br />
        {todo.description}
    </div>
}


const useTodos = () =>{
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
            setTodos(res.data.todos)
        })
    },[])
    return todos;

}
export default App;