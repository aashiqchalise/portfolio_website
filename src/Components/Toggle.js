import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Toggle = () => {
    // dark mode start
    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () => {
        if(theme === "dark-theme"){
            setTheme('light-theme')

        } else{
            setTheme('dark-theme')
        }
    };

    useEffect(()=>{
        document.body.className = theme;
    }, [theme]);

    //dark mode end
    return (
        <>
            <button className='toggle d-flex justify-content-between ms-2' onClick={toggleTheme}>
                <FontAwesomeIcon icon={faMoon} />
                <FontAwesomeIcon icon={faSun} />
                <div className="t-button"></div>
            </button>
        </>
    )
}

export default Toggle


{/* <div className="toggle d-flex justify-content-between">
            <FontAwesomeIcon icon={faMoon}/>
            <FontAwesomeIcon icon={faSun}/>
            <div className="t-button">
            
            </div>
        </div> */}