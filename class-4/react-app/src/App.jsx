import { useState } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([
        {
            title: "Todo 1",
            description: "todo 1 is running",
            completed: false,
        },
        {
            title: "Todo 2",
            description: "todo 2 not yet done",
            completed: false,
        },
        {
            title: "Todo 3",
            description: "todo 3 is completed",
            completed: true,
        },
    ]);

    function addTodo() {
        setTodos([
            ...todos,
            {
                title: "new todo",
                description: "new desc",
            },
        ]);
    }
    return (
        <div>
            <button onClick={addTodo}>Add a random todo</button>
            {todos.map((todo) => {
                return <Todo title={todo.title} description={todo.description} />;
            })}
        </div>
    );
}

function Todo(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    );
}

export default App;
