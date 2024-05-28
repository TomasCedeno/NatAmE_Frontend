import React from "react";
import { TiShoppingCart } from "react-icons/ti";

import defaultProductImg from "../assets/product_placeholder.jpg"

function ProductCard({product}) {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src={defaultProductImg}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium text-gray-900">
          {product.nombre}
        </h2>
        <p className="mb-2 text-base text-gray-700">
          Categoría - Subcategoría
        </p>
        <p className="mb-2 text-base text-gray-700">
          Disponible: {product.disponible}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900">
            ${product.precio}
          </p>
          {/* <p className="ml-auto text-base font-medium text-green-500">20% off</p> */}
        </div>
        <button className="mt-4 w-full flex justify-between bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Agregar al carrito
          <TiShoppingCart className="mr-2 text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;