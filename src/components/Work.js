import "./workcard.css"
import React from 'react'
import pro1 from "../images/proj1.jpeg"
import {NavLink} from "react-router-dom"
import Workcard from "./Workcard"
import Workcardata from "./Workcardata"

const Work = (props) => {
  return (
    <div className="work-contain">
        <h1 className="project-head">Projects</h1>
        <div className="proj-contain">
            {Workcardata.map((val,ind)=>{
                return(
                    <Workcard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}

        </div>
    </div>
  )
}

export default Work;
