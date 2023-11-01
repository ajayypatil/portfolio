import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>AJAY YADAV</a>
      <u className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#experience'>Experience</a></li>
        <li> <a href='#services'>Services</a></li>
        <li> <a href='#portfolio'>Portfolio</a></li>
        <li> <a href='#contact'>Contact</a></li>
      </u>

      <div className='footer__socials'>
        <a href='http://facebook.com' target='blank'> <FaFacebookF/></a>
        <a href='http://facebook.com' target='blank'> <BsInstagram/></a>
        <a href='http://facebook.com' target='blank'> <FaFacebookF/></a>
      </div>

      {/* <div className='footer__copyright'>
        <small>&copy AJAY YADAV. All rights reserved</small>
      </div> */}
    </footer>
  )
}

export default Footer