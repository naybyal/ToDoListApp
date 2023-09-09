import React, {useState} from 'react'

function ToDoForm(props) {
    const[input, setInput] = useState('')

    const copeChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('')
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
                type ="text" 
                placeholder="write task"
                value={input}
                name="text"
                className='todo-input'
                onChange={copeChange}
            />
            <button className='todo-button'>add task</button>
        </form>
    )
}

export default ToDoForm