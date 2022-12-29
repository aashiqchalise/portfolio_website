import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faToggleOn} from '@fortawesome/free-solid-svg-icons';

import Toggle from './Toggle';


const Navbar = () => {
    
    const [colorr,setColorr]= useState(false);
    const changeColor = ()=>{
        if (window.scrollY >= 20) {
            setColorr(true)
          } else {
            setColorr(false)
          }
    }
    window.addEventListener("scroll", changeColor)
    
    return (
        <nav className={colorr ? 'navbar navbar-expand-lg fixed-top navbar-sc' : 'navbar navbar-expand-lg fixed-top'}>
            <div className="container">
                <Link className={colorr ? 'navbar-brand-sc' : 'navbar-brand'} to="home" duration={200}  smooth={true}>portfo<span>lio</span></Link>
                <Toggle />
                {/* <button onClick={toggleTheme}><FontAwesomeIcon icon={faToggleOn} /></button> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} />
                    {/* <span className="navbar-toggler-icon"></span> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="home" activeClass='active' duration={200}  smooth={true}>home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about" duration={200}  smooth={true}>about</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="skills" duration={200} smooth={true}>skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact"duration={200} smooth={true}>contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
