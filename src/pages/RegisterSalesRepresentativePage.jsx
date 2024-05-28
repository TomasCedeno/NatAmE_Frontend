import React, {useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBase from "../components/AppBase";

function RegisterSalesRepresentativePage() {
    const [formData, setFormData] = useState({
        identificacion: "",
        correo: "",
        nombre1: "",
        nombre2: " ",
        apellido1: "",
        apellido2: " ",
        genero: "M",
        fechaNacimiento: "",
        fechaContratacion: "",
        telefono: "",
        diraccion: "",
        tipoDoc: "CC",
        codigoRegion: "1",
        idRepCap: 10001,
        codigoCatRep: 1
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
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
    
        try {
            await axios.post("http://localhost:8080/representante/agregar", formData, {
                headers: {
                    'user': localStorage.getItem('user'),
                    'password': localStorage.getItem('password')
                }
            });
            // Manejar la respuesta exitosa
            toast.success(`Representante registrado exitosamente`, {
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
                    nombre2: " ",
                    apellido1: "",
                    apellido2: " ",
                    genero: "M",
                    fechaNacimiento: "",
                    fechaContratacion: "",
                    telefono: "",
                    diraccion: "",
                    tipoDoc: "CC",
                    codigoRegion: "1",
                    idRepCap: 10001,
                    codigoCatRep: 1
                })
        } catch (error) {
            // Manejar errores
            console.error("Error al registrar el representante:", error);
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
            <div className="text-4xl font-bold px-6 py-4">
                Registrar Representante de Ventas
            </div>

            <div className="p-10 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-11/12 mx-auto">
                <form action="">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="nombre1"
                                value={formData.nombre1}
                                onChange={handleChange}
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
                                name="apellido1"
                                value={formData.apellido1}
                                onChange={handleChange}
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
                                name="identificacion"
                                value={formData.identificacion}
                                onChange={handleChange}
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
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                                class="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                Género
                            </label>
                            <select className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                name="genero"
                                value={formData.genero}
                                onChange={handleChange}>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                Fecha de Nacimiento
                            </label>
                            <input
                                type="date"
                                name="fechaNacimiento"
                                value={formData.fechaNacimiento}
                                onChange={handleChange}
                                className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Fecha de Nacimiento"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                Fecha de Contrato
                            </label>
                            <input
                                type="date"
                                name="fechaContratacion"
                                value={formData.fechaContratacion}
                                onChange={handleChange}
                                className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Fecha de Contrato"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                Teléfono de Contacto
                            </label>
                            <input
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                type="number" min="0"
                                className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Teléfono de Contacto"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                Dirección
                            </label>
                            <input
                                type="text"
                                name="diraccion"
                                value={formData.diraccion}
                                onChange={handleChange}
                                className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                placeholder="Dirección"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="leading-loose font-semibold text-lg">
                                Regional
                            </label>
                            <select className="px-4 py-3 border focus:ring-green-500 focus:border-green-500 w-full sm:text-lg border-gray-300 rounded-md focus:outline-none text-gray-600"
                                name="codigoRegion"
                                value={formData.codigoRegion}
                                onChange={handleChange}>
                                <option value="1">Caribe</option>
                                <option value="2">Andina</option>
                                <option value="3">Pacífica</option>
                                <option value="4">Orinoquía</option>
                                <option value="5">Amazonía</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-6 flex items-center space-x-4">
                        <button type="button" onClick={handleSubmit}
                            className="bg-green-600 flex justify-center items-center w-full text-white px-6 py-4 rounded-md focus:outline-none hover:bg-white hover:text-green-600 hover:border-green-600 border-2 border-transparent transition-colors duration-300">
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </AppBase>
    );
}

export default RegisterSalesRepresentativePage;
