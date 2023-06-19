import React from 'react'

const EachTodo = ({item, index}) => {
  return (
    <tr>
        <td>{index +1}</td>
        <td>{item.task}</td>
        <td>{item.priority}</td>
        <td>{item.createdAt}</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>
  )
}

export default EachTodo