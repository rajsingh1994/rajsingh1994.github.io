import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getCheckout, updateCheckout } from "../../../Store/ActionCreators/CheckoutActionCreators"

export default function AdminSingleCheckout() {
    var [data, setData] = useState({
        products: []
    })
    var [paymentstatus, setPaymentStatus] = useState("")
    var [orderstatus, setOrderStatus] = useState("")

    var allStateData = useSelector(state => state.CheckoutStateData)
    var dispatch = useDispatch()
    var { id } = useParams()
    function updateItem() {
        if (window.confirm("Are You Sure to Update that Item : ")) {
            dispatch(updateCheckout({ ...data, orderstatus:orderstatus,paymentstatus:paymentstatus}))
            setData({ ...data, orderstatus:orderstatus,paymentstatus:paymentstatus})
        }
    }

    function getAPIData() {
        dispatch(getCheckout())
        if (allStateData.length)
            var item = allStateData.slice(1).find((x) => x.id === Number(id))
            setData(item)
            setOrderStatus(item.Orderstatus)
            setPaymentStatus(item.paymentstatus)
    }
    useEffect(() => {
        getAPIData()
    }, [allStateData.length])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h1>Admin Section</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className="container-fluid my-2">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <h5 className='bg-primary p-3 text-light text-center rounded'>Single-Checkout</h5>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <tbody>
                                    <tr>
                                        <th>Id</th>
                                        <td>{data.id}</td>
                                    </tr>
                                    <tr>
                                        <th>User Id</th>
                                        <td>{data.userid}</td>
                                    </tr>
                                    <tr>
                                        <th>Payment Mode</th>
                                        <td>{data.paymentmode}</td>
                                    </tr>
                                    <tr>
                                        <th>Payment Status</th>
                                        <td>{data.paymentstatus}
                                        <br />
                                        {
                                            data.paymentmode ==="COD" && data.paymentstatus === "Pending"?
                                            <select name="paymentstatus" value={paymentstatus} onChange={(e)=>setPaymentStatus(e.target.value)} className='form form-control'>
                                                <option value="Pending">Pending</option>
                                                <option value="Done">Done</option>
                                            </select>:""
                                        }
                                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Order Status</th>
                                        <td>{data.orderstatus}
                                        <br />
                                        {
                                            data.orderstatus !=="Delivered"?
                                            <select name="orderstatus" value={orderstatus} onChange={(e)=>setOrderStatus(e.target.value)} className='form form-control'>
                                                <option value="Order Placed">Order Placed</option>
                                                <option value="Order is Packed">Order is Packed</option>
                                                <option value="Ready to Ship">Ready to Ship</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="On the Way">On the Way</option>
                                                <option value="Out for Delivery">Out for Delivery</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>:""
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>{data.subtotal}</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping</th>
                                        <td>{data.shipping}</td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td>{data.total}</td>
                                    </tr>
                                    {
                                        data.sppid ?
                                            <tr>
                                                <th>RPPID</th>
                                                <td>{data.rppid}</td>
                                            </tr> : ""
                                    }
                                    <tr>
                                        <th>Date</th>
                                        <td>{data.date}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            {
                                                data.paymentstatus === "pending" || data.orderstatus !== "Delivered" ?
                                                    <button className='btn btn-primary w-100' onClick={updateItem}>Update</button> : ""
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Checkout Products</h5>
                        <div className="col-md-12">
                            <table className="cart-table table-bordered">
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
                                        data.products.map((item, index) => {
                                            return <tr key={index} className="table-body-row">
                                                <td className="product-image"><a href={`/assets/images/${item.pic}`} rel='noreferrer' target='_blank'><img src={`/assets/images/${item.pic}`} alt="" height="70px" width="70px" /></a></td>
                                                <td className="product-name ps-3">{item.name}</td>
                                                <td className="product-name ps-3">{item.brand}/{item.color}/{item.size}</td>
                                                <td className="product-price ps-3">&#8377;{item.price}</td>
                                                <td className="product-price ps-3">{item.qty}</td>
                                                <td className="product-price ps-3">&#8377;{item.total}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

