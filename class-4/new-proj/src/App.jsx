import { useState, useEffect } from "react";
import "./App.css";

// Todo component accepts props
function Todo({ title, completed }) {
    return (
        <div style={{ marginBottom: ".5rem", padding: ".5rem" }}>
            <p>{title}</p>
            <span>{completed.toString()}</span>
        </div>
    );
}

export default function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://dummyjson.com/todos");
                const json = await res.json();
                setTodos(json["todos"]);
                console.log("Sent out request" + Math.random());
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
        // setInterval(fetchData, 1 * 1000);
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} title={todo.todo} completed={todo.completed} />
            ))}
        </div>
    );
}
