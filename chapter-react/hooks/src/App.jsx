import { useState, useEffect } from "react";
import "./App.css";

// custom hooks
function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data.todos));
    }, []);
    return todos;
}

export default function App() {
    const todos = useTodos();

    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    todo={todo.todo}
                    completed={todo.completed}
                />
            ))}
        </div>
    );
}

function Todo({ id, todo, completed }) {
    return (
        <div>
            <h1>Id: {id}</h1>
            <h1>{todo}</h1>
            // the completed value from data is bollean so we use conditional
            operator(?)
            <p>{completed ? "Completed" : "Not Completed"}</p>
        </div>
    );
}
