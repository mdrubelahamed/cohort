import React from "react"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil"
import { TodoList } from "./components/TodoList"
import { AddTodo } from "./components/AddTodo"

export default function App() {
    return (
        <div className="app-container">
            <h1>Todo list</h1>
            <AddTodo />
            <TodoList />
        </div>
    )
}
