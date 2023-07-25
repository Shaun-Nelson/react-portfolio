import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleMouseLeaveName = (e) => {
    if (e.target.value === "") {
      setMessage("A name is required.");
    }
  };

  const handleMouseLeaveEmail = (e) => {
    if (e.target.value === "") {
      setMessage("An email is required.");
    }
  };

  const handleMouseLeaveMessage = (e) => {
    if (e.target.value === "") {
      setMessage("A message is required.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    e.target.reset();
  };

  return (
    <div className='container-content'>
      <h2>Contact Me</h2>
      <div className='container-flex'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            required
            onMouseLeave={handleMouseLeaveName}
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            required
            onMouseLeave={handleMouseLeaveEmail}
          />
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            rows='5'
            required
            onMouseLeave={handleMouseLeaveMessage}
          ></textarea>
          <span>{message}</span>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
