import React from 'react'
import bg from '../assets/bg.jpg'

const Header = () => {
  return (
    <div className="h-screen w-full bg-center"
    style={{ backgroundImage: `url(${bg})` }}>
      <div className='pt-20'>
        <h1 className='text-center text-5xl text-white'>HEADER</h1>
      </div>
    </div>
  )
}

export default Header