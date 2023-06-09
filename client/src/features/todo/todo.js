import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "./todoSlice";

export function ToDos() {
    const allTodos = useSelector((state) => state.todo.value);
    const dispatch = useDispatch();

    let todosElements = Object.keys(allTodos).map((key) => {
        console.log(allTodos);
        return (
            <div key={key}>
                <hr />
                <p>{allTodos[key].todo}</p>
                <button onClick={() => dispatch(deleteToDo({ id: key }))}>
                    Delete
                </button>
                <hr />
            </div>
        );
    });

    return (
        <div>
            {todosElements}
            <input type="text" id="toDoInput" />
            <input type="number" defaultValue={0} id="toDoId" />
            <button
                onClick={() =>
                    dispatch(
                        addToDo({
                            todo: document.getElementById("toDoInput").value,
                            id: document.getElementById("toDoId").value,
                        })
                    )
                }
            >
                Add ToDo
            </button>
        </div>
    );
}
