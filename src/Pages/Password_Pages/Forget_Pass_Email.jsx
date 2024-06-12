import React from 'react'
import NavbarRegister from '../../Components/NavbarRegister/NavbarRegister'
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'
import './Forgetpass.css'


const Forget_Pass_Email = () => {
  return (
    <>
      <div id='forgetpass-body'>
        <NavbarRegister />

        <div id='forgetPassParent' className='container'>

          <div className='forgetPassContainer col-6'>

            <div className='head-forgetpass'>

              <h3 className='fw-bolder letter-space-1 mb-3'> Forgot Your Password? </h3>

              <p className='text-grey-100 letter-space-2'>please enter your email to change password </p>

            </div>

            <div className='emailContainer'>

              <label htmlFor="email-input" className='form-label'> Email </label>
              <input type="email" id='email-input' className='form-control' placeholder='example@gmail.com'/>

            </div>

            <p className='text-grey-100 text-capitalize text-center mt-2'> Do you want to use Phone Number? <Link to='/forget-password-phone' className='goLogin-forgetPass'> Click Here </Link> </p>

            <button className='send-code-forgetpass-btn' type='submit'> Send Code </button>

            <p className='text-grey-100 text-capitalize text-center mt-3'> back to <Link to='/login' className='goLogin-forgetPass'> Login </Link> </p>

          </div>

        </div>


      </div>
    </>
  )
}

export default Forget_Pass_Email