import React, { useState } from 'react';
import './Login.css';
import { auth } from '../firebase'
import Home from '../Home/Home';


export default function Signup() {
    const [ isLoggedIn, setLogIn ] = useState(false);
    const [ nameValue, setNameValue ] = useState('');
    const [ emailValue, setEmailValue ] = useState('');
    const [ passwordValue, setPasswordValue ] = useState('')


    const submitValues = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            setLogIn(true);
        })
        .catch((error) => {
            alert("Signing up the new user");
            auth.createUserWithEmailAndPassword(emailValue, passwordValue)
            .then(()=>{
                setLogIn(true);
            })
            .catch((error) =>{
                alert(error.message)
            })
        })    
    }

    return(
        <div>
            {isLoggedIn ? <Home email={emailValue} name={nameValue}/> :
                (<div className='login-page'>
                    <h1 className='loginHeading'> To - Do App </h1>
                    <form className='loginForm' onSubmit={submitValues}>
                    <input className='nameField' type='text' 
                            placeholder = "Name"
                            value={nameValue} 
                            onChange={event => { 
                                setNameValue(event.target.value)
                            }}
                            required
                        />
                        <input className='emailField' type='email' 
                            placeholder = "✉️ &nbsp; &nbsp; Email"
                            value={emailValue} 
                            onChange={event => { 
                                setEmailValue(event.target.value)
                            }}
                            required
                        />
                        <input className='passwordField' type='password' 
                            placeholder="🔒 &nbsp; &nbsp; Password"
                            value={passwordValue} 
                            onChange={event => { 
                                setPasswordValue(event.target.value)
                            }}
                            required
                        />
                        <button className='logInButton' type='submit'>Login</button>
                    </form>
                </div>)}
        </div>
    )
}