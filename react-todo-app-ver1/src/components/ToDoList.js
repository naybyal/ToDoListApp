import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
function ToDoList() {
    const [todos, setToDos] = useState([])

    const addTask = todo => {
        if (!todo.text || /^\s*$/.test(todo.text))
            return
        const newToDos = [todo, ...todos]
        setToDos(newToDos)

        console.log(todo, ...todos);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setToDos(updatedTodos);
    }
  return (
    <div>
        <h1>what are you upto, today?</h1>
        <ToDoForm onSubmit={addTask}/>
        <ToDo 
            todos={todos}
            completeTodo={completeTodo}
        />
    </div>
  )
}

export default ToDoList