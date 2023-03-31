import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Todo({task, toggleComplete, deleteTodo, editTodo}) {
  return (
    

      
        
       <div className='bg-platinum border border-black py-3 space-x-3 flex '>
        
  
          <p onClick={ ()=> toggleComplete(task.id)} className= {`mr-auto cursor-pointer ${task.completed? 'line-through':''}`}  >{task.task}</p>
        <FontAwesomeIcon icon={faPenToSquare} className='hover: cursor-pointer' onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className='hover: cursor-pointer' />
   

        </div>
 
    
  )
}

export default Todo