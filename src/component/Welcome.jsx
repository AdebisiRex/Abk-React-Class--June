import React from 'react'
import { useParams } from 'react-router-dom'


const Welcome = () => {
    let param = useParams()

    

    return (
      <div className='container'>
          <h1 className='text-warning'>Welcome {param.token}</h1>
          <h1 >This is a joke</h1>
          <div>
            
          </div>
      </div>
    )

};

export default Welcome;