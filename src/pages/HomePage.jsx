import React from 'react';
import AppBase from '../components/AppBase';
import ProductCard from '../components/ProductCard';

function HomePage() {

  return (
    <div>
      <AppBase>
        <div className="text-4xl font-bold px-6 py-4">
            Productos
        </div>

        <div className="flex flex-wrap md:justify-around gap-14 sm:justify-center sm:gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-full sm:w-auto mb-2">
              <ProductCard />
            </div>
          ))}
        </div>
      </AppBase>
    </div>
  );
}

export default HomePage;
