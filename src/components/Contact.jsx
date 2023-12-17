import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { createContact } from "../Store/ActionCreators/ContactActionCreators"
export default function Contact() {
  var date=new Date().toLocaleDateString()
  var [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    date:date,
    status: "Active"
  })
  var dispatch = useDispatch()
  function getInputData(e) {
    var { name, value } = e.target
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  function postData(e) {
    e.preventDefault()
    dispatch(createContact({ ...data}))
    alert("Thanks to share your Query With Us!!! Our Team is Contact you Soon!!!")
    setData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }
  return (
    <>
      {/* <!-- breadcrumb-section --> */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1><Link to="/">Home</Link><i className="fa fa-arrow-right mx-2"></i>Contact</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end breadcrumb section --> */}

      {/* <!-- contact form --> */}
      <div className="contact-from-section my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Have any query?</h2>
              </div>
              <div id="form_status"></div>
              <div className="contact-form">
                <form onSubmit={postData}>
                  <p>
                    <input type="text" onChange={getInputData} placeholder="Name" name="name" value={data.name} id="name" />
                    <input type="email" onChange={getInputData} placeholder="Email" name="email" value={data.email} id="email" />
                  </p>
                  <p>
                    <input type="tel" onChange={getInputData} placeholder="Phone" name="phone" value={data.phone} id="phone" />
                    <input type="text" onChange={getInputData} placeholder="Subject" name="subject" value={data.subject} id="subject" />
                  </p>
                  <p><textarea name="message" onChange={getInputData} id="message" rows="10" value={data.message} placeholder="Message"></textarea></p>
                  <button type='submit' className='btn btn-primary w-100'>Submit</button>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4><i className="fas fa-map"></i> Shop Address</h4>
                  <p>A-43 <br /> Sector 16, Noida <br /> UP, India</p>
                </div>
                <div className="contact-form-box">
                  <h4><i className="far fa-clock"></i> Shop Hours</h4>
                  <p>MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM </p>
                </div>
                <div className="contact-form-box">
                  <h4><i className="fas fa-address-book"></i> Contact</h4>
                  <p><i className='fa fa-phone'></i> :  <Link to="tel:7559311530">7559311530</Link> <br /> <i className='fa fa-envelope'></i> : <Link to="mailto:rajsingh75593@gmail.com">rajsingh75593@gmail.com</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end contact form --> */}

      {/* <!-- find our location --> */}
      <div className="find-location blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p> <i className="fas fa-map-marker-alt"></i> Find Our Location</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end find our location --> */}

      {/* <!-- google map section --> */}
      <div className="embed-responsive embed-responsive-21by9">
        <div className="mapouter"><div className="gmap_canvas"><iframe title='frame' width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=a-43%20sector%2016%20noida%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
      </div>
      {/* <!-- end google map section --></div> */}
    </>
  )
}
