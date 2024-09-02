import "./App.css"
import { useState } from "react"

export default function MyApp() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }
    return (
        <>
            <h1>update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </>
    )
}

function MyButton({ count, onClick }) {
    return (
        <div>
            <button onClick={onClick}>Click {count} times</button>
        </div>
    )
}

