import React, { useState } from "react"

import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
  let [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  })
  var navigate = useNavigate()
  function getInputData(e) {
    var { name, value } = e.target
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  async function postData(e) {
    if (data.password === data.cpassword) {
      e.preventDefault()
      var response = await fetch("/user", {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      })
      response = await response.json()
      if (response.find((item) => item.usernamme === data.username)) {
        alert("Username Already taken")
      }
      else {
        var item = {
          name: data.name,
          username: data.username,
          email: data.email,
          phone: data.phone,
          password: data.password,
          role:"Buyer"
        }
        response = await fetch("/user", {
          method: "post",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(item)
        })
        response = await response.json()
        navigate("/login")
      }
    }
    else
      alert("password and cpassword does not match??")
  }
  return (
    <>
      {/* breadcrumb-section  */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1><Link to="/">Home</Link><i className="fa fa-arrow-right mx-2"></i>Signup</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section  */}
      <div className="container my-5 w-100">
        <div className="w-75 m-auto">
          <h4 className='text-center text-light p-2 breadcrumb-section '><span className='text-warning'>Create</span> Account</h4>
          <form onSubmit={postData}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={getInputData} name='name' placeholder='Name :' className='form-control' />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="username">Username</label>
                <input type="text" onChange={getInputData} name='username' placeholder='Username :' className='form-control' />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={getInputData} name='email' placeholder='Email :' className='form-control' />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phone">Phone</label>
                <input type="text" onChange={getInputData} name='phone' placeholder='Phone :' className='form-control' />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" onChange={getInputData} name='password' placeholder='Password :' className='form-control' />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" onChange={getInputData} name='cpassword' placeholder='Confirm Password :' className='form-control' />
              </div>
            </div>
            <div className="mb-3">
              <button type='submit' className='btn text-light w-100 breadcrumb-section'>Submit</button>
            </div>
          </form>
          <div className='d-flex justify-content-between'>
            <Link to="/login">Already have an Account? Login to your Account</Link>
          </div>
        </div>
      </div>
    </>
  )
}
