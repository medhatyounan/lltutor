import React from 'react'
import NavbarRegister from '../../Components/NavbarRegister/NavbarRegister'
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Forgetpass.css'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom'


const Reset_Password = () => {
  return (
    <>
      <div id='reset-main' className='container-fluid'>
        
        {/* Header */}
        <div>
          <NavbarRegister />
        </div>

        {/* body */}

        <div id="reset-body" className="container">

          <div className="reset-container col-6">

            {/* header for the container */}
            <div className='head-resetPass'>

              <h3 className='fw-bolder letter-space-1 mb-3'> Reset Password </h3>

              <p className='text-grey-100 letter-space-2'>Please enter the new password </p>

            </div>

            {/* form of reset password */}
            
            <form className='form-reset'>

              <div className="form-group-reset">
              
                <label htmlFor="newPass"> New Password <span className='text-important mx-2'> * </span> </label>

                <div className='input-group-reset'>
                  <input type="password" className='input-style-reset' id='newPass' placeholder='**********'/>
                  <button> <VisibilityOffOutlinedIcon style={{fontSize:28}}/> </button>
                </div>
              
              </div>

              <div className="form-group-reset">
              
                <label htmlFor="newPassConfirm"> Confirm New Password <span className='text-important mx-2'> * </span> </label>

                <div className='input-group-reset'>
                  <input type="password" className='input-style-reset' id='newPassConfirm' placeholder='**********'/>
                  <button> <VisibilityOffOutlinedIcon style={{fontSize:28}}/> </button>
                </div>

              </div>

            </form>

            <div className='footer-reset'>
              <button> Confirm Password </button>

              <p className='text-grey-200 text-center fw-bolder'>Back To <Link to="/login" className='goLogin-forgetPass'> Login </Link> </p>
              
            </div>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default Reset_Password