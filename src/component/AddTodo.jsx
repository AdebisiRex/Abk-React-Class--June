import React, { useState } from 'react'

const AddTodo = (props) => {
    const [task, settask] = useState("")
    const [priority, setpriority] = useState("")


   const addTask= (event)=>{
        let taskObj = {
            task:task,
            priority: priority,
            createdAt: new Date().toLocaleString(),
        }
        let newArray = [...props.taskArray, taskObj]
        props.settask(newArray)  
   }

  return (
    <div className='border my-5 rounded-3 p-4 shadow-sm col-7 mx-auto vh-100'>
        <h1 className='text-warning'>Checked</h1>
        <div className='mb-3'>
            <label htmlFor="">Todo Task</label>
            <input onChange={(e)=>settask(e.target.value)}  type="text" className='form-control' placeholder='Add Task' />
        </div>
        <div className='mb-3'>
            <label htmlFor="">Priority</label>
            <select onChange={(e)=>setpriority(e.target.value)} name="" className='form-select' id="">
                <option value={null}>--</option>
                <option value="Urgent">Urgent</option>
                <option value="Relaxed">Relaxed</option>
                <option value="Mandatory">Mandatory</option>
                <option value="Easy">Easy</option>
            </select>
        </div>
            <button onClick={addTask} className=' btn btn-warning form-control text-white'> Submit Task</button>
        
    </div>
  )
}

export default AddTodo