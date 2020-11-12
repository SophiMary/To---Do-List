import React, { useState, useEffect } from "react";
import { db } from ".././firebase";
import ToDoList from "../ToDoList";
import "./List.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function List() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [ description, addDescription ] = useState("");
    const [taskDate, setTaskDate] = useState(new Date());


    useEffect(() => {
        db.collection("todo").onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({
                    id: doc.id,
                    todo: doc.data()
                })
            ))
        })
    }, [])


    const addTodo = (event) => {
        event.preventDefault();
        console.log(input);
        db.collection("todo").add({
            task: input
        })
        setInput(""); // clears the input after clicking on "Add task" 
        addDescription("");
    }

    return(
        <>
            <div className="listHeader">
                <p> ← </p>
                <p>Create Task</p>
            </div>
            <div className="List">
                <form onSubmit={addTodo}>
                    <label for="taskName">Enter Task Name</label>
                    <input value={input} className="taskName" onChange={event => { setInput(event.target.value) }} placeholder="Task Name" required/>

                    <label for="description">Enter Description</label>
                    <input value={description} className="description" onChange={event => { addDescription(event.target.value) }} placeholder="Task Name" required/>
                    
                    <DatePicker className="date" selected={taskDate} onChange={date => setTaskDate(date)} />
                    <button type="submit">Create</button>
                </form>
                {todos.map(({id, todo}) => {
                    return(<ToDoList 
                            key={id}
                            todo={todo.task}
                        />
                    )
                })}
            </div>
        </>
    )
}