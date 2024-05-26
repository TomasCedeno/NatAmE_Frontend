import React, { useState } from "react";

import AppBase from "../components/AppBase";
import DataTable from "../components/DataTable";
import DashboardStats from "../components/DashBoardStats";

function SalesPage() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleCalculateSales = () => {};

    // Datos de ejemplo para la tabla
    const commisionData = [
        {
            id: 1,
            name: "John Doe",
            category: "Junior",
            sales: 20000,
            commission: 200,
        },
        {
            id: 2,
            name: "Jane Smith",
            category: "Master",
            sales: 40000,
            commission: 400,
        },
    ];

    // Columnas para la tabla
    const commisionColumns = [
        { header: "Representante", key: "name" },
        { header: "Categoría", key: "category" },
        { header: "Valor Vendido", key: "sales" },
        { header: "Comisión", key: "commission" },
    ];


    // Datos de ejemplo para la tabla
    const classifyData = [
        {
            id: 1,
            name: "John Doe",
            oldCategory: "Begginer",
            newCategory: "Junior",
        },
        {
            id: 2,
            name: "Jane Smith",
            oldCategory: "Junior",
            newCategory: "Senior",
        },
    ];

    // Columnas para la tabla
    const classifyColumns = [
        { header: "Representante", key: "name" },
        { header: "Categoría Anterior ", key: "oldCategory" },
        { header: "Categoría Nueva", key: "newCategory" },
    ];

    return (
        <AppBase>
            <div className="text-4xl font-bold px-6 py-4">Ventas</div>

            <div className="flex">
                <div className="w-1/2">
                    <div className="text-2xl font-bold px-6 py-4">
                        Ventas por periodo
                    </div>
                    <div className="flex pl-4 items-end">
                        <div className="flex flex-col">
                            <label className="font-bold pl-4">Desde</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={handleStartDateChange}
                                className="m-2 rounded-md py-2 px-4"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-bold pl-4">Hasta</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={handleEndDateChange}
                                className="m-2 rounded-md py-2 px-4"
                            />
                        </div>

                        <button
                            onClick={handleCalculateSales}
                            className="m-2 max-h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Calcular Comisiones
                        </button>
                    </div>

                    {/* Tabla de datos */}
                    <DataTable
                        data={commisionData}
                        columns={commisionColumns}
                    />
                </div>

                <div className="w-1/2">
                    <div className="text-2xl font-bold px-6 py-4">
                        Clasificar Representantes
                    </div>
                    <div className="flex pl-4 items-end">
                        <div className="flex flex-col">
                            <label className="font-bold pl-4">Desde</label>
                            <input
                                type="date"
                                value={startDate}
                                onChange={handleStartDateChange}
                                className="m-2 rounded-md py-2 px-4"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-bold pl-4">Hasta</label>
                            <input
                                type="date"
                                value={endDate}
                                onChange={handleEndDateChange}
                                className="m-2 rounded-md py-2 px-4"
                            />
                        </div>

                        <button
                            onClick={handleCalculateSales}
                            className="m-2 max-h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Clasificar
                        </button>
                    </div>

                    {/* Tabla de datos */}
                    <DataTable
                        data={classifyData}
                        columns={classifyColumns}
                    />
                </div>
            </div>

            <DashboardStats />
        </AppBase>
    );
}

export default SalesPage;
