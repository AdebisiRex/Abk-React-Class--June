import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowUsers = () => {
    const [users, setUsers]= useState([])
    const getUsers =async()=>{
        const response = await axios.get("http://localhost:5000/user");
        console.log(response)
        setUsers(response.data.data)
    }
    useEffect(()=>{

        getUsers()
    }, [])
  return (
    <div>
      <table className="table">
        {users.map((item, index) => (
          <tr key={index}>
            <td>{item.email}</td>
            <td>{item.name}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ShowUsers