import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { getWishlist, deleteWishlist } from "../Store/ActionCreators/WishlistActionCreators"
import { getCheckout } from "../Store/ActionCreators/CheckoutActionCreators"

export default function Profile() {
  var [user, setUser] = useState({
    pic: ""
  })
  var [wishlist, setWishlist] = useState([])
  var [checkout, setCheckout] = useState([])

  var allWishlistData = useSelector((state) => state.WishlistStateData)
  var allCheckoutData = useSelector((state) => state.CheckoutStateData)
  var navigate = useNavigate()
  var dispatch = useDispatch()

  async function getAPIData() {
    var response = await fetch("/user", {
      method: "get",
      headers: {
        "content-type": "application/json",
      }
    })
    response = await response.json()
    var item = response.find((item) => item.username === localStorage.getItem("username"))
    if (item) {
      setUser(item)
    }
    else
      navigate("/login")

    dispatch(getWishlist())
    if (allWishlistData.length) {
      setWishlist(allWishlistData.filter((x) => x.userid === localStorage.getItem("userid")))
    }

    dispatch(getCheckout())
    if (allCheckoutData.length) {
      setCheckout(allCheckoutData.filter((x) => x.userid === localStorage.getItem("userid")))
    }
  }

  function deletedRecord(id) {
    dispatch(deleteWishlist({ id: id }))
    getAPIData()
  }
  useEffect(() => {
    getAPIData()
  }, [allWishlistData.length, allCheckoutData.length])
  return (
    <>
      {/* breadcrumb-section  */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <h1><Link to="/">Home</Link><i className="fa fa-arrow-right mx-2"></i>Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section  */}
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-5">
            {
              user.pic ?
                <img src={`/assets/images/${user.pic}`} height="428px" width="100%" alt="" /> :
                <img src={"/assets/images/noimage-2.jpg"} height="428px" width="100%" alt="" />
            }
          </div>
          <div className="col-md-7">
            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>{user.name}</th>
                </tr>
                <tr>
                  <th>UserName</th>
                  <th>{user.username}</th>
                </tr>
                <tr>
                  <th>Email</th>
                  <th>{user.email}</th>
                </tr>
                <tr>
                  <th>Phone</th>
                  <th>{user.phone}</th>
                </tr>
                <tr>
                  <th>Address</th>
                  <th>{user.address}</th>
                </tr>
                <tr>
                  <th>Pin</th>
                  <th>{user.pin}</th>
                </tr>
                <tr>
                  <th>City</th>
                  <th>{user.city}</th>
                </tr>
                <tr>
                  <th>State</th>
                  <th>{user.state}</th>
                </tr>
                <tr>
                  <th colSpan={2}><Link to="/update-profile" className='btn btn-primary w-100'>Update Profile</Link></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <!-- cart --> */}

      {
        wishlist.length ?
          <>
            <div className="cart-table-wrap">
              <h5 className='text-center'>Wishlist Section</h5>
              <table className="cart-table">
                <thead className="cart-table-head">
                  <tr className="table-head-row">
                    <th className="product-image"></th>
                    <th className="product-name">Name</th>
                    <th className="product-name">Brand/Color/Size</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity"></th>
                    <th className="product-quantity"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    wishlist.map((item, index) => {
                      return <tr key={index} className="table-body-row">
                        <td className="product-image"><a href={`assets/images/${item.pic}`} rel='noreferrer' target='_blank'><img src={`assets/images/${item.pic}`} alt="" height="70px" width="70px" /></a></td>
                        <td className="product-name">{item.name}</td>
                        <td className="product-name">{item.brand}/{item.color}/{item.size}</td>
                        <td className="product-price">&#8377;{item.price}</td>
                        <td className="product-quantity"><Link to={`/single-product/${item.productid}`} className='btn'><i className='fa fa-shopping-cart'></i></Link></td>
                        <td className="product-quantity"><button onClick={() => deletedRecord(item.id)} className='btn'><i className='fa fa-trash'></i></button></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </> :
          <div className="my-5 text-center">
            <p>No Items in Wishlist</p>
            <Link to="/shop/All/All/All" className='btn btn-primary text-light' >Shop Now</Link>
          </div>
      }

      {
        checkout.length ?
          <>
            <div className="cart-table-wrap mt-5">
              <h5 className='text-center'>Order History Section</h5>
              {
                checkout.map((item, index) => {
                  return <div className="row" key={index}>

                    <div className="col-md-4">
                      <table className="table table-bordered">
                        <thead className="cart-table-head">
                          <tr className="table-head-row">
                            <th className="product-image">Order Id</th>
                            <td className="product-name">{item.id}</td>
                          </tr>
                          <tr className="table-head-row">
                            <th className="product-image">Order Status</th>
                            <td className="product-name">{item.orderstatus}</td>
                          </tr>
                          <tr className="table-head-row">
                            <th className="product-image">Payment Status</th>
                            <td className="product-name">{item.paymentstatus}</td>
                          </tr>
                          <tr className="table-head-row">
                            <th className="product-image">Payment Mode</th>
                            <td className="product-name">{item.paymentmode}</td>
                          </tr>
                          <tr className="table-head-row">
                            <th className="product-image">Subtotal</th>
                            <td className="product-name">&#8377;{item.subtotal}</td>
                          </tr>
                          <tr className="table-head-row">
                            <th className="product-image">Shipping</th>
                            <td className="product-name">&#8377;{item.shipping}</td>
                          </tr>
                          <tr className="table-head-row">
                            <th className="product-image">Total</th>
                            <td className="product-name">&#8377;{item.total}</td>
                          </tr>
                          <tr className="table-head-row">
                            <th className="product-image">Date</th>
                            <td className="product-name">{item.date}</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="col-md-8">
                      <table className="cart-table">
                        <thead className="cart-table-head">
                          <tr className="table-head-row">
                            <th className="product-image"></th>
                            <th className="product-name">Name</th>
                            <th className="product-name">Brand/Color/Size</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Qty</th>
                            <th className="product-quantity">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            item.products.map((item, index) => {
                              return <tr key={index} className="table-body-row">
                                <td className="product-image"><a href={`assets/images/${item.pic}`} rel='noreferrer' target='_blank'><img src={`assets/images/${item.pic}`} alt="" height="70px" width="70px" /></a></td>
                                <td className="product-name">{item.name}</td>
                                <td className="product-name">{item.brand}/{item.color}/{item.size}</td>
                                <td className="product-price">&#8377;{item.price}</td>
                                <td className="product-price">{item.qty}</td>
                                <td className="product-price">&#8377;{item.total}</td>
                              </tr>
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                })
              }
            </div>
          </> :
          <div className="my-5 text-center">
            <p>No Order history found</p>
          </div>
      }
    </>
  )
}
