import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./CreateTask.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateTask() {

    const [ input, setInput ] = useState("");
    const [ description, addDescription ] = useState("");
    const [ taskDate, setTaskDate ] = useState(new Date());

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
        <div>
            <div className="listHeader">
                <p> ← </p>
                <p>Create Task</p>
            </div>

            <form>   
                <div className="list">

                    <div className="formLeftSection">
                        <div className="taskAndDescription">

                            <div className="taskLabelSection">
                                <label for="task" className="taskLabel">Enter Task Name</label>
                            </div>
                            <div className="taskFiled">
                                <input value={input} className="task" onChange={event => { setInput(event.target.value) }} placeholder="Task Name" required/>
                            </div>
                    
                            <div className="decriptionLabelSection">
                                <label for="description" className="descriptionLabel">Enter Description</label>
                            </div>

                            <div className="decriptionField">
                                <textarea value={description} className="description" onChange={event => { addDescription(event.target.value) }} placeholder="Description" rows="8" required/>
                            </div>
                        </div>    

                        <div className="tags">

                            <div className="tagLabelSection">
                                <label className="tagLabel"> Select Tag</label>
                            </div>
                            
                            <div className="tagsOption">
                                <input type="checkbox" className="personal"/>
                                <label className="personalLabel" for="Personal">Personal</label>    
                        
                                <input type="checkbox" className="official"/>
                                <label className="officialLabel" for="Official">Official</label>    

                                <input type="checkbox" className="miscellaneous"/>
                                <label className="miscellaneousLabel" for="Miscellaneous">Miscellaneous</label>
                            </div>
                        </div>
                        

                        <div className="dateField">
                            <div className="dateLabelSection">
                                <label for="date" className="dateLabel">Select Date</label>
                            </div>
                            <div className="datePickerField">
                                <DatePicker className="date datePicker" selected={taskDate} onChange={date => setTaskDate(date)} />
                            </div>
                        </div>

                        <div className="buttons">
                            <button className="cancelButton" type="button">Cancel</button> 
                            <button className="createButton" type="submit">Create</button>
                        </div>

                    </div>


                    <div className="formRightSection">

                        <div className="subTaskSection">
                            <label className="subTaskLabel"> Sub-tasks</label>
                        </div>

                        <div className="checkboxSection">
                            <div className="checkbox">
                                <input className="subTaskCheckbox" type="checkbox" />
                            </div>
                            <div className="subtask">
                                <input className="subTaskInput" type="text" placeholder="Sub Task 1"/>
                            </div>
                            <div className="deleteButtonSection">
                                <p className="deleteButton">🗑</p>
                            </div>
                        </div>

                        <div className="addSubTask">
                            <button className="addSubTaskButton"> + &nbsp; &nbsp; New Sub Task</button>
                        </div>   
                    </div>
                </div>
            </form>
        </div>
    )
}
