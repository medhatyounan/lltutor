import * as React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './Course.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { grey } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';


const Course1 = () => {
  return (
    <>
      
      <Navbar />

      <div id='chat-body'>

        {/* head */}
        <div className='head-course-section container-fluid'>
          <div className='col-1 goBack-chat-btn'>
            <a href="/login"> <ArrowBackIosRoundedIcon sx={{fontSize:30,}}/> Chat</a>
          </div>
          <div className='col-2'>
            <button className='new-chat-btn'>New Chat</button>
          </div>
        </div>

        {/* Body */}

        <div className='chat__history-container container-fluid'>

          <div id='history-container' className='col-3'>
            <div className='history'>

              {/* HEAD HISTORY  -- search section */}

              <div className='d-flex align-items-center justify-content-center height-1'>

                <div className='search-container'>
                  <SearchRoundedIcon sx={{color: grey[500]}}/>

                  <input type="search" id='inputSearch_history' placeholder='Search'/>
                  
                </div>

              </div>
              <hr id='h-line'/>

              {/* BODY HISTORY -- list section */}
              
              <div id='list'>
                <ul className='ul-list'>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                  <li>
                    <div className='title-date'>
                      <h6 className='fw-700'>Subject 1</h6>
                      <span className='font-s-1 c-mine-1'>07:40</span>
                    </div>
                    <div className='content c-mine-1 font-s-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</div>
                    <hr id='hr-line-li'/>
                  </li>
                </ul>
              </div>
            
            </div>

          </div>



          {/* CHAT SECTION */}
          <div id='chatAiBody-container' className='col-9'>
            
            <div className='chatAiBody'>
              
              {/* TITLE --> CHAT */}
              <div className='chatTitle'>

                <div className='col-2 fs-3 fw-bolder letter-space-1'>
                  Subject
                </div>

                <div className='time-date  col-2'>
                  <span>10 : 00 AM</span>
                  <span>06 / 07 / 2024</span>
                </div>

              </div>

              {/* Chat Body */}

              <div id='chat-container'>

                <ul>

                  <li className='user-msg col-9'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit cum provident doloremque ipsum, eum nisi reiciendis. 
                      Eligendi velit modi quae voluptate autem consequatur, nemo architecto praesentium asperiores deleniti unde quia.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestiae error culpa odio deleniti pariatur ullam asperiores, vero aperiam cupiditate amet commodi, 
                      distinctio dolore, eius voluptate incidunt dicta nisi doloribus.
                    </p>
                  </li>


                  <li className='chat-msg col-9'>

                    <h5><b>Chat</b></h5>

                    <p>Hello!</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque temporibus expedita aspernatur odit consequuntur exercitationem,
                      maiores doloremque quasi voluptatibus necessitatibus consequatur ullam nisi sunt nesciunt, consectetur dolore quam aliquid tempora debitis omnis? 
                      Aliquid quae ea assumenda dolore ullam, vel totam, numquam eius ex nostrum sint, magnam veniam ab ad cupiditate.</p>
                  </li>

                </ul>

              </div>

              {/* Chat Input */}
              
              <div id='chat-input-container'>

                <div className='input-chat col-10'>

                  <textarea id='textarea-input' placeholder='Enter Message'></textarea>

                  <span id="hidden-text" class="hidden"></span>
                  <button className='image-upload-btn upload'> <i class="bi bi-file-earmark-image"></i> </button>
                  <button className='file-upload-btn upload'> <i class="bi bi-file-earmark-text"></i> </button>

                </div>

                <div className='col-2 send-btn-chat-container'>
                  <button className='send-btn-chat'> <span className='me-2'> Send </span> <SendIcon/> </button>
                </div>

              </div>

            </div>
          
          </div>

        </div>
      </div>
    </>
  )
}

export default Course1