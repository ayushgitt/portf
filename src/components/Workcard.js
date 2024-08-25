import "./workcard.css"
import React from 'react'
import pro1 from "../images/proj1.jpeg"
import {NavLink} from "react-router-dom"
const Workcard = (props) => {
  return (
            <div className="proj-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="proj-details">
                  <p>{props.text}</p>
                  <div className="pro-btn">
                    <NavLink to={props.view} className="btn">VIEW</NavLink>
                    <NavLink to={props.source} className="btn">SOURCE</NavLink>
                  </div>
                </div>
            </div>
  )
}

export default Workcard;