import React from "react"
import Profile from "../Profile/Profile"
import List from "../List/List"
import "./Home.css"
import Task from "../Task/Task";

function Home(props) {
    return (
        <div className="dashboard">
            <Profile name={props.name} email={props.email}/>
            <Task />
        </div>
    )
}

export default Home
