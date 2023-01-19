import React, {useState, Component } from "react";
import "./Home.css";

// importing the elements goes in here
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
import Aside from "../Elements/Aside";




const Home = () => {
  const [open,setOpen] = useState(false)
  return (
    <>
    {open?<Aside setOpen={setOpen} />:null}
    <div className="hero">
      <Navbar setOpen={setOpen} />
      <section className="section herosection">
        <div className="container">
          <div>
            <h1>We are your trusted <br /> insurance <span>agency</span></h1>
            <p>Since 2010, Goanually has been dedicated to <br /> providing the best insurance possible to <br /> hundreds of thousands of customers.</p>
            <button className="btn">GET A QUOTE NOW</button>
          </div>
          <div>
            <img src="https://goanually.com/wp-content/uploads/2019/01/slider-image.png"  alt="" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {/* this is empty */}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div>
          <i className="fa-solid fa-car"></i>
          <h2>Short Cover</h2>
          <p>1-30 Day cover with a simple quick and efficient form to fill you’ll be covered instantly</p>
          </div>
          <div>
          <i className="fa-regular fa-heart"></i>
          <h2>Over 50s Life Cover</h2>
          <p>Award Winning over 50’s Life cover, making sure your loved ones don’t have to worry.</p>
          </div>
          <div>
          <i className="fa-solid fa-person-biking"></i>
          <h2>Bike Cover</h2>
          <p>Borrowing a bike ? No problem just enter a few details and you can be driving instantly!</p>
          </div>
          <div>
          <i className="fa-solid fa-house-chimney"></i>
          <h2>Home Insurance</h2>
          <p>Our Award winning Home Insurance, from covering your home to your most cherished possessions.</p>
          </div>
        </div>

        <div className="container">
          <h2>Experience is what matters</h2>
          <p>Short Term Insurance is our specialism. It is the only type of insurance <br /> we offer and we are experts in the field.</p> <br />
          <p>We are always looking for ways to make our customer journey easier <br /> and more efficient. Customer service and customer experience are of <br /> paramount importance to us. We want to ensure you get the absolute <br /> best level of cover at the very best prices.</p>
        </div>
        <div className="container">
          <div>
            <h1>8695</h1>
            <p>POLICIES</p>
          </div>
          <div>
            <h1>30000</h1>
            <p>SATISFIED CUSTOMERS</p>
          </div>
          <div>
            <h1>15000</h1>
            <p>YEARS IN BUSINESS</p>
          </div>
        </div>
      </section>

      <section className="section sectionq">
        <div className="container">
          <h2>Why would I need short term insurance?</h2>
          <p>There are many reasons when short term car insurance will be more beneficial to an annual policy</p>
        </div>
        <div className="container">
          <h2>“You may need to insure your car for an extra month at the <br /> end of your annual policy, for example, this could work out <br /> well if you were selling your car or getting rid of it – this can <br /> work out as a much more efficient way of keeping the car <br /> insured short term, rather than cancelling an annual policy <br /> which involves cancellation costs.”</h2>
          <h2>“You may need to insure an additional driver for a short <br /> period, say for a mini-break. Online short term car <br /> insurance cover can do this quickly and efficiently for you, <br /> rather than going through the process of trying to add the <br /> driver to your main annual insurance policy. Our temporary <br /> cover is Comprehensive, so you can relax knowing that the <br /> driver is properly insured.”</h2>
        </div>
      </section>

      <section className="section section2 herosection">
        <div className="container">
          <div>
            <h1>We Got You Covered. Don’t <br /> Get Caught Off Guard</h1>
            <p>You can be covered immediately in minutes by following the <br /> simple steps on our website. It is so easy. Within seconds, <br /> your documents are then delivered to your inbox and you <br /> have the peace of mind knowing that you are correctly <br /> insured for your required purpose.</p>
            <button className="btn">INSURANCE FEATURES</button>
          </div>
          <div>
            <img src="https://goanually.com/wp-content/uploads/2019/01/about-image.png"  alt="" />
          </div>
        </div>
      </section>

      <section className="section sectionq">
        <div className="container">
          <h2>Most popular questions?</h2>
          <p>See what we can do for you!</p>
        </div>
        <div className="container">
{/* first column */}
          <div className="wwd">
            <h1>How do i make a claim?</h1>
            <h2>All claims must be reported within 24 hours of the incident <br /> occurring. Contact information can be found in your policy <br /> documents or use the in house claim reporting form found <br /> on our website.</h2>
            <h1>What if I haven’t received my email with the documents?</h1>
            <h2>Providing you entered your email address correctly; you will <br /> receive an email from us. If you do not receive a <br /> confirmation e-mail from us within the hour, please check <br /> your spam or junk mail folders. If you have still not received <br /> your documents, get in contact with us to request they are <br /> sent again.</h2>
          <h1>When will my vehicle appear on the MID listing?</h1>
          <h2>Once you have purchased a policy from us, your insurance <br /> details will be passed to the Motor Insurance Database (MID). <br /> They are passed within the timescales required by the MID, <br /> but due to the short term nature of these types of insurance, <br /> it is possible your policy may have expired before the details <br /> are loaded to the database. We always recommend that you <br /> print your Insurance Certificate and have this with you as this <br /> remains valid proof of your insurance and legal entitlement <br /> to drive the vehicle.</h2>
          </div>
{/* second column */}
          <div className="wwd">
            <h1>Can i cancel my policy?</h1>
          <h2>Our refund policy is determined by the product purchased. <br /> <br /> Short Term Car/Van Insurance: <br />You are entitled to cancel your policy at any time. Due to the <br />short period nature of this policy there will be no refund of <br />premium. <br /> Due to the short term nature of 1 to 28-day policies, there is <br />no cooling-off period. <br /><br />Monthly Insurance: <br /> There is administrative charge (Please refer to our T&C’s for a <br />breakdown)</h2>
          <h1>Can I insure my SORN vehicle?</h1>
          <h2>As long as your vehicle is in a roadworthy condition, and you <br /> either have tax or will tax the vehicle with our insurance <br /> certificate, we can allow insurance for this purpose. The <br /> vehicle must have a current MOT or you must have a pre- <br />booked MOT appointment to attend whilst insured with us in <br /> order for the insurance to be valid (please check our insurers <br /> criteria before purchasing).</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container  haveqcontainer">
          <div>
          <button className="btn">HAVE A QUESTION</button> 
          </div>
        </div>
      </section>
      


    </div>
    <Footer/>
    </>
  )
}

export default Home