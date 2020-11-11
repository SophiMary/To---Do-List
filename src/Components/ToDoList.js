import React from 'react'

function ToDoList(props) {
    return (
        <div>
            <ul>
                <li>{props.todo}</li>
            </ul>
        </div>
    )
}

export default ToDoList
