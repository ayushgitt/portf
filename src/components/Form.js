import "./formstyle.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_exjkx97', 'template_exrnthf', form.current, {
        publicKey: '0LF3x6_AzYXIH5q1Q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email send successfully.");
        },
        (error) => {
          console.log('FAILED...', error.text);
          e.target.reset();
          alert("Email send failed.");
        },
      );
  };




  return (
    <div className="form">
        
      <form ref={form} onSubmit={sendEmail}>
      <label>YOUR Name</label>
      <input type="text" name="user_name"></input>

      <label>Email</label>
      <input type="email" name="user_email"></input>

      <label>SUBJECT</label>
      <input type="text"></input>

      <label>MESSAGE</label>
      <textarea name="message" placeholder="enter your text here....." rows="6" />
      <button className="btn" value="send">SUBMIT</button>
    </form>
    </div>
  )
}

export default Form
