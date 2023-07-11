import React, { useState } from 'react'
// import DiplayTodo from './DiplayTodo'
import { Route, Routes } from 'react-router-dom'
import AboutApp from './AboutApp'
import DiplayTodo from './DiplayTodo'
import LandingPage from './LandingPage'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addInterest } from '../redux/user'

const AddTodo = (props) => {
    const [task, settask] = useState("")
    const [priority, setpriority] = useState("")
    const dispatch = useDispatch()


   const addTask= (event)=>{
        let taskObj = {
            task:task,
            priority: priority,
            createdAt: new Date().toLocaleString(),
        }
        let newArray = [...props.taskArray, taskObj]
        props.settask(newArray)  
   }

   let interests = useSelector(state=>state.user.interests)
   let name = useSelector(state=>state.user.name)

  return (
    <>
      <h1 className="text-warning mb-5 text-center"> {interests}{name}</h1>
      <button onClick={()=>dispatch(addInterest({name: "Availeth"}))} className='mx-auto d-block btn btn-danger'>Change Interests</button>

      {/* <div className="border my-5 rounded-3 p-4 shadow-sm col-7 mx-auto">
        <h1 className="text-warning">Checked</h1>
        <div className="mb-3">
          <label htmlFor="">Todo Task </label>
          <input
            onChange={(e) => settask(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Add Task"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Priority</label>
          <select
            onChange={(e) => setpriority(e.target.value)}
            name=""
            className="form-select"
            id=""
          >
            <option value={null}>--</option>
            <option value="Urgent">Urgent</option>
            <option value="Relaxed">Relaxed</option>
            <option value="Mandatory">Mandatory</option>
            <option value="Easy">Easy</option>
          </select>
        </div>
        <button
          onClick={addTask}
          className=" btn btn-warning form-control text-white"
        >
          {" "}
          Submit Task
        </button>
      </div> */}

      {/* <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutApp/>}/>
        <Route path="/about/" element={<AboutApp/>}/>
    </Routes> */}
    </>
  );
};
export default AddTodo;