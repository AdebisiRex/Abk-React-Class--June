import React from 'react'
import EachTodo from './EachTodo'

const DiplayTodo = ({taskArray}) => {
  return (
    <div className='col-9 mx-auto'>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Date Created</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
               {
                taskArray.length>0?
                        taskArray.map((item,index)=>(
                            <EachTodo key={index}  item={item} index={index} />
                        ))
                :"You do have any tasks"
               } 
              
            </tbody>
        </table>
    </div>
  )
}

export default DiplayTodo