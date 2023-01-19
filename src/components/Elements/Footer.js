import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer section'>
     <div className="container">
      <div><img src="https://goanually.com/wp-content/uploads/2019/02/Goanuallytransparent-no-background-01.png" className='brand' alt="" /></div>
      <ul className='link'>
        <li><a href="">CLAIMS</a></li>
        <li><a href="">MY ACCOUNT</a></li>
        <li><a href="">POLICY DOCUMENTS</a></li>
        <li><a href="">PRIVACY POLICY</a></li>
        <li><a href="">TERMS & CONDITIONS</a></li>
        <li><a href="">VEHICLE POLICY VALIDATOR</a></li>
        <li><a href="">DRIVERS LICENSE UPLOAD</a></li>
      </ul>
      <div>
        <i className="fa-brands fa-behance"></i>
        <i className="fa-brands fa-medium"></i>
        <i className="fa-brands fa-dribbble"></i>
      </div>
     </div>
     <div className="container">
      <h2>GoAnually 2022 All Images are property of GoAnually.</h2>
     </div>
    </div>
  )
}

export default Footer
