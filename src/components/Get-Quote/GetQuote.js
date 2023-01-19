import React, { useState } from 'react'
import Aside from '../Elements/Aside'
import Footer from '../Elements/Footer'
import Navbar from '../Elements/Navbar'

import './GetQuote.css'

const GetQuote = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className='getquote'>
      <Navbar setOpen={setOpen }/>
      {open? <Aside setOpen={setOpen} />:null}
      <div className="section headersection">
        <div className="container subheader">
          <h1>Get Quote</h1>
          <ul>
            <li><a href="/">Home &nbsp;</a></li>
            <li><a href="">/&nbsp; Get Quote</a></li>
          </ul>
        </div>
      </div>
      <section className="section">
      <div className="container chooseheader">
          <h1>Choose a Product for Instant Quote</h1>
        </div>
      </section>
      <section className="section">
        <div className="container col">
          <div>
          <i className="fa-regular fa-heart"></i>
          <h2>Over 50s Life Cover</h2>
          <p>Award Winning over 50’s Life cover, making sure your loved ones don’t have to worry.</p>
          </div>
          <div>
          <i class="fa-regular fa-heart"></i>
          <h2>Temporary Vehicle Insurance</h2>
          <p>Award Winning over 50’s Life cover, making sure your loved ones don’t have to worry.</p>
          </div>
          <div>
          <i class="fa-regular fa-heart"></i>
          <h2>Buildings only Home Insurance</h2>
          <p>Award Winning over 50’s Life cover, making sure your loved ones don’t have to worry.</p>
          </div>
        </div>
      </section>
      <Footer/> 
    </div>
  )
}

export default GetQuote