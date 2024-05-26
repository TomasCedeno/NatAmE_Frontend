import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";

import AppBase from "../components/AppBase";
import ProductOrderDetail from "../components/ProductOrderDetail";

function ViewOrderPage() {
    return (
        <div>
            <AppBase>
                <section className="py-10 relative">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                        <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-black mb-11">
                            La orden ha sido confirmada
                        </h2>
                        
                        <div className="flex justify-between items-center">
                            <h6 class="text-xl leading-8 text-black mb-3">Representante: <span className="font-medium">NOMBRE REPRESENTANTE</span></h6>
                            <button
                                className="flex items-center justify-center rounded-full bg-green-600 text-white text-xl py-2 px-4 transition-colors duration-300 hover:bg-white hover:text-green-600 hover:border-green-600 border-2 border-transparent gap-4">
                                Calificar Representante
                                <FaClipboardCheck />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 py-6 border-y border-gray-100 mb-6">
                            <div className="box group">
                                <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                                    Fecha
                                </p>
                                <h6 className="font-semibold font-manrope text-2xl leading-9 text-black">
                                    Dec 01, 2023
                                </h6>
                            </div>
                            <div className="box group">
                                <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                                    Orden
                                </p>
                                <h6 className="font-semibold font-manrope text-2xl leading-9 text-black">
                                    #1023498789
                                </h6>
                            </div>
                            <div className="box group">
                                <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                                    Método de Pago
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="46"
                                    height="32"
                                    viewBox="0 0 46 32"
                                    fill="none"
                                >
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width="45"
                                        height="31"
                                        rx="5.5"
                                        fill="#1F72CD"
                                    />
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width="45"
                                        height="31"
                                        rx="5.5"
                                        stroke="#F3F4F6"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.1282 11.333L3.88672 20.9953H8.96437L9.59385 19.4548H11.0327L11.6622 20.9953H17.2512V19.8195L17.7493 20.9953H20.6404L21.1384 19.7947V20.9953H32.7621L34.1755 19.4948L35.4989 20.9953L41.4691 21.0078L37.2143 16.1911L41.4691 11.333H35.5915L34.2157 12.8058L32.9339 11.333H20.2888L19.203 13.8269L18.0917 11.333H13.0246V12.4688L12.461 11.333H8.1282ZM9.1107 12.7051H11.5858L14.3992 19.2571V12.7051H17.1105L19.2835 17.4029L21.2862 12.7051H23.984V19.6384H22.3424L22.329 14.2055L19.9358 19.6384H18.4674L16.0607 14.2055V19.6384H12.6837L12.0435 18.0841H8.58456L7.94566 19.6371H6.13627L9.1107 12.7051ZM32.1608 12.7051H25.4859V19.6343H32.0574L34.1755 17.3379L36.217 19.6343H38.3512L35.2493 16.1898L38.3512 12.7051H36.3096L34.2023 14.9752L32.1608 12.7051ZM10.3147 13.8782L9.17517 16.6471H11.453L10.3147 13.8782ZM27.1342 15.4063V14.1406V14.1394H31.2991L33.1165 16.1636L31.2186 18.1988H27.1342V16.817H30.7756V15.4063H27.1342Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="box group">
                                <p className="font-normal text-base leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                                    Dirección
                                </p>
                                <h6 className="font-semibold font-manrope text-2xl leading-9 text-black">
                                    718 Robbyn Meadow, S...
                                </h6>
                            </div>
                        </div>

                        <ProductOrderDetail />
                        <ProductOrderDetail />
                        <ProductOrderDetail />

                        <div className="flex items-center justify-center sm:justify-end w-full my-6">
                            <div className="w-full">
                                <div className="flex items-center justify-between mb-6">
                                    <p className="font-normal text-xl leading-8 text-gray-500">
                                        Subtotal
                                    </p>
                                    <p className="font-semibold text-xl leading-8 text-gray-900">
                                        $240.00
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <p className="font-normal text-xl leading-8 text-gray-500">
                                        Cargo envío
                                    </p>
                                    <p className="font-semibold text-xl leading-8 text-gray-900">
                                        $60.00
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <p className="font-normal text-xl leading-8 text-gray-500">
                                        Impuestos
                                    </p>
                                    <p className="font-semibold text-xl leading-8 text-gray-900">
                                        $50.00
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <p className="font-normal text-xl leading-8 text-gray-500">
                                        Descuento
                                    </p>
                                    <p className="font-semibold text-xl leading-8 text-gray-900">
                                        $50.00
                                    </p>
                                </div>
                                <div className="flex items-center justify-between py-6 border-y border-gray-100">
                                    <p className="font-manrope font-semibold text-2xl leading-9 text-gray-900">
                                        Total
                                    </p>
                                    <p className="font-manrope font-bold text-2xl leading-9 text-green-600">
                                        $300.00
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="data">
                            <div className="flex gap-14 pb-10">
                                <button className="mt-4 w-1/2 h-12 flex justify-between items-center text-xl bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                    Pagar Orden
                                    <MdOutlinePayments />
                                </button>
                                <button className="mt-4 w-1/2 h-12 flex justify-between items-center text-xl bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                    Cancelar Orden
                                    <FaTimes />
                                </button>
                            </div>
                            <h6 className="font-manrope font-bold text-2xl leading-9 text-black mb-3">
                                Gracias por tu compra!
                            </h6>
                            <p className="font-medium text-xl leading-8 text-green-600">
                                Equipo NatAmE
                            </p>
                        </div>
                    </div>
                </section>
            </AppBase>
        </div>
    );
}

export default ViewOrderPage;
