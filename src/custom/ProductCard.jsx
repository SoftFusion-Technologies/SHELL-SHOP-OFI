import React from 'react'
import cafe from '../assets/cafe.jpg'

const ProductCard = () => {
  return (
    <div
  class="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      class="rounded-t-lg"
      src={cafe}
      alt="" />
  </div>
</div>
  )
}

export default ProductCard
