import React from 'react'
import './Profile.css'

function Profile(props) {
    return (
        <div className='profileSection'>
            <div className='userInfo'>
                <h3>{props.name}</h3>
                <p className='emailInfo'>{props.email}</p>
            </div>
            <div className='countOfTask'>
                <div className='firstRow'>
                    <p className="firstRowItem">sbchj</p>
                    <p className="firstRowItem">shdcg</p>
                </div>
                <div className='secondRow'>
                    <p className="secondRowItem">sbchj</p>
                    <p className="secondRowItem">shdcg</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
