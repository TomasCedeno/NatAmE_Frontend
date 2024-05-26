import React from "react";

import defaulProductImg from "../assets/product_placeholder.jpg"

function CartProductCard() {
    return (
        <div>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                    src={defaulProductImg}
                    alt="product-image"
                    className="w-28"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-xl font-bold text-gray-900">
                            Nike Air Max 2019
                        </h2>
                        <p className="mt-1 text-md text-gray-700">Categoría - Subcategoría</p>
                        <p className="ml-auto pt-3 text-lg font-medium">Precio unitario: <span className=" text-green-500">$3000</span></p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 text-md">
                        <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-500 hover:text-blue-50">
                                {" "}
                                -{" "}
                            </span>
                            <input
                                className="h-8 w-12 border bg-white text-center text-lg outline-none"
                                type="number"
                                value="2"
                                min="1"
                            />
                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-green-500 hover:text-blue-50">
                                {" "}
                                +{" "}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-xl text-green-600"> $ 259.000</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-8 w-8 cursor-pointer duration-150 hover:text-red-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartProductCard;
