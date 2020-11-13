import React from "react"
import Profile from "../Profile/Profile"
import "./Home.css"
import TaskPage from "../TaskPage/TaskPage";

export default function Home(props) {
    return (
        <div className="dashboard">
            {/* <Profile name={props.name} email={props.email}/> */}
            <Profile />
            <TaskPage />
        </div>
    )
}