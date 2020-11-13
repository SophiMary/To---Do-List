import React, { useState, useEffect } from "react";
import { db } from "../firebase"
import "./TaskPage.css";
import DatePicker from "react-datepicker";
import CreateTask from "../CreateTask/CreateTask";
import ToDoList from "../ToDoList";

export default function TaskPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [ newtask, getToNewTaskPage] = useState(false)
    const [ todos, setTodos ] = useState([]);


    useEffect(() => {
        db.collection("todo").onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({
                    id: doc.id,
                    todo: doc.data()
                })
            ))
        })
    }, [])

    const taskButton = () => {
        getToNewTaskPage(true);
    }

    return (
        <>
            { newtask ? <CreateTask /> :
                ( <div>
                    <div className="taskSection">
                        <div className="headerSection">
                            <input className="searchBar" placeholder="🔍 &nbsp; &nbsp; Search Tasks by Title"/>
                            <button className="taskButton" onClick={taskButton}>New Task</button>
                            <DatePicker className="date" selected={startDate} onChange={date => setStartDate(date)} />
                        </div>
                    </div> 

                    {todos.map(({id, todo}) => {
                    return(<ToDoList 
                                key={id}
                                todo={todo.task}
                            />
                        )
                    })}
                </div>)
            }
        </>
    )
}
