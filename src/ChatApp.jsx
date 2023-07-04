import React, { useState } from 'react';
import "./App.css"

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        username: getRandomUsername(),
        text: message,
        likes: 0,
      };

      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleLike = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) => {
        if (msg.id === id) {
          return { ...msg, likes: msg.likes + 1 };
        }
        return msg;
      })
    );
  };

  const getRandomUsername = () => {
    const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
    const randomIndex = Math.floor(Math.random() * user_list.length);
    return user_list[randomIndex];
  };

  return (
    <div className='main-div'>
      <div className='chat-box'>
        <div className='scroller'>
          {messages.map((msg) => (
            <div className='msg-container' key={msg.id}>
              <span className='username' style={{ fontWeight: 'bold' }}>{msg.username}:</span>{' '}
              {msg.text}{' '}
              <button className='like-btn' onClick={() => handleLike(msg.id)}><img className='likepng' src={require("./image/like.png.png")} /></button>{' '}
              <span style={{ backgroundColor: "transparent" }}>({msg.likes})</span>
            </div>
          ))}

        </div>

        <div className='input-button-div'>
          <input className='input-box' type="text" placeholder='Message' value={message} onChange={handleChange} />
          <button className='send-btn' onClick={handleSend}>Send</button>
        </div>
      </div>

    </div>
  );
};

export default ChatApp;
