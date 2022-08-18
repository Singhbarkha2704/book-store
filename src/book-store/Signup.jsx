import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()

    const [pwd, setPwd] = useState('');
    const [rePwd, setRePwd] = useState('')

    const passwordHandle=(e,key)=>{
        if(key==='pwd'){
            setPwd(e.target.value)
        }
        else if(key==='re-pwd'){
            setRePwd(e.target.value)
        }
    }

    const registerHandle =()=>{
        if(pwd===rePwd){
            navigate('/')
        }
        else(
            alert('Password and Confirm Password is not equal')
        )
    }
  return (
    <div >
        <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: '25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-1">Sign up</p>

                <form className="mx-1 mx-md-4">
                    {/* input name */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" required placeholder='Enter Name'  id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>

                    {/* input email */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" required placeholder='Enter Email'  id="form3Example3c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                    {/* input password */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" required  placeholder='Enter Password'  id="form3Example4c" className="form-control" onBlur={(e)=>{passwordHandle(e,'pwd')}} />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                    {/* confirm password */}
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" required  placeholder='Confirm Password'  id="form3Example4cd" className="form-control" onBlur={(e)=>{passwordHandle(e,'re-pwd')}}/>
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                    {/* Register btn */}
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={registerHandle}>Register</button>
                  </div>

                   <hr />

                   <p>Already have an account?</p> 
                   {/* link to login page */}
                  <Link to='/' className='btn btn-success btn-lg mt-2 '>Login</Link>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt='Sample image'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>   
         
    </div>
  )
}

export default Signup