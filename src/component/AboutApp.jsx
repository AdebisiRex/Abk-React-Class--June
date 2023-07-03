import React from 'react'
import { useState, useEffect } from 'react'

const AboutApp = () => {
  const [number, setNumber]= useState(0)
  const [name, setName]= useState('Adebisi')


  useEffect(()=>{
    console.log('About us component mounted')
    

    return(()=>{
      confirm("Are you sure you want to leave?")
      // console.log("Component about us has unmounted")
    })
  }, [name, number])

  
  
  return (
    <div className='container'>
        <h1 className="text-warning">Our App</h1>
        <p>The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava eba ewa and everything.</p>
        <h1>{number} {name}</h1>
        <button onClick={()=>setNumber(number+ 1)}>Increase Number</button>
        <button onClick={()=>setName(name+"a")}>Change Name</button>
        <button onClick={()=>callback()}>Callback </button>
    </div>
  )
}

export default AboutApp