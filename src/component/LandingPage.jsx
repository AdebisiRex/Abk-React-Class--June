import React from 'react'
import hero from '../assets/coffee.jpg'

const LandingPage = () => {
  return (
    <div className='row'>
        <div className="col-6">
            <h1>Our Awesome Website</h1>
            <p>The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava eba ewa and everything.</p>
        </div>
        <div className="col-6">
            <img src={hero} height={400} alt="" />
        </div>

    </div>
  )
}

export default LandingPage