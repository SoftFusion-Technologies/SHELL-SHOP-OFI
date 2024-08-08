import React from 'react';

const ProductCard = ({ image }) => {
  return (
    <div className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg" src={image} alt="Product" />
      </div>
    </div>
  );
};

export default ProductCard;
