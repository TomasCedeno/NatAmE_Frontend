import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";

import AppBase from "../components/AppBase";
import ProductOrderDetail from "../components/ProductOrderDetail";
import RatingModal from "../components/RatingModal";

import PSEIcon from "../assets/pse.svg"
import MasterCardIcon from "../assets/mastercard.svg"

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
                            <button onClick={()=>document.getElementById('modal_rate').showModal()}
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
                                <div className="flex w-32 justify-center gap-4">
                                    <button>
                                        <img src={PSEIcon} alt="PSE" className="w-10"/>
                                    </button>
                                    <button>
                                        <img src={MasterCardIcon} alt="mastercard" className="w-20"/>
                                    </button>
                                </div>
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

            <RatingModal />
            
        </div>
    );
}

export default ViewOrderPage;
