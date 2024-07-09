import React from 'react'
import bg from '../assets/bg.jpg'

const Us = () => {
  return (
    <div className='h-auto py-10 bg-gray-100'>
      <div className='flex justify-center items-center gap-5 flex-col p-5'>
        <h1 className='text-center text-4xl font-bold'>Quienes somos</h1>
        <p className='text-center w-[300px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam porro 
          similique inventore facere consequuntur delectus consequatur ratione minima sunt, aliquam 
          reprehenderit, omnis est in asperiores sapiente enim, doloremque voluptates! Eveniet!
        </p>
        <img src={bg} alt="image" className='rounded w-[400px]' />
        <button className='bg-yellow px-10 py-3 rounded'>Ver más</button>
      </div>
    </div>
  )
}

export default Us
