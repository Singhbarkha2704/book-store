import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'
import Wishlist from './Wishlist'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  const [results, setResults] = useState([]);


  useEffect(()=>{
    axios.get(`http://localhost:3000/books`).then(res => {
            console.log(res.data);
            setResults(res.data)
        }).catch(err=>console.log(err))
  },[])

  return (
    <div >
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Link to='/shop'><button className='btn btn-danger mt-4 btn-lg'>Shopping</button></Link>
      {/* profile */}
      <section className="vh-10" style={{backgroundColor: '#f4f5f7'}}>
        <h1 className='heading'>Profile</h1>
    <div className="container py-5 h-50">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-6 mb-4 mb-lg-0">
          <div className="card mb-3" style={{borderRadius: '0.5rem'}}>
            <div className="row g-0">
              <div className="col-md-4 gradient-custom text-center text-white">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar" className="img-fluid my-5" style={{width: '80px'}} />
                <h5>Admin</h5>
                <i className="far fa-edit mb-5"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4"/>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">admin@gmail.com</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">123 456 789</p>
                    </div>
                  </div>
                  <h6>Delivery Address</h6>
                  <hr className="mt-0 mb-4"/>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Kanpur, U.P.</h6>
                    </div>
                  </div>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

      {/* Wishlist */}
      <Wishlist results={results}/>


    </div>
  )
}

export default Dashboard