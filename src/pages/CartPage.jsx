import React from "react";
import { useNavigate } from "react-router-dom";

import AppBase from "../components/AppBase";
import CartProductCard from "../components/CartProductCard";

function CartPage() {
    const navigate = useNavigate();

    const makeOrder = () => {
        navigate('/order/1');
    }

    return (
        <AppBase>
            <div className="text-4xl font-bold px-6 py-4">Carrito</div>

            <div className="h-screen w-full bg-gray-100 pt-10 px-10">
                <div className="mx-auto justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        <CartProductCard />
                        <CartProductCard />
                        <CartProductCard />

                    </div>

                    <div className="flex flex-col w-1/3 gap-8 h-min">

                        {/* Sub total */}
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">$129.99</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-gray-700">$4.99</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">
                                        $134.98 USD
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        including VAT
                                    </p>
                                </div>
                            </div>

                            <button onClick={makeOrder}
                            className="mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-blue-50 hover:bg-green-600">
                                Continuar con pago
                            </button>
                        </div>

                        {/* Cambiar Representante */}
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 w-full">
                            <div className="font-bold text-xl">
                                Representante de Ventas
                            </div>
                            <div className="py-5">
                                Nombre del Representante actual
                            </div>
                            <button className="mt-4 w-full rounded-md bg-green-500 py-1.5 font-medium text-blue-50 hover:bg-green-600">
                                Cambiar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppBase>
    );
}

export default CartPage;
