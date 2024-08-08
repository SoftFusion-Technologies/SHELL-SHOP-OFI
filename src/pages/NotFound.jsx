import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl font-medium text-gray-800 mt-4">
          Página no encontrada
        </p>
        <p className="text-gray-600 mt-2">
          Lo sentimos, la página que estás buscando no existe.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
