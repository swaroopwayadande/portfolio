import React from 'react'
import logo from '../assets/Swarooplogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { CgMail } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      {/* Logo */}
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" />
      </div>

      {/* Social Media Icons */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href="https://www.linkedin.com/in/yourprofile" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          
        </a>

    

        <a
          href="https://github.com/yourprofile" // Replace with your GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

     
    
      </div>
    </nav>
  )
}

export default Navbar
