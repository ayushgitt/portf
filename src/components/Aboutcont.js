import { Link } from "react-router-dom"
import "./aboutstyle.css"
import React from 'react'
import pro from "../images/heroimg2.jpg"
import pre from "../images/proj1.jpeg"
const Aboutcont = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ??</h1>
            <p>Im a front-end developer ,I create responsive websites and also know abot Machine Learning & Data Visualisation.</p>
            <Link to="/contact">
              <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pro} alt="true"/>

                </div>
                <div className="img-stack bottom">
                    <img src={pre} alt="true"/>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Aboutcont