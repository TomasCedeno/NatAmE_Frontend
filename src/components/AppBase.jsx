import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TbPlant2 } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiSolidPurchaseTag } from "react-icons/bi";

import avatarImg from "../assets/avatar.png";

function AppBase({children}) {
    const [profileOpen, setProfileOpen] = useState(false);
    const [asideOpen, setAsideOpen] = useState(true);
    const navigate = useNavigate();

    const toggleProfile = () => {
        setProfileOpen(!profileOpen);
    };

    const closeProfile = () => {
        setProfileOpen(false);
    };

    const toggleAside = () => {
        setAsideOpen(!asideOpen);
    };

    return (
        <main className="min-h-screen w-full bg-gray-100 text-gray-700">
            {/* Header */}
            <header className=" fixed z-50 top-0 left-0 flex w-full h-20 items-center justify-between border-b-2 border-gray-200 bg-white p-2 ">
                <div className="flex items-center space-x-2">
                    <button
                        type="button"
                        className="text-3xl"
                        onClick={toggleAside}
                    >
                        <i className="bx bx-menu"></i>
                    </button>
                    <div className="flex items-center text-green-600 text-3xl font-bold pl-4">
                        NatAmE
                        <TbPlant2 className="ml-2" />
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    {/* Cart Button */}
                    <div className="mr-4">
                        <button onClick={() => navigate('/cart')}
                            className="flex items-center justify-center rounded-full bg-green-600 text-white text-xl py-2 px-4 transition-colors duration-300 hover:bg-white hover:text-green-600 hover:border-green-600 border-2 border-transparent">
                            <TiShoppingCart className="mr-2 text-3xl" />
                            <span className="hidden md:inline-block">
                                Carrito (0)
                            </span>
                        </button>
                    </div>

                    {/* Profile Button */}
                    <div className="relative pr-14">
                        <button
                            type="button"
                            onClick={toggleProfile}
                            className="h-10 w-10 overflow-hidden rounded-full"
                        >
                            <img src={avatarImg} alt="user" />
                        </button>

                        {/* Profile Dropdown */}
                        {profileOpen && (
                            <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md">
                                <div className="flex items-center space-x-2 p-2">
                                    <img
                                        src={avatarImg}
                                        alt="user"
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <div className="font-medium">Usuario</div>
                                </div>

                                <div className="flex flex-col space-y-3 p-2">
                                    <a
                                        href="#"
                                        className="transition hover:text-green-500"
                                    >
                                        My Profile
                                    </a>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-500"
                                    >
                                        Edit Profile
                                    </a>
                                    <a
                                        href="#"
                                        className="transition hover:text-green-500"
                                    >
                                        Settings
                                    </a>
                                </div>

                                <div className="p-2">
                                    <button onClick={() => navigate('/')} className="flex items-center space-x-2 transition hover:text-green-500">
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            ></path>
                                        </svg>
                                        <div>Cerrar Sesión</div>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="flex fixed top-20 left-0 h-full w-full">
                {asideOpen && <Aside />}
                <div className="relative w-full flex-1 p-4 overflow-auto max-h-full pb-24">
                    {children}
                </div>
            </div>
        </main>
    );
}

const Aside = () => (
    <aside
        className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-3 text-xl font-bold"
        style={{ height: "90.5vh" }}
    >
        <Link
            to="/home"
            className="flex items-center space-x-1 rounded-md px-2 py-4 hover:bg-gray-100 hover:text-green-500"
        >
            <span className="text-2xl pr-4">
                <FaHome />
            </span>
            <span>Productos</span>
        </Link>
        <Link
            to="/cart"
            className="flex items-center space-x-1 rounded-md px-2 py-4 hover:bg-gray-100 hover:text-green-500"
        >
            <span className="text-2xl pr-4">
                <TiShoppingCart />
            </span>
            <span>Carrito</span>
        </Link>
        <Link
            to="/orders"
            className="flex items-center space-x-1 rounded-md px-2 py-4 hover:bg-gray-100 hover:text-green-500"
        >
            <span className="text-2xl pr-4">
                <BiSolidPurchaseTag />
            </span>
            <span>Pedidos</span>
        </Link>
        <Link
            to="/sales-representative/register"
            className="flex items-center space-x-1 rounded-md px-2 py-4 hover:bg-gray-100 hover:text-green-500"
        >
            <span className="text-2xl pr-4">
                <MdWork />
            </span>
            <span>Registrar Representante</span>
        </Link>
        <Link
            to="/customer/register"
            className="flex items-center space-x-1 rounded-md px-2 py-4 hover:bg-gray-100 hover:text-green-500"
        >
            <span className="text-2xl pr-4">
                <GiTakeMyMoney />
            </span>
            <span>Registrar Cliente</span>
        </Link>
    </aside>
);

export default AppBase;
