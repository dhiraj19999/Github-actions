import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div   style={{display:'flex',gap:'20px',marginLeft:'500px'}}>

<Link to='/' >Home</Link>

<Link to='/all'>All</Link>

<Link to='/html'>HTML</Link>

<Link to='/css'>CSS</Link>

<Link to={'/javascript'}>Javascript</Link>




    </div>
  )
}

export default Navbar