import { Link } from "react-router-dom";
import "./Navbarstyle.css";
import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = () => {
    const[click,setclick]=useState(false);
    const handleclick=()=>setclick(!click);

    const [color,setcolor]=useState(false);
    const changecol=()=>{
        if(window.scrollY >= 100){
            setcolor(true);
        }
        else{
            setcolor(false);
        }
    }
    window.addEventListener("scroll",changecol);


  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
          <h1 className="logo">PORTFOLIO</h1>
        </Link>
        <ul className={click ? ("nav active"):("nav")}>
            <li>
                <Link to="/"><a>HOME</a></Link>
            </li>
            <li>
                <Link to="/project">PROJECTS</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/contact">CONTACT</Link>
            </li>
        </ul>

        <div className="ham" onClick={handleclick}>
            {click ? (<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
            
        </div>

    </div>
  )
}

export default Navbar