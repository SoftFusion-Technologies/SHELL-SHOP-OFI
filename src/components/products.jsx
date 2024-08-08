import React from 'react';
import ProductCard from '../custom/ProductCard';
import cafe from '../assets/products/IMG_4227.jpg';
import cafe2 from '../assets/products/IMG_4240.jpg';
import cafe3 from '../assets/products/IMG_4222.jpg';
import cafe4 from '../assets/products/IMG_4249.jpg';
import cafe5 from '../assets/products/IMG_4254.jpg';
import cafe6 from '../assets/products/IMG_4233.jpg';

import '../styles/benefits.css';
const Products = () => {
  return (
    <div id="productos" className="py-16 bg-shellSilver">
      <div className="container mx-auto px-5">
        <h1 className="text-center text-5xl font-bold text-gray-800">
          ALGUNOS PRODUCTOS
        </h1>
        <p className="text-center text-lg text-gray-600 mt-4">
          Descubre nuestra selección exclusiva de productos de alta calidad.
        </p>
        {/* Primera fila de productos */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          <div className="col-span-1 flex justify-center img-hover-zoom">
            <ProductCard image={cafe} />
          </div>
          <div className="col-span-1 flex justify-center img-hover-zoom">
            <ProductCard image={cafe2} />
          </div>
          <div className="col-span-1 flex justify-center img-hover-zoom">
            <ProductCard image={cafe3} />
          </div>
        </div>

        {/* Segunda fila de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          <div className="col-span-1 flex justify-center img-hover-zoom">
            <ProductCard image={cafe4} />
          </div>
          <div className="col-span-1 flex justify-center img-hover-zoom">
            <ProductCard image={cafe5} />
          </div>
          <div className="col-span-1 flex justify-center img-hover-zoom">
            <ProductCard image={cafe6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
