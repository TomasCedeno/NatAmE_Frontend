import React from "react";
import AppBase from "../components/AppBase";

function RegisterCustomer() {
    return (
        <AppBase>
            <div className="pt-6">
                <div className="text-4xl font-bold px-6 py-4">
                    Registrar Cliente
                </div>

                <div className="p-10 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-11/12 mx-auto">
                    <form action="">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Apellido"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Identificación
                                </label>
                                <input
                                    type="number" min="0"
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Identificación"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Ciudad
                                </label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Ciudad"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Teléfono
                                </label>
                                <input
                                    type="number" min="0"
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Teléfono"
                                />
                            </div>
                            <div className="flex flex-col col-span-2">
                                <label className="leading-loose font-semibold text-lg">
                                    Dirección
                                </label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Dirección"
                                />
                            </div>
                        </div>

                        <div className="pt-6 flex items-center space-x-4">
                            <button type="button"
                                className="bg-green-600 flex justify-center items-center w-full text-white px-6 py-4 rounded-md focus:outline-none hover:bg-white hover:text-green-600 hover:border-green-600 border-2 border-transparent transition-colors duration-300">
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppBase>
    );
}

export default RegisterCustomer;