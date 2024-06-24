import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Profile from '../../assets/head-img.png'
import Edit from '../../assets/edit.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './My_Profile.css'

const My_Profile = () => {
  
  
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phoneNumber: '',
    email: '',
  });

  // const [profilePicture, setProfilePicture] = useState(Profile);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch current user details
    axios
      .get('https://lltutor.runasp.net/accounts/currentuser', {
        headers: { Authorization: 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJtZWRoYXR5b3VuYW43NzYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtZWRoYXR5b3VuYW43NzZAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiIwMTIyODA4ODMwOSIsImV4cCI6MTcxNDY5NDk2OCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6OTk4OCIsImF1ZCI6Ik15U2VjdXJlZEFwcCJ9.Af3hoExVDfFJ6RvEkAZglLfmf5publrJWGth5c2783s' }
      })
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    axios
      .put('https://lltutor.runasp.net/accounts/updatecurrent', profileData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJtZWRoYXR5b3VuYW43NzYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtZWRoYXR5b3VuYW43NzZAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiIwMTIyODA4ODMwOSIsImV4cCI6MTcxNDY5NDk2OCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6OTk4OCIsImF1ZCI6Ik15U2VjdXJlZEFwcCJ9.Af3hoExVDfFJ6RvEkAZglLfmf5publrJWGth5c2783s',
        },
      })
      .then(response => {
        console.log('Profile updated successfully:', response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('There was an error updating the profile!', error);
      });
  };



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
              <input type="file" />
            </div>

            <form id='profile-form'>
              {/* First & Last name */}
              <div className='form-row'>
                {/* FIRST */}
                <div className='form-group'>
                  <label htmlFor="firstName"> First Name </label>
                  <input 
                    type="text" 
                    id='firstName' 
                    name='firstName'
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    className='input-styled' 
                    disabled={!isEditing}
                  />
                </div>

                {/* Second */}
                <div className='form-group'>
                  <label htmlFor="secondName"> Second Name </label>
                  <input 
                    type="text" 
                    id='secondName' 
                    name='secondName' 
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    className='input-styled' 
                    disabled={!isEditing}
                  />
                </div>
              </div>

              {/* EMAIL & NATIONALITY */}
              <div className='form-row'>
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="emailInput">Email</label>
                  <input
                    type="email"
                    name='email'
                    id='emailInput'
                    value={profileData.email}
                    onChange={handleInputChange}
                    className='input-styled'
                    disabled={!isEditing}
                  />
                </div>

                {/* Nationality */}
                <div className="form-group">
                  <label htmlFor="nationality">Nationality</label>
                  <input
                    type="text"
                    name='country'
                    id='country'
                    value={profileData.country}
                    onChange={handleInputChange}
                    className='input-styled'
                    disabled={!isEditing}
                  />
                </div>

              </div>

              {/* PHONE NUMBERS */}

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="phone1"> Phone1 </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={handleInputChange}
                    className='input-styled'
                    disabled={!isEditing}
                  />
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
                      <input type="radio" name='gender' className='input-check-style' value='male' id='male' defaultChecked/>
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
              <button type="button" className='edit-btn' onClick={handleEditClick}>
                  <img src={Edit} alt="Edit" className='mx-2' /> Edit
                </button>
                <button type="button" className='save-changes' onClick={handleSaveClick}>
                  Save Changes
                </button>
              </div>

            </form>
          </div>        
        </div>
      </div>
    </>
  )
}

export default My_Profile