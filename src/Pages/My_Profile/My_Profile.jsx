import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './My_Profile.css'
import Navbar from '../../Components/Navbar/Navbar'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Profile_Picture from '../../assets/profile-picture.png'
import Profile from '../../assets/head-img.png'
import Edit from '../../assets/edit.png'

const My_Profile = () => {
  

  return (
    <>
      <div id='myProfile__page' className='container-fluid'>
        <Navbar />

        <div className='myProfile-body-container'>
          
          <div className='goBack-container container'>
            <a href="/"> <ArrowBackIosRoundedIcon style={{fontSize:30}} /> Profile </a>
          </div>
        
          <div className="user-profile container">
            
            {/* header */}
            <div id='title'>
              <div className='col-2 student-info'> Student Info </div>
            </div>

            {/* Profile picture */}

            <div className='profile-picture col-12'>
              <img src={Profile} alt="Profile-picture" className='img-thumbnail' />
            </div>

            <form id='profile-form'>

              {/* First & Last name */}

              <div className='form-row'>

                {/* FIRST */}
                <div className='form-group'>

                  <label htmlFor="firstName"> First Name </label>
                  <input type="text" id='firstName'placeholder='Medhat' className='input-styled' disabled/>

                </div>

                {/* Second */}
                <div className='form-group'>

                  <label htmlFor="secondName"> Second Name </label>
                  <input type="text" name='secondName' id='secondName' placeholder='Younan' className='input-styled' disabled/>

                </div>
              </div>

              {/* EMAIL & NATIONALITY */}
              <div className='form-row'>
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="emailInput">Email</label>
                  <input type="email" name='email' id='emailInput' placeholder='example@gmail.com' className='input-styled' disabled/>
                </div>

                {/* Nationality */}
                <div className="form-group">
                  <label htmlFor="nationality">Nationality</label>
                  <input type="text" name='nationality' id='nationality' placeholder='Egyptian' className='input-styled' disabled/>
                </div>

              </div>

              {/* PHONE NUMBERS */}

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="phone1"> Phone1 </label>
                  <input type="tel" name="phoneNumber" id="phone1" placeholder='01228088309' className='input-styled' disabled/>
                </div>
                <div className="form-group">
                  <label htmlFor="phone2"> Phone2 </label>
                  <input type="tel" name="phoneNumber" id="phone2" placeholder='01228088309' className='input-styled' disabled/>
                </div>

              </div>

              {/* LOCATION & DAYE OF BIRTH */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="location"> Location </label>
                  <div className="input-group">
                    <input type="text" id='location' name='location' placeholder='Choose Location' className='input-styled form-control' disabled/>
                    <button className='input-group-text bg-color-w'> <FmdGoodOutlinedIcon style={{fontSize:30}}/> </button>
                  </div>

                </div>

                <div className="form-group">

                  <label htmlFor="dateOfBirth"> Date Of Birth </label>
                  <input type="date" id='dateOfBirth' className='input-styled' disabled/>

                </div>

              </div>

              {/* gender */}
              <div className="form-row">
                <div className="form-group ">
                  <label className='mb-2'> Gender </label>
                  <div className='gender-options'>

                    <label className='gender col-1'>
                      <input type="radio" name='gender' className='input-check-style' value='male' id='male' checked/>
                      Male
                    </label>

                    <label className='gender col-1'>
                      <input type="radio" name='gender' className='input-check-style' value='female' id='female'/>
                      Female
                    </label>

                  </div>
                </div>
              </div>

              <div className="button-group col">
                <button className='edit-btn'> <img src={Edit} alt="Edit" className='mx-2'/> Edit </button>
                <button className='save-changes'> Save Changes </button>
              </div>

            </form>
          

            

          </div>


          
        </div>

      </div>





    </>
  )
}

export default My_Profile