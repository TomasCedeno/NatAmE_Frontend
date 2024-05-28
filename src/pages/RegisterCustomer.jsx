import React, { useState } from "react";
import axios from "axios";

import AppBase from "../components/AppBase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterCustomer() {
    const [formData, setFormData] = useState({
        identificacion: "",
        correo: "",
        nombre1: "",
        nombre2: "",
        apellido1: "",
        apellido2: "",
        ciudad: "",
        direccion: "",
        telefono: "",
        idRepCapto: 10001, 
        tipoDoc: "CC",     
        idRepActual: 10001  
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar que todos los campos estén llenos
        const formValues = Object.values(formData);
        const allFieldsFilled = formValues.every(value => value !== "");

        if (!allFieldsFilled) {
            toast.warn(`Completa todos los campos.`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }

        const user = localStorage.getItem('user');
        const password = localStorage.getItem('password');

        try {
            await axios.post("http://localhost:8080/cliente/agregar", formData, {
                headers: {
                    'user': user,
                    'password': password
                }
            });
            // Manejar la respuesta exitosa
            toast.success(`Cliente registrado con éxito`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            setFormData({
                identificacion: "",
                correo: "",
                nombre1: "",
                nombre2: "",
                apellido1: "",
                apellido2: "",
                ciudad: "",
                direccion: "",
                telefono: "",
                idRepCapto: 10001, 
                tipoDoc: "CC",     
                idRepActual: 10001 
            })
        } catch (error) {
            // Manejar errores
            console.error("Error al registrar el cliente:", error);
            toast.error(`Error al registrar representante: ${error.response.data}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    };

    return (
        <AppBase>
            <div className="pt-6">
                <div className="text-4xl font-bold px-6 py-4">
                    Registrar Cliente
                </div>

                <div className="p-10 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-11/12 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Identificación
                                </label>
                                <input
                                    type="number"
                                    name="identificacion"
                                    value={formData.identificacion}
                                    onChange={handleChange}
                                    min="0"
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Identificación"
                                />
                            </div>
                            
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Tipo de Documento
                                </label>
                                <select
                                    name="tipoDoc"
                                    value={formData.tipoDoc}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                >
                                    <option value="CC">Cédula de Ciudadanía</option>
                                    <option value="CE">Cédula de Extranjería</option>
                                    <option value="PA">Pasaporte</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Primer Nombre
                                </label>
                                <input
                                    type="text"
                                    name="nombre1"
                                    value={formData.nombre1}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Primer Nombre"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Segundo Nombre
                                </label>
                                <input
                                    type="text"
                                    name="nombre2"
                                    value={formData.nombre2}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Segundo Nombre"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Primer Apellido
                                </label>
                                <input
                                    type="text"
                                    name="apellido1"
                                    value={formData.apellido1}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Primer Apellido"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Segundo Apellido
                                </label>
                                <input
                                    type="text"
                                    name="apellido2"
                                    value={formData.apellido2}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Segundo Apellido"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleChange}
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
                                    name="ciudad"
                                    value={formData.ciudad}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Ciudad"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Dirección
                                </label>
                                <input
                                    type="text"
                                    name="direccion"
                                    value={formData.direccion}
                                    onChange={handleChange}
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Dirección"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="leading-loose font-semibold text-lg">
                                    Teléfono
                                </label>
                                <input
                                    type="number"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    min="0"
                                    className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                    placeholder="Teléfono"
                                />
                            </div>
                            
                        </div>

                        <div className="pt-6 flex items-center space-x-4">
                            <button
                                type="submit"
                                className="bg-green-600 flex justify-center items-center w-full text-white px-6 py-4 rounded-md focus:outline-none hover:bg-white hover:text-green-600 hover:border-green-600 border-2 border-transparent transition-colors duration-300"
                            >
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer className="z-50"/>
        </AppBase>
    );
}

export default RegisterCustomer;