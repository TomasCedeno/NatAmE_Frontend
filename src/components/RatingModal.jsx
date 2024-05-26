import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

function RatingModal() {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (rate) => {
        setRating(rate);
    };

    const rate = async () => {
        setRating(0);
        document.getElementById('modal_rate').close();
    }

    return (
        <div>
            <dialog id="modal_rate" className="modal">
                <div className="modal-box w-11/12 max-w-3xl mx-auto">
                    <h3 className="font-bold text-3xl text-green-500 text-center">
                        Califica a <span className="text-gray-800">Nombre Representante</span>
                    </h3>
                    <div className="py-4 text-center">
                        <p className="mb-4 text-lg">Selecciona una calificación para el servicio:</p>
                        <Rating
                            initialRating={rating}
                            onChange={handleRatingChange}
                            fullSymbol={<FaStar className="text-green-500 text-4xl" />}
                            emptySymbol={<FaRegStar className="text-gray-300 text-4xl" />}
                            fractions={1}
                        />
                    </div>
                    <div className="modal-action items-center justify-end mt-2">
                        <button onClick={rate}
                            className="flex justify-between bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Calificar
                        </button>
                        <form method="dialog">
                            <button className="btn">Cerrar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default RatingModal;