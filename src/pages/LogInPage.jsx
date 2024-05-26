import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import loginBg from "../assets/login_bg.jpg";

function LogInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            toast.warn('Ingresa todos los campos.', {
                position: "top-right",
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

        // Save to localStorage
        localStorage.setItem('user', email);
        localStorage.setItem('password', password);
        navigate('/home')
    }

    return (
        <div
            className="bg-no-repeat bg-cover bg-center relative"
            style={{
                backgroundImage:
                    `url(${loginBg})`,
            }}
        >
            <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
            <ToastContainer />

            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="self-start hidden lg:flex flex-col text-white">
                        <img src="" alt="" className="mb-3" />
                        <h1 className="mb-3 font-bold text-5xl">
                            Bienvenido a NatAmE
                        </h1>
                        <p className="pr-3 text-3xl"> 
                        Inicia sesión para continuar explorando nuestros productos naturales
                        y amigables con el medio ambiente.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">
                                Inciar Sesión
                            </h3>
                            <p className="text-gray-500">
                                Por favor ingresa a tu cuenta
                            </p>
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">
                                    Usuario
                                </label>
                                <input
                                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="text"
                                    placeholder="Usuario"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    Contraseña
                                </label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>       

                            <div>
                                <button
                                    onClick={() => handleLogin()}
                                    type="button"
                                    className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                        </div>

                        <div className="pt-5 text-center text-gray-400 text-xs">
                            <span>
                                Copyright © 2024 NatAmE
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LogInPage;
