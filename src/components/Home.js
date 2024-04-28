import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 '>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Vishnu Vardhan A</h1>
            <h2 className='text-4xl sm:text-4xl py-4 font-bold text-[#8892b0]'>ReactJs Developer</h2>
            <p className='text-[#8892b0] pb-4 max-w-[700px]'>As a ReactJs developer, I specialize in creating dynamic and user-friendly web interfaces. My goal is to build engaging applications that blend functionality with seamless user experience.</p>
            <div>
                <Link to='about' smooth={true} duration={500}>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 ' />
                </span>
                </button>
                </Link>
                
            </div>

        </div>
    </div>
  )
}

export default Home