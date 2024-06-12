import React from 'react'
import '../../../node_modules/bootstrap/dist//css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import Navbar from '../../Components/Navbar/Navbar'
import './Settings.css'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Settings = () => {
  return (
    <>
      <div id='settings-main' className='container-fluid'>
        
        {/* Header */}
        <div>
          <Navbar />
        </div>

        {/* Body */}

        <div className='settings-body container'>

          <div className='goBack-changePassword col-6'>
            <a href="/"> <ArrowBackIosRoundedIcon style={{fontSize:28}}/> Change Password </a>
          </div>

          {/* change password parent  */}
          <div className='change-password-container col-6'>
            
            {/* CONDITIONS AND FORM */}
            <div className='change-password'>

              <div className="conditions mb-5">

                <ul>
                  <li >Minimum of 8 characters </li>
                  <li> Mix of upper and lowercase letters </li>
                  <li> At least one number </li>
                  <li> At least one symbol </li>
                </ul>

                <hr />

              </div>

              {/* Form */}

              <form id='settings-form'>

                <div className='form-group-settings'>

                  <label htmlFor="currentPass">Current Password</label>
                  <div className='input-group-change-pass'>
                    <input type="password" name='password' id='currentPass' placeholder='********'/>
                    <button><VisibilityOffOutlinedIcon style={{fontSize:28}}/></button>
                  </div>

                </div>

                <div className='form-group-settings'>

                  <label htmlFor="newPass">New Password</label>
                  <div className='input-group-change-pass'>
                    <input type="password" name='password' id='newPass' placeholder='********'/>
                    <button><VisibilityOffOutlinedIcon style={{fontSize:28}}/></button>
                  </div>

                </div>

                <div className='form-group-settings'>

                  <label htmlFor="confirmPass">Confirm New Password</label>
                  <div className='input-group-change-pass'>
                    <input type="password" name='password' id='confirmPass' placeholder='********'/>
                    <button><VisibilityOffOutlinedIcon style={{fontSize:28}}/></button>
                  </div>

                </div>

              </form>

            </div>

            <div className='save-parent'>
              <button id='save-changeBtn' className='col-5'>
                Save Changes
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Settings