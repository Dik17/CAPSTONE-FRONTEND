import React, { useState } from 'react';
import './ContactForm.css';
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to send the email and message data to a backend or perform any necessary action.
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div >
        <label style={{marginLeft:'200px',fontWeight:'bold',fontSize:'18px'}}>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{width:'50%',marginLeft:'200px',marginTop:'10px',height:'30px',borderRadius:'5px'}}
        />
      </div>
      <div style={{marginTop:'10px'}}>
        <label style={{marginLeft:'200px',fontWeight:'bold',fontSize:'18px'}}>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{width:'50%',marginLeft:'200px',marginTop:'5px',height:'80px',borderRadius:'5px'}}
        />
      </div>
      <button style={{marginLeft:'200px',marginTop:'20px'}} type="submit" className='btn2'>Send </button>
    </form>
  );
};

export default ContactForm;
