import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export default function Login() {
  let [data, setData] = useState({
    username:"",
    password:"",
  })
  var navigate = useNavigate()
  function getInputData(e){
    var {name,value} = e.target
    setData((old)=>{
      return{
        ...old,
        [name] : value
      }
    })
  }
  async function postData(e){
    e.preventDefault()
    var response = await fetch("/user", {
      method: "get",
      headers: {
        "content-type": "application/json"
      }
    })
    response = await response.json()
    var item = response.find((item)=>item.username===data.username && item.password===data.password)
    if(item){
      localStorage.setItem("login",true)
      localStorage.setItem("name",item.name)
      localStorage.setItem("username",item.username)
      localStorage.setItem("userid",item.id)
      localStorage.setItem("role",item.role)
            
      if(item.role==="Admin")
        navigate("/admin")
      else
        navigate("/profile")
    }
    else{
      alert("Invalid Username or Password!!")
    }
  }
  return (
    <>
      {/* breadcrumb-section  */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1><Link to="/">Home</Link><i className="fa fa-arrow-right mx-2"></i>Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section  */}
      <div className="container my-5 w-100">
        <div className="w-75 m-auto">
          <h4 className='text-center text-light p-2 breadcrumb-section '><span className='text-warning'>Login</span> to Your Account</h4>
          <form onSubmit={postData}>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input type="text" onChange={getInputData} name='username' placeholder='Username :' className='form-control' />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" onChange={getInputData} name='password' placeholder='Password :' className='form-control' />
            </div>
            <div className="mb-3">
              <button type='submit'className='btn text-light w-100 breadcrumb-section'>Submit</button>
            </div>
          </form>
          <div className='d-flex justify-content-between'>
            <Link to="#">Forget Password?</Link>
            <Link to="/signup">New User? Create a free Account</Link>
          </div>
        </div>
      </div>
    </>
  )
}
