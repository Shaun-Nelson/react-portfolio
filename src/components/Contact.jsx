import React from "react";

const Contact = () => {
  return (
    <div className='container-content'>
      <h2>Contact Me</h2>
      <div className='container-flex'>
        <form>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' />
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' required />
          <label htmlFor='message'>Message:</label>
          <textarea id='message' rows='5'></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
