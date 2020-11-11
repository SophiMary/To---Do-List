import React, { useState } from 'react';
import './Task.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import List from '../List/List';

function Task() {
    const [startDate, setStartDate] = useState(new Date());
    const [ newtask, getToNewTaskPage] = useState(false)

    const taskButton = () => {
        getToNewTaskPage(true);
    }

    return (
        <>
        { newtask ? <List /> :
            ( <div className='taskSection'>
                <div className='headerSection'>
                    <input className='searchBar' placeholder='🔍 &nbsp; &nbsp; Search Tasks by Title'/>
                    <button className='taskButton' onClick={taskButton}>New Task</button>
                    <DatePicker className='date' selected={startDate} onChange={date => setStartDate(date)} />
                </div>
            </div> ) }
        </>
    )
}

export default Task
