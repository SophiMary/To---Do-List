import React, { useState } from "react";
import { db } from "../firebase";
import "./CreateTask.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateTask() {
    const tagNames = [];


    const [ task, setTask ] = useState("");
    const [ description, addDescription ] = useState("");
    let [ taskDate, setTaskDate ] = useState(new Date());
    // let [ state, setState ] = useState({
    //     isChecked: false
    // })

    const addTodo = (event) => {
        event.preventDefault();
        // taskDate = taskDate.toDateString();
        // console.log(taskDate);
        db.collection("todo").add({
            task,
            description,
            taskDate,
            tagNames
        })
        setTask(""); // clears the input after clicking on "Add task" 
        addDescription("");
    }

    const navigateBack = () => {

    }

    const handleCheckbox = (e) => {
        const target = e.target;

        if(target.checked) {
            tagNames.push(target.name)
        }else{
            if(tagNames.includes(target.name)){
                tagNames.pop(target.name)
            }  
        }
         console.log(tagNames);   
    }

        // if(target.checked) {
        //     if()
        //     setState({
        //         isChecked: true
        //     })
        // }
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;

        // console.log("value" + value);
        // console.log("name" + e)

        // setState( {
        //     [name]: value
        // })
        // console.log("setState" + state);

    return(
        <div>
            <div className="listHeader">
                <button type="button" className="backButton" onClick={navigateBack}> ← </button>
                <p>Create Task</p>
            </div>

            <form>   
                <div className="list">

                    <div className="formLeftSection">
                        <div className="taskAndDescription">

                            <div className="taskLabelSection">
                                <label htmlFor="task" className="taskLabel">Enter Task Name</label>
                            </div>
                            <div className="taskFiled">
                                <input value={task} className="task" onChange={event => { setTask(event.target.value) }} placeholder="Task Name" required/>
                            </div>
                    
                            <div className="decriptionLabelSection">
                                <label htmlFor="description" className="descriptionLabel">Enter Description</label>
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
                                <label className="personalLabel" htmlFor="personal">
                                    <input type="checkbox" name="Personal" className="personal"  onChange={handleCheckbox}/>
                                    Personal
                                </label>

                                <label className="officialLabel" htmlFor="official">
                                    <input type="checkbox" name="Official" className="official" onChange={handleCheckbox}/>
                                    Official
                                </label>

                                <label className="miscellaneousLabel" htmlFor="miscellaneous">
                                    <input type="checkbox" name="Miscellaneous" className="miscellaneous"  onChange={handleCheckbox}/>
                                    Miscellaneous
                                </label>
                            </div>
                        </div>
                        

                        <div className="dateField">
                            <div className="dateLabelSection">
                                <label htmlFor="date" className="dateLabel">Select Date</label>
                            </div>
                            <div className="datePickerField">
                                <DatePicker className="date datePicker" selected={taskDate} onChange={date => setTaskDate(date)} />
                            </div>
                        </div>

                        <div className="buttons">
                            <button className="cancelButton" type="button" onClick={navigateBack}>Cancel</button> 
                            <button className="createButton" type="submit" onClick={addTodo}>Create</button>
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
