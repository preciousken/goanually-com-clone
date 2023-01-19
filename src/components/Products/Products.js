import React, { useState } from 'react'
import Aside from '../Elements/Aside'
import Footer from '../Elements/Footer'
import Navbar from '../Elements/Navbar'

import './Products.css'

const Products = () => {
 const [open,setOpen] = useState(false)
 return (
  <div className='getquote products'>
    <Navbar setOpen={setOpen }/>
    {open? <Aside setOpen={setOpen} />:null}
    <div className="section headersection">
      <div className="container subheader">
        <h1>Products</h1>
        <ul>
          <li><a href="/">Home &nbsp;</a></li>
          <li><a href="">/&nbsp; Products</a></li>
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
        <i className="fa-sharp fa-solid fa-car-side"></i>
        <h2>Temporary Vehicle Insurance</h2>
        <p>Award Winning over 50’s Life cover, making sure your loved ones don’t have to worry.</p>
        </div>
        <div>
        <i className="fa-solid fa-house-chimney"></i>
        <h2>Buildings only Home Insurance</h2>
        <p>Award Winning over 50’s Life cover, making sure your loved ones don’t have to worry.</p>
        </div>
      </div>
    </section>
    <section className="section videosection">
    <a class="popup-youtube" href="https://www.youtube.com/watch?v=pBFQdxA-apI">Open YouTube video</a>
    </section>
    {/*  */}
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
        <i className="fa-sharp fa-solid fa-car-side"></i>
        <h2>Temporary Vehicle Insurance</h2>
        <p>Award Winning over 50’s Life cover, making sure your loved ones don’t have to worry.</p>
        </div>
        <div>
        <i className="fa-solid fa-house-chimney"></i>
        <h2>Buildings only Home Insurance</h2>
        <p>Award Winning over 50’s Life cover, making sure your loved ones don’t have to worry.</p>
        </div>
        <div>
        <i className="fa-solid fa-house-chimney"></i>
        <h2>Buildings only Home Insurance</h2>
        <p>Award Winning over 50’s Life cover, making sure your loved ones don’t have to worry.</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container chooseheader">
        <h1>Our numbers are the result of our work</h1>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and <br /> praising pain.</p>
      </div>
    </section>
    <section className="section">
      <div className="container rating ">
        <div>
          <h2>6+</h2>
          <p>BRANCHES OPEN AND OPERATING</p>
        </div>
        <div>
          <h2>2k+</h2>
          <p>BRANCHES OPEN AND OPERATING</p>
        </div>
        <div>
          <h2>1.5k+</h2>
          <p>BRANCHES OPEN AND OPERATING</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container title">
        <h1>Our Scientific Leadership Team</h1>
        <p>But I must explain to you how all this mistaken idea of denouncing <br /> pleasure and praising pain was born and I will give you a complete.</p>
      </div>
    </section>
    <section className="section">
      <div className="container col ">
        <div className='noboxshadow'>
          <img src="https://goanually.com/wp-content/uploads/2019/02/team-2.png" alt="" />

        </div>
        <div className='noboxshadow'>
          <img src="https://goanually.com/wp-content/uploads/2019/02/team-3.png" alt="" />

        </div>
        <div className='noboxshadow'>
          <img src="https://goanually.com/wp-content/uploads/2019/02/team-1.png" alt="" />

        </div>
      </div>
    </section>

    <Footer/> 
  </div>
)
}

export default Products
