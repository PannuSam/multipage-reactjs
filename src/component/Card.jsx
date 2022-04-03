import React from 'react'
import './CardStyle.css'

const Card = () => {
  return (
    <div className='card'>
    <div className="container">
        <div className="content">
            <div className="text">
                <p>Click on Gallery for images and information.</p>
                <button className="btn">More Info</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card