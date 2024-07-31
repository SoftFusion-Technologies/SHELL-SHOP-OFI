import React from 'react'
import ProductCard from '../custom/ProductCard'

const Products = () => {
  return (
    <div className='h-auto py-10 bg-shellSilver'>
      <div className='flex justify-center flex-col items-center p-5'>
        <h1 className='text-center text-3xl'>ALGUNOS PRODUCTOS</h1>
        <div className='pt-5 flex flex-col gap-2 justify-center items-center'>
          <ProductCard />
          {/* <ProductCard />
          <ProductCard /> */}
        </div>
      </div>
    </div>
  )
}

export default Products
