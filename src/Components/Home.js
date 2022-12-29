import React from 'react'
import { Link } from 'react-scroll'
import Typed from 'react-typed';

const Home = () => {
  return (
    <div id='home'>
      <div className="home-section" >
        <div className="main-content">
          <div className="container">
            <div className="home-content">
              <p className='text1 mb-0'>Hi! It's me</p>
              <h1 className='text2 mb-0'>Aashiq Chalise</h1>
              <p className='text3 mb-4'>i'm a &nbsp;
                 <span>
                  <Typed
                    className='typed-text'
                    strings={['Web Designer', 'React Developer','CSIT Graduate']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                  />
                </span>
              </p>
              <Link to="contact" duration={200} smooth={true} className='btn-hire-me '>Hire Me</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
