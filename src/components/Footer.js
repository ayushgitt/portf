import { FaFacebook, FaGit, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./footer.css"

import React from 'react';


const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div><p>
                    <h5>F-98/3,Gali 17,near abc mall</h5>
                    <h5>Sadhnager,Palam,New Delhi-110045</h5>
                    </p>
                </div>
                </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>112-009876</h4>
                
                </div>

                
                <div className="mail">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>zxy@mail.com</h4>
                
                </div>



            </div>
            <div className="right">

                <h4>ABOUT THE PORTFOLIO</h4>
                <p><h5>This is me AYUSH KUMAR,a front-end developer with knowledge of building intuitive user interface.</h5>
                <h5> I also has a good background in machine learning and data visualization using Power BI.</h5> </p>
                <div className="social">
                    <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>

                    <FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}}/>

                    <FaGit size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                </div>

                <div className="contac">
                <h5>CONTACT:</h5>
                <input className="tex" type="text" placeholder="NAME"></input>
                <input type="number" placeholder="NUMBER"></input>
                <input type="mail" placeholder="mail"></input>
                <button>SEND</button>
                </div>



            </div>
        </div>
    </div>
  )
}

export default footer