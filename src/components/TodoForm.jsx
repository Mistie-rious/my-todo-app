import React, {useState} from 'react'


function TodoForm({addTodos}) {
    
const [tasks, setTasks] = useState('')

const submitTasks = e => {
    e.preventDefault();
    addTodos(tasks)
    setTasks("")
}

  return (
    <div className=' my-8 flex justify-center'>
        <br></br>
        <form className= 'bg-slate-500 w-fit px-8 py-8' onSubmit={submitTasks}>
            <input value={tasks} onChange={(e) => setTasks(e.target.value)} className='bg-white py-3  px-3 border border-black ' type='text' placeholder='What do you want to do today?'></input>
            <button type='submit' className='bg-slate-600 border  px-3 py-3 transition ease-in-out delay-50 duration-200  hover:bg-lightblue'>Add task</button>
        </form>
    </div>
  )
}

export default TodoForm