import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/TodoAtom";

function TodoItem({ todo }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const toggleComplete = () => {
        const updatedList = todoList.map((item) =>
            item.id === todo.id ? { ...item, isComplete: !item.isComplete } : item
        );
        setTodoList(updatedList);
    };

    return (
        <div className={`todo-item ${todo.isComplete ? "completed" : ""}`}>
            <span>{todo.text}</span>
            <button onClick={toggleComplete}>{todo.isComplete ? "Undo" : "Complete"}</button>
        </div>
    );
}

// Make sure you have this line:
export default TodoItem;
