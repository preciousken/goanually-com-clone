import React from 'react'

import './Navbar.css'

const Navbar = ({setOpen}) => {
  return (
    <div className='navbar section'>
     <div className="container">
      <div><img src="https://goanually.com/wp-content/uploads/2019/02/Goanuallytransparent-no-background-01.png" className='brand' alt="" /></div>
      <div><i className="fa-solid fa-bars bars" onClick={()=>setOpen(true)} ></i></div>
     </div>
    </div>
  )
}

export default Navbar
