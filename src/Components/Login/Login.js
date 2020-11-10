import React, { useState } from 'react';
import List from '../List/List';
import './Login.css';

export default function Login() {
    const [ isLoggedIn, setLogIn ] = useState(false);
    const [ emailValue, setEmailValue ] = useState('');
    const [ passwordValue, setPasswordValue ] = useState('')

    const submitValues = (e) => {
        e.preventDefault();

        const payload = {
            email: emailValue,
            password: passwordValue
        }

        fetch(('https://reqres.in/api/login'), {
            method: 'POST',
            body: JSON.stringify(payload)
        })
        .then(data => {
            console.log(data);
            setLogIn(true)
        })
        setEmailValue('');
        setPasswordValue('');
    }

    return(
        <div className='login-page'>
            <h1 className='loginHeading'> To - Do App </h1>
            <form className='loginForm'>
                <input className='emailField' type='email' 
                    placeholder="Email ID"
                    value={emailValue} 
                    onChange={event => { 
                        setEmailValue(event.target.value)
                    }}
                />
                <input className='passwordField' type='password' 
                    placeholder="Password"
                    value={passwordValue} 
                    onChange={event => { 
                        setPasswordValue(event.target.value)
                    }}
                />
                <button className='logInButton' type='submit' onClick={submitValues}>Login</button>
            </form>
            {isLoggedIn && <List />}
        </div>
    )
}