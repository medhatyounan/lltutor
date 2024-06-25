import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './Course.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { grey } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';

const Course1 = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null); // New state for error

  useEffect(() => {
    // Fetch chat history from API
    const fetchChatHistory = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://e8a3-156-210-39-124.ngrok-free.app/chat/SW2/?session_id=5',
        headers: {}
      };

      try {
        const response = await axios.request(config);
        console.log("API Response:", response.data); // Debug log
        setChatHistory(response.data.history || []);
      } catch (error) {
        console.error("Error fetching chat history:", error);
        setError("Failed to fetch chat history. Please try again later."); // Set error message
      }
    };

    fetchChatHistory();
  }, []);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    // Add user's message to chat history
    setChatHistory([...chatHistory, { type: 'human', content: message }]);
    setMessage('');

    // Send message to the API (this part should be implemented according to your API spec)
    // Example of sending a post request to the API:
    // const response = await axios.post('https://your-api-url', { message });
    // setChatHistory([...chatHistory, { type: 'ai', content: response.data.reply }]);
  };

  return (
    <>
      <Navbar />

      <div id='chat-body'>
        {/* head */}
        <div className='head-course-section container-fluid'>
          <div className='col-1 goBack-chat-btn'>
            <a href="/login">
              <ArrowBackIosRoundedIcon sx={{ fontSize: 30 }} /> Chat
            </a>
          </div>
          <div className='col-2'>
            <button className='new-chat-btn'>New Chat</button>
          </div>
        </div>

        {/* Body */}
        <div className='chat__history-container container-fluid'>
          <div id='history-container' className='col-3'>
            <div className='history'>
              {/* HEAD HISTORY -- search section */}
              <div className='d-flex align-items-center justify-content-center height-1'>
                <div className='search-container'>
                  <SearchRoundedIcon sx={{ color: grey[500] }} />
                  <input type="search" id='inputSearch_history' placeholder='Search' />
                </div>
              </div>

              <hr id='h-line' />

              {/* BODY HISTORY -- list section */}
              <div id='list'>
                <ul className='ul-list'>
                  {error ? (
                    <li className='error-message'>{error}</li> // Display error message
                  ) : (
                    chatHistory?.map((chat, index) => (
                      <li key={index}>
                        <div className='title-date'>
                          <h6 className='fw-700'>Chat {index + 1}</h6>
                          <span className='font-s-1 c-mine-1'>Time</span>
                        </div>
                        <div className='content c-mine-1 font-s-2'>{chat.content}</div>
                        <hr id='hr-line-li' />
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* CHAT SECTION */}
          <div id='chatAiBody-container' className='col-9'>
            <div className='chatAiBody'>
              {/* TITLE --> CHAT */}
              <div className='chatTitle'>
                <div className='col-2 fs-3 fw-bolder letter-space-1'>Subject</div>
                <div className='time-date col-2'>
                  <span>10 : 00 AM</span>
                  <span>06 / 07 / 2024</span>
                </div>
              </div>

              {/* Chat Body */}
              <div id='chat-container'>
                <ul>
                  {chatHistory?.map((chat, index) => (
                    <li key={index} className={chat.type === 'human' ? 'user-msg col-9' : 'chat-msg col-9'}>
                      {chat.type === 'ai' && <h5><b>Chat</b></h5>}
                      <p>{chat.content}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chat Input */}
              <div id='chat-input-container'>
                <div className='input-chat col-10'>
                  <textarea
                    id='textarea-input'
                    placeholder='Enter Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <span id="hidden-text" className="hidden"></span>
                  <button className='image-upload-btn upload'><i className="bi bi-file-earmark-image"></i></button>
                  <button className='file-upload-btn upload'><i className="bi bi-file-earmark-text"></i></button>
                </div>
                <div className='col-2 send-btn-chat-container'>
                  <button className='send-btn-chat' onClick={handleSendMessage}>
                    <span className='me-2'> Send </span> <SendIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course1;
