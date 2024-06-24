import axios from "axios"
import { useEffect, useState } from "react"

// function App() {
//   const { todos, loading } = useTodos(5)

//   return loading ? (
//     <div> Loading...</div>
//   ) : (
//     <>
//       {todos.map((todo, index) => (
//         <Track key={index} todo={todo} />
//       ))}
//     </>
//   )
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   )
// }

// const useTodos = (n) => {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchTodos = () => {
//       axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//         setTodos(res.data.todos)
//         setLoading(false)
//       })
//     }
//     fetchTodos();
//     const value = setInterval(fetchTodos, [n * 1000])

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])
// //   here, fetchTodos will be executed first. And then, we have set an interal where it will be executed again
// // and finally, we clear our interval

//   return { todos, loading }
// }

// SWR approach:
import useSWR from 'swr'

const fetcher = async function (url){
    const data = await fetch(url);
    const json = await data.json();
    return json;
};

function App(){
    const {data, error, isLoading} = useSWR("https://sum-server.100xdevs.com/todos", fetcher);

    if(error){
        return <div>failed to load</div>
    }
    if(isLoading){
        return <div>Loading...</div>
    }
    return <div>Hello, you have {data.todos.length} todos!</div>
}



export default App
