import React, { useState } from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import logo from '../assets/VV.png'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Nav = () => {
  const [nav,setNav]=useState(false)
  const handleClick=()=>{
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {/* <img src={logo} alt="" style={{ width: "50px" }} /> */}
        <img />
      </div>
      {/*Menu */}
      <ul className="hidden md:flex">
        <li className='nav_li hover:scale-110 duration-500'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='nav_li hover:scale-110 duration-500'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='nav_li hover:scale-110 duration-500'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='nav_li hover:scale-110 duration-500'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link></li>
        <li className='nav_li hover:scale-110 duration-500'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
      {/*Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {nav ? <FaTimes />:<FaBars />}
        
      </div>
      {/*Mobile menu */}
      <div className={nav ?'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center': 'hidden' }>
        {/* <ul>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul> */}
        <ul>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link></li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>
      </div>
      {/*Social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/vishnu-vardhan-a-4163a0294' target='_blank' rel='noopener noreferrer'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/vishnuvardhan63/' target='_blank' rel='noopener noreferrer' >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='mailto:vishnuvardanthmakuri@gmail.com'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[55px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1PzEjAF1SxFFvvppy9HjldMjYcVXIZ1Fq/view?usp=drivesdk' target='_blank' rel='noopener noreferrer'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav