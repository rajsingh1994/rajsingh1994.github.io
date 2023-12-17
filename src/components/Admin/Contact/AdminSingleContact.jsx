import React, { useEffect, useState } from "react"
import Sidebar from "../Sidebar"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { deleteContact, getContact, updateContact } from "../../../Store/ActionCreators/ContactActionCreators"

export default function AdminSingleContact() {
  var [data, setData] = useState({})
  var allStateData = useSelector(state => state.ContactStateData)
  var dispatch = useDispatch()
  var { id } = useParams()
  var navigate = useNavigate()
  function deleteItem() {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      dispatch(deleteContact({ id: id }))
      navigate("/admin-contact")
    }
  }
  function updateItem() {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      dispatch(updateContact({...data,status:"Done"}))
      setData({...data,status:"Done"})
    }
  }

  function getAPIData() {
    dispatch(getContact())
    if (allStateData.length)
      setData(allStateData.slice(1).find((x)=>x.id === Number(id)))
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
            <h5 className='bg-primary p-3 text-light text-center rounded'>Single-Contact</h5>
            <div className="table-responsive">
              <table className='table table-bordered'>
                <tbody>
                  <tr>
                    <th>Id</th>
                    <td>{data.id}</td>
                                    
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{data.email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{data.phone}</td>
                  </tr>
                  <tr>
                    <th>Subject</th>
                    <td>{data.subject}</td>
                  </tr>
                  <tr>
                    <th>Message</th>
                    <td>{data.message}</td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>{data.date}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      {
                        data.status=="Active"?
                          <button className='btn btn-primary w-100' onClick={updateItem}>Update Status to Done</button>:
                          <button className='btn btn-danger w-100' onClick={deleteItem}>Delete</button>

                      }
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

