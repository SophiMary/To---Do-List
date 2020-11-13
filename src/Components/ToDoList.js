import React from "react"

function ToDoList(props) {
    console.log(props.todo);
    let taskDate = props.todo.taskDate.toDate();

    let options =  {
        month: 'short'
    }
    
    let month = new Intl.DateTimeFormat('en-US', options).format(taskDate);
    console.log(month);
    let date = `${month}  ${taskDate.getDate()}`;
    

    return (
        <div>
            <ul>
                <li>{props.todo.task}</li>
                <li>{props.todo.description}</li>
                <li>{new Date(props.todo.taskDate.seconds * 1000).toLocaleDateString("default")}</li>
                <li>{props.todo.tagNames}</li>
            </ul>
        </div>
    )
}

export default ToDoList
