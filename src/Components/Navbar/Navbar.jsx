import * as React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Navbar.css'
import Logo from './../../assets/logo.svg'
import accountPic from './../../assets/Avatar.png'
import { Link } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { blue, grey, red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles';

const Navbar = () => {
  
  const MenuItems = [
    // {
    //     title: 'Overview',
    //     url : '/',
    //     cName: 'navbar-links',
    //     icon: 'bi bi-grid'
    // },
    {
        title: 'Course 1',
        url: '/',
        cName: 'navbar-links',
        icon: 'bi bi-mortarboard'
    },
    {
        title: 'Course 2',
        url: '/course2',
        cName: 'navbar-links',
        icon: 'bi bi-mortarboard'
    },
    {
        title: 'Course 3',
        url: '/course3',
        cName: 'navbar-links',
        icon: 'bi bi-mortarboard'
    },
    {
        title: 'Course 4',
        url: '/course4',
        cName: 'navbar-links',
        icon: 'bi bi-mortarboard'
    },
    {
        title: 'My Profile',
        url: '/myprofile',
        cName: 'navbar-links',
        icon: 'bi bi-person'
    },
    {
        title: 'Settings',
        url: '/settings',
        cName: 'navbar-links',
        icon: 'bi bi-gear'
        }
    ]

    

  return (

    <>
      <nav className='navbar' id='main-navbar'>
      
        <button variant='outlined' className="navbar-toggler nav-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"> <span className='navbar-toggler-icon'></span> </button>
        
        <div className='offcanvas offcanvas-start' tabIndex="-1" id="offcanvasExample">
          
          <div className='offcanvas-header'>
            
            <div className="offcanvasImage"><img src={Logo} alt="LLTutor_Logo" className="offcanvasImgResponsive"/></div>
            <button type="button" className="btn-close myStyledBtnClose" data-bs-dismiss="offcanvas" aria-label="Close"></button>

          </div>

          <div className='offcanvas-title'>
            Course Overview
          </div>

          <div className="offcanvas-body">
                    
            <ul className="offcanvas-list-container">
              
              {MenuItems.map((item, index) => {
                return(
                  <li className="offcanvas-list" key={index}> 

                    <a href={item.url} className="nav-link btn-offcanvas-list active"> <i className={item.icon} id='icons'></i> {item.title} </a>

                  </li>
                )
              })}
                
                
            </ul>

          </div>


        </div>
        {/* RIGHT SIDE */}
        <div className='right-nav-container row row-cols-4'>
          {/* language button */}
          <div className='col changeLang-container '>
      
              <select className='changeLang c-grey-mine'>
                <option value="English">English</option>
                <option value="العربية">العربية</option>
              </select>
      
          </div>

          {/* notification */}

          <div className='col notificationBtn-container c-grey-mine'>
            <button className='notification-btn'>

              <NotificationsNoneIcon sx={{fontSize: 30, color: grey[800]}}  />
              <span className="icon-button__badge">3</span>

            </button>
          </div>
            
          {/* account name */}
          <div className='col account-name-container'>

            <img src={accountPic} alt="accountPicture" />
            <span className='fs-6 c-grey-mine'>Medhat</span>
          </div>

          <div className='col login-btn-container-course'>
              
              <Link to='/login' className='login-btn-nav-course '>
                Login
              </Link>

          </div>

        </div>

      </nav>
    </>

  )
}

export default Navbar