import React, { useState, useEffect } from 'react';
import { db } from '.././firebase';
import ToDoList from '../ToDoList';

export default function List() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('todo').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({
                    id: doc.id,
                    todo: doc.data().task
                })
            ))
        })
    }, [])


    const addTodo = (event) => {
        event.preventDefault();
        console.log(input);
        db.collection('todo').add({
            todo: input
        })
        setInput('') // clears the input after clicking on 'Add task' 
    }

    return(
        <div className="List">
            <form>
                <input value={input} onChange={event => { setInput(event.target.value) }}/>
                <button type='submit' onClick={addTodo}>Add task</button>
            </form>
            <ul>
                {todos.map(({id, todo}) => {
                    return(<ToDoList 
                            key={id}
                            todo={todo}
                        />
                    )
                })}
            </ul>
        </div>
    )
}