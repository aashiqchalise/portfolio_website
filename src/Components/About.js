import React from 'react'
import Profile from '../profile1.jpeg';
import Resume from '../Aashiq_Chalise_Resume1.pdf';

const About = () => {
  return (
    <div id='about'>
      <div className="container" style={{paddingTop: "5rem"}} >
        <div className="about-head text-center">
          <h2 className='font-poppins'>About Me</h2>
          <span className='bafter bf-about'></span>
        </div>
        <div className="about-content">
          <div className="row">
            <div className="profile col-sm-6 pt-4 d-flex align-items-center justify-content-center">
              <img src={Profile} alt="" />
            </div>
            <div className="about-right col-sm-6">
              <h3>It's me Aashiq and I'm a <span>Student</span></h3>
              <p className='text-justify font-poppins mb-4'>Hello! I’m Aashiq Chalise, computer science Student lives in Kathmandu Nepal.
                I'm super passionate about exploring and building open source web applications and tools. <br />
                I'm currently pursuing Bachelor Degree in Computer Science and Information Technlogy(BCS CSIT) at <span>Tribhuvan university</span></p>
                <a href={Resume} download = "Aashiq_Chalise_Resume.pdf" className='btn-hire-me '>Download CV</a>
                <i class='fab fa-google'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
