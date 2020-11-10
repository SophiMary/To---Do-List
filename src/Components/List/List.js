import React, { useState } from 'react';

export default function List() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input]); //appends the submitted input to the todos array
        setInput('') // clears the input after clicking on 'Add task' 
    }

    return(
        <div className="List">
            <form>
                <input value={input} onChange={event => { setInput(event.target.value)}}/>
                <button type='submit' onClick={addTodo}>Add task</button>
            </form>
            <ul>
                {todos.map(todo => {
                    return(<li>{todo}</li>)
                })}
            </ul>
        </div>
    )
}