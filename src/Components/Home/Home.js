import React from 'react'
import Profile from '../Profile/Profile'
import List from '../List/List'
import './Home.css'

function Home(props) {
    console.log(props.name);
    console.log(props.email);
    return (
        <div className="dashboard">
            <Profile name={props.name} email={props.email}/>
            <List />
        </div>
    )
}

export default Home
