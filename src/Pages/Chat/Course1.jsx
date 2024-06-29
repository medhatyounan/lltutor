import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Course.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { grey } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';

const Course1 = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChatHistory = async () => {
      const config = {
        method: 'get',
        url: 'https://2232-156-210-18-81.ngrok-free.app',
        headers: {},
      };

      try {
        const response = await axios.request(config);
        console.log("API Response:", response.data);
        setChatHistory(response.data.history || []);
      } catch (error) {
        console.error("Error fetching chat history:", error);
        setError("Failed to fetch chat history. Please try again later.");
      }
    };

    fetchChatHistory();
  }, []);

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    setChatHistory([...chatHistory, { type: 'human', content: message }]);
    setMessage('');

    // Implement API call to send the message
    const config = {
      method: 'post',
      url: 'https://2232-156-210-18-81.ngrok-free.app',
      data: { message }
    };

    try {
      const response = await axios.request(config);
      setChatHistory([...chatHistory, { type: 'ai', content: response.data.reply }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleNewChat = () => {
    setChatHistory([]);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <Navbar />

      <div id='chat-body'>
        <div className='head-course-section container-fluid'>
          <div className='col-1 goBack-chat-btn'>
            <a href="/login">
              <ArrowBackIosRoundedIcon sx={{ fontSize: 30 }} /> Chat
            </a>
          </div>
          <div className='col-2'>
            <button className='new-chat-btn' onClick={handleNewChat}>New Chat</button>
          </div>
        </div>

        <div className='chat__history-container container-fluid'>
          <div id='history-container' className='col-3'>
            <div className='history'>
              <div className='d-flex align-items-center justify-content-center height-1'>
                <div className='search-container'>
                  <SearchRoundedIcon sx={{ color: grey[500] }} />
                  <input type="search" id='inputSearch_history' placeholder='Search' />
                </div>
              </div>

              <hr id='h-line' />

              <div id='list'>
                <ul className='ul-list'>
                  {error ? (
                    <li className='error-message'>{error}</li>
                  ) : (
                    chatHistory.map((chat, index) => (
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

          <div id='chatAiBody-container' className='col-9'>
            <div className='chatAiBody'>
              <div className='chatTitle'>
                <div className='col-2 fs-3 fw-bolder letter-space-1'>Subject</div>
                <div className='time-date col-2'>
                  <span>10 : 00 AM</span>
                  <span>06 / 07 / 2024</span>
                </div>
              </div>

              <div id='chat-container'>
                <ul>
                  {chatHistory.map((chat, index) => (
                    <li key={index} className={chat.type === 'human' ? 'user-msg col-9' : 'chat-msg col-9'}>
                      {chat.type === 'ai' && <h5><b>Chat</b></h5>}
                      <p>{chat.content}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div id='chat-input-container'>
                <div className='input-chat col-10'>
                  <textarea
                    id='textarea-input'
                    placeholder='Enter Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
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
};

export default Course1;
