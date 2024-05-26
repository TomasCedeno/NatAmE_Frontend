import React from "react";
import AppBase from "../components/AppBase";

function RegisterSalesRepresentativePage() {
    return (
        <AppBase>
            <div className="text-4xl font-bold px-6 py-4">
                Registrar Representante de Ventas
            </div>

            <div className="p-10 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-11/12 mx-auto">
                <form action="">
                    <div className="grid grid-cols-2 gap-10">
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Nombre
                            </label>
                            <input
                                type="text"
                                class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Nombre"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Apellido
                            </label>
                            <input
                                type="text"
                                class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Apellido"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Identificación
                            </label>
                            <input
                                type="number" min="0"
                                class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Identificación"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Correo
                            </label>
                            <input
                                type="email"
                                class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Correo"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Género
                            </label>
                            <select class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600">
                                <option value="">Selecciona Género</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Fecha de Nacimiento
                            </label>
                            <input
                                type="date"
                                class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Fecha de Nacimiento"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Fecha de Contrato
                            </label>
                            <input
                                type="date"
                                class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Fecha de Contrato"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Teléfono de Contacto
                            </label>
                            <input
                                type="number" min="0"
                                class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Teléfono de Contacto"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Dirección
                            </label>
                            <input
                                type="text"
                                class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Dirección"
                            />
                        </div>
                        <div class="flex flex-col">
                            <label class="leading-loose font-semibold text-lg">
                                Regional
                            </label>
                            <select class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600">
                                <option value="">Selecciona Regional</option>
                                <option value="Andina">Andina</option>
                                <option value="Caribe">Caribe</option>
                                <option value="Orinoquía">Orinoquía</option>
                                <option value="Pacífica">Pacífica</option>
                                <option value="Amazonía">Amazonía</option>
                            </select>
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
        </AppBase>
    );
}

export default RegisterSalesRepresentativePage;
