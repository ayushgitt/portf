import "./formstyle.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>YOUR NAME</label>
            <input type="text"></input>

            <label>Email</label>
            <input type="Email"></input>

            <label>SUBJECT</label>
            <input type="text"></input>

            <label>MESSAGE</label>
            <textarea rows="6" placeholder="Type your message here....."/>
            <button className="btn">SUBMIT</button>
        </form>
    </div>
  )
}

export default Form