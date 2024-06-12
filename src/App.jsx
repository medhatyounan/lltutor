import React from 'react'
import Overview from './Pages/Overview/Overview'
import Course1 from './Pages/Chat/Course1'
import Course2 from './Pages/Chat/Course2'
import Course3 from './Pages/Chat/Course3'
import Course4 from './Pages/Chat/Course4'
import My_Profile from './Pages/My_Profile/My_Profile'
import Settings from './Pages/Settings/Settings'

import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Forget_Pass_PhoneNum from './Pages/Password_Pages/Forget_Pass_PhoneNum'
import Forget_Pass_Email from './Pages/Password_Pages/Forget_Pass_Email'
import Reset_Password from './Pages/Password_Pages/Reset_Password'
import Confirm_Phone from './Pages/Password_Pages/Confirm_Phone'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = () => {
  return (
    <div>


      <Router>
        <Routes>
          <Route path = '/' element={ <Course1/> } />
          <Route path = '/course2' element={ <Course2/> } />
          <Route path = '/course3' element={ <Course3/> } />
          <Route path = '/course4' element={ <Course4/> } />
          <Route path = '/myprofile' element={ <My_Profile/> } />
          <Route path = '/settings' element={ <Settings/> } /> 
          <Route path = '/login' element = { <Login/> } /> 
          <Route path = '/signup' element = { <Signup/> } /> 
          <Route path = '/forget-Password-With-Email' element = { <Forget_Pass_Email/> } /> 
          <Route path = '/forget-password-phone' element = { <Forget_Pass_PhoneNum/> } /> 
          <Route path = '/resetpassword' element = { <Reset_Password/> } /> 
          <Route path = '/confirmphone' element = { <Confirm_Phone/> } /> 
        </Routes>
      </Router>


    </div>
  )
}

export default App