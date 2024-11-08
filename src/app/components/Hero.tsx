import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' data-aos="zoom-out" className='min-h-screen bg-no-repeat bg-[url(/MainPic.png)] bg-cover'
    style={{backgroundSize: "45%" , backgroundPosition: "left 10px top 100px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-out">Hi! I'm</p>
            <p data-aos="zoom-out">A.Moiz</p>
            <p data-aos="zoom-out">Hussain</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
