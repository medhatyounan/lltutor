import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavbarRegister from '../../Components/NavbarRegister/NavbarRegister'
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Forgetpass.css'


const Forget_Pass_Email = () => {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://lltutor.runasp.net/accounts/SendOTPResetPassword', null, {
        params: {
          email: email,
        },
      });
      console.log(response.data);
      // Redirect to confirm OTP page
      navigate('/confirmphone');
    } catch (error) {
      console.error('Error sending OTP', error);
    }
  };

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
              <input 
                type="email" 
                id='email-input' 
                className='form-control'
                placeholder='example@gmail.com'
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <button className='send-code-forgetpass-btn' onClick={handleSubmit}> Send Code </button>
            <p className='text-grey-100 text-capitalize text-center mt-3'> back to <Link to='/login' className='goLogin-forgetPass'> Login </Link> </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Forget_Pass_Email