import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const HaederSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/ajay-yadav-patil' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/ajayypatil' target='blank'><FaGithub/></a>
        
    </div>
  )
}

export default HaederSocials