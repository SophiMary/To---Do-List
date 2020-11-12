import React from "react"

function ToDoList(props) {
    console.log("3 : " +props.todo)

    return (
        <div>
            <ul>
                <li>{props.todo}</li>
            </ul>
        </div>
    )
}

export default ToDoList
