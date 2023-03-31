import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'
import EditTodoForm from './EditTodoForm';
uuidv4();

function TodoWrapper() {

    const [todos, setTodos] = useState([])

    const addTodos = todo => {
        setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false} ])
    }
    console.log(todos)

    const toggleComplete = id => { 
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

      const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
      }

      const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo))
      }

      const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id? {...todo, task, isEditing: !todo.isEditing} : todo))
      }

    



  return (

 
    <div className='bg-cambrigeblue min-h-screen text-center '>

        <br></br>

        <div className=' flex justify-center '>
      
      <div className='my-8   bg-slate-500 w-fit text-center rounded-lg border-4 border-black'>
      <h2 className='text-2xl text-white'>Mistie's Todo-App</h2>
    <TodoForm addTodos={addTodos}/>

    {todos.map((todo, index) => (
          todo.isEditing?(
            <EditTodoForm editTask={editTask} task={todo}/> ) : 
    <Todo task= {todo} key = {index}
    toggleComplete={toggleComplete}
    deleteTodo = {deleteTodo}
    editTodo={editTodo} />))}
    </div>
    
    </div>
    </div>
  )
}

export default TodoWrapper