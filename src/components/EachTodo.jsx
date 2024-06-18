import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function EachTodo({ todo }) {

    const [ isTodoEditable, setIsTodoEditable ] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.text)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     setTodoMsg(todo.text);
    // }, [todo.text])

    const editTodo = () => {
        dispatch(updateTodo({id:todo.id , text: todoMsg}))
        setIsTodoEditable(false)
    }

    const handleDelete = () => {
        console.log("Deleting todo with id:", todo.id);
        dispatch(removeTodo({ id: todo.id }));
    }
    

    return(
        <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-xl gap-5"
            key={todo.id}
        >
            <input 
                type="text" 
                className={`text-white w-full bg-zinc-800 ${isTodoEditable ? "border-white/10 px-2" : "border-transparent"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <div className="flex justify-end gap-2">
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            <button
                onClick={handleDelete}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            > ❌
            </button>
            </div>
        </li>
    )
}

export default EachTodo