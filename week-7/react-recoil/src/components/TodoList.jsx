import React from "react"
import { useRecoilValue } from "recoil"
import { todoListState } from "../atoms/TodoAtom"
import TodoItem from "./TodoItem"

export function TodoList() {
    const todoList = useRecoilValue(todoListState)

    return (
        <div>
            {todoList.length === 0 ? (
                <p>No tasks yet!</p>
            ) : (
                todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
        </div>
    )
}

