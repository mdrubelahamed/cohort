import React, { useState } from "react"
import { useSetRecoilState } from "recoil"
import { todoListState } from "../atoms/TodoAtom"

export function AddTodo() {
    const [inputValue, setInputValue] = useState("")
    const setTodoList = useSetRecoilState(todoListState)

    const addTodo = () => {
        if (inputValue.trim() === "") return

        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: Date.now(),
                text: inputValue,
                isComplete: false,
            },
        ])
        setInputValue("")
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add a new task" />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

