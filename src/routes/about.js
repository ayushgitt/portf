import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Aboutcont from '../components/Aboutcont';


const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="Im a friendly front-end developer."/>
      <Aboutcont/>
      <Footer/>
    </div>
  )
}

export default About