import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import NavbarRegister from '../../Components/NavbarRegister/NavbarRegister'
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Password.css'


const Confirm_Phone = () => {
  
  const [value0, setValue0] = useState('');

  const handleChange0 = (event) => {
    const inputValue = event.target.value;
    // Only allow a single digit between 0 and 9
    if (/^[0-9]?$/.test(inputValue)) {
      setValue0(inputValue);
    }
  }

  const [value1, setValue1] = useState('');

  const handleChange1 = (event) => {
    const inputValue = event.target.value;
    // Only allow a single digit between 0 and 9
    if (/^[0-9]?$/.test(inputValue)) {
      setValue1(inputValue);
    }
  }

  const [value2, setValue2] = useState('');

  const handleChange2 = (event) => {
    const inputValue = event.target.value;
    // Only allow a single digit between 0 and 9
    if (/^[0-9]?$/.test(inputValue)) {
      setValue2(inputValue);
    }
  }

  const [value3, setValue3] = useState('');

  const handleChange3 = (event) => {
    const inputValue = event.target.value;
    // Only allow a single digit between 0 and 9
    if (/^[0-9]?$/.test(inputValue)) {
      setValue3(inputValue);
    }
  }
  
  return (
    <>
      
      <div id='confirm-body'>

        <NavbarRegister />
      
        <div id='confirmParent' className='container'>

          <div className='confirmContainer col-6'>

            <div className='head-confirm'>
              <h3 className='fw-bolder letter-space-1'> OTP Verification </h3>

              <p> enter the code we just sent to <span className='text-important'> 0122808**** </span> </p>
            </div>

            <div className='input-otp mx-auto'>

              <input type="number" name="" id="" className='otp-ver' placeholder='*' value={value0} onChange={handleChange0} />
              
              <input type="number" name="" id="" className='otp-ver' placeholder='*' value={value1} onChange={handleChange1} />
              
              <input type="number" name="" id="" className='otp-ver' placeholder='*' value={value2} onChange={handleChange2} />
              
              <input type="number" name="" id="" className='otp-ver' placeholder='*' value={value3} onChange={handleChange3} />

            </div>

            <div className='resend-code mx-auto my-4 text-grey-100'>
              You didn't receive a code ? <button className='text-important text-decoration-none'> Resend</button>
            </div> 

            <button className='verify-btn' type='submit'> Verify </button>

            <div className='text-grey-100 back-login-container-confirm'>

              Back to<Link to='/login' className='link-goLogin-confirmPhone'> Login</Link>

            </div> 

          </div>

        </div>
      
      
      </div>
    
    
    
    </>
  )
}

export default Confirm_Phone