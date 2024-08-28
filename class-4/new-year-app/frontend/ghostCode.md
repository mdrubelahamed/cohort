```jsx
import { useState } from "react"
import "./App.css"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"


// use effect hook => need to learn
function App() {
    const [todos, setTodos] = useState([])

    fetch("http://localhost:3000/todos").then(async (res) => {
        const json = await res.json()
        setTodos(json.todos)
    })

    return (
        <div>
            <CreateTodo />
            <Todos todos={todos} />
        </div>
    )
}

export default App
```