import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import NavbarRegister from '../../Components/NavbarRegister/NavbarRegister'
import './Login.css'
import LLtutorLogo from '../../assets/lltutor-logo.svg'
import Facebook from '../../assets/facebook.png'
import Google from '../../assets/google.png'
import Microsoft from '../../assets/microsoft.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div id='login-main' className='container-fluid'>
        
        {/* HEADER */}
        <div>
          <NavbarRegister />
        </div>

        {/* Body */}

        <div className='login-body container'>

          <div id='login' className='col-6'>
            
            {/* Logo & Welcome message */}
            
            <div className='head-login'>
              <div className='welcome-msg'>
                <h5><b>Welcome To</b></h5>
              </div>

              <div className='head-logo'>
                <img src={LLtutorLogo} alt="LLtutor_Logo" />
              </div>
            
            </div>

            <form id='login-form'>

              <div className='form-group-login'>
                <label htmlFor="email-login-input"> Email </label>
                <input type="email" name='email_login' className='login-inputs form-control' placeholder='example@gmail.com'/>
              </div>

              <div className='form-group-login'>
                <label htmlFor="pass-login-input"> Password <span className='text-important'> * </span> </label>
                <input type="password" name='email_login' className='login-inputs form-control' placeholder='********'/>
              </div>

              {/* REMEMBER ME & FORGOT PASSWORD */}
              <div className='rem-for-container'>
                  
                <div className='col remember-me'>
                  <label forhtml='remember'>
                    <input type="checkbox" name='remember-me' className='input-checkbox' id='remember'/> Remember me
                  </label>
                </div>
                  
                <div className='col forget-password'>
                  <Link to="/forget-Password-With-Email" className='link-forgetPass-login'>
                    Forgot Password?
                  </Link>
                </div>

              </div>

              <div className='login-btn-container'>
                <button className='login-btn'> Login </button>
              </div>

            </form>

            <div className='log-with-parent'>

              <div className='login-text'>
                -- OR --
                <br />
                <span> Login With </span>

              </div>

              <div className='login-with-btns-container'>

                <button className='login-with-btn col-3 text-facebook'>
                  <img src={Facebook} alt="facebook_icon" className='me-2' />
                  Facebook
                </button>
                <button className='login-with-btn col-3 text-google'>
                  <img src={Google} alt="google_icon" className='me-2' />
                  Google
                </button>
                <button className='login-with-btn col-3 text-microsoft'>
                  <img src={Microsoft} alt="microsoft_icon" className='me-2' />
                  Microsoft
                </button>

              </div>

            </div>

            {/* Create account */}
            <div className='new-account'>
              Don't have an account? <Link to='/signup' className='link-goSignup'> Create an account </Link>
            </div>




          </div>
        </div>
      </div>
    </>
  )
}

export default Login