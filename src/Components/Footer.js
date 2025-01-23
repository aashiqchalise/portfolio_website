import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
 
        <div className="footer-part text-center font-poppins">
            <span>Copyright &copy; {currentYear} All rights reserved</span>
        </div>
   
    </>
  )
}

export default Footer
