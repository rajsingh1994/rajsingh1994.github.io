import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { createNewslatter, getNewslatter } from "../Store/ActionCreators/NewslatterActionCreators"
import { useDispatch, useSelector } from "react-redux"
export default function Footer() {
  var [email, setEmail] = useState("")
  var allNewslatterData = useSelector((state) => state.NewslatterStateData)
  var dispatch = useDispatch()
  function postData(e) {
    e.preventDefault()
    var item = allNewslatterData.slice(1).find((item) => item.email === email)
    if (item)
      alert("Your Email Id is Already Subscribe!!!")
    else {
      dispatch(createNewslatter({ email: email }))
      alert("Thanks to Subscribe Your Newslatter Service!!!")
    }
  }
  function getAPIData() {
    dispatch(getNewslatter())
  }
  useEffect(() => { 
    getAPIData() 
  }, [allNewslatterData.length])
  return (
    <>
      {/* <!-- footer --> */}
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About us</h2>
                <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
                <ul>
                  <li>A-43 Sector 16 Noida, UP, India</li>
                  <li><Link to="mailto:rajsingh75593@gmail.com">rajsingh75593@gmail.com</Link></li>
                  <li><Link to="tel:7559311530">7559311530</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Menu</h2>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/shop/All/All/All">Shop</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-box subscribe">
                <h2 className="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form onSubmit={postData}>
                  <input type="email" onChange={(e) => setEmail(e.target.value)} name='email' placeholder="Email" />
                  <button type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end footer --> */}
    </>
  )
}
