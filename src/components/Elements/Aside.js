import React from 'react'

import './Aside.css'

const Aside = ({setOpen}) => {
  return (
    <div className='aside section'>
      <div className="asidecontainer">
        <div className="header">
        <i className="fa-sharp fa-solid fa-xmark" onClick={()=>setOpen(false)}></i>
        </div>
        <ul className="links">
        <li><a href="/">Home</a></li>
        <li><a href="/get-quote">Get Quote</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Aside
