import "./herostyle.css";
import React from 'react';
import INTRO from '../images/heroimg.jpeg'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="heroo">
        <div className="mask">
            <img className="heoimg" src={INTRO} alt="INTRO" />;

        </div>

        <div className="content">
            <p><h3>HI,I AM AYUSH KUMAR</h3></p>;
            <h1>FRONT-END DEV</h1>;
            <h4>& have a knowledge of ML,UI/UX,Data Visualisation.</h4>;
            <div className="but">
            <Link to="/project" className="btn"> PROJECTS </Link>
            <Link to="/contact" className="btn-nlight">CONTACT</Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero