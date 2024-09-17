import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/todos").then((response) => {
            setTodos(response.data.todos);
            console.log("Code get run" + Math.random());
            
        });
    }, []);

    return (
        <>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo.todo} completed={todo.completed} />
            ))}
        </>
    );
}

function Todo({ todo, completed }) {
    return (
        <div style={{padding:".9rem"}}>
            <h2>Todo: {todo} </h2>
            <span>Completed: {completed.toString()}</span>
        </div>
    );
}

export default App;
