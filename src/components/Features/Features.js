import React from 'react'
import Footer from '../Elements/Footer'
import Navbar from '../Elements/Navbar'

import './Features.css'

const Features = () => {
  return (
    <div className='features'>
     <Navbar/>
     <div className="section headersection">
        <div className="container subheader">
          <h1>Features</h1>
          <ul>
            <li><a href="/">Home &nbsp;</a></li>
            <li><a href="">/&nbsp; Features</a></li>
          </ul>
        </div>
      </div>
     <Footer/>  
    </div>
  )
}

export default Features
