import React, {useState} from 'react'


function EditTodoForm({editTask, task}) {
    
const [tasks, setTasks] = useState(task.task)

const submitTasks = e => {
    e.preventDefault();
    editTask(tasks, task.id)
    setTasks("")
}

  return (
    <div className=' my-8 flex justify-center'>
        <br></br>
        <form className= 'bg-gray-300 rounded-lg w-fit px-2 py-2' onSubmit={submitTasks}>
            <input value={tasks} onChange={(e) => setTasks(e.target.value)} className='bg-white py-3 px-3 border border-black ' type='text' placeholder='Update Task?'></input>
            <button type='submit' className='bg-slate-600 border rounded-md px-3 py-3 transition ease-in-out delay-75  hover:bg-indigo-400'>Update task</button>
        </form>
    </div>
  )
}

export default EditTodoForm