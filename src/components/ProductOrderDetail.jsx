import React from "react";
import defaultProductImg from "../assets/product_placeholder.jpg";

function ProductOrderDetail() {
    return (
        <div className="hover:bg-gray-200 ransition-shadow duration-300 px-2 py-5 rounded-xl">
            <div className="grid grid-cols-7 w-full pb-6 border-b border-gray-100">
                <div className="col-span-7 min-[500px]:col-span-2 md:col-span-1">
                    <img
                        src={defaultProductImg}
                        alt="Skin Care Kit image"
                        className="w-full rounded-xl"
                    />
                </div>
                <div className="col-span-7 min-[500px]:col-span-5 md:col-span-6 min-[500px]:pl-5 max-sm:mt-5 flex flex-col justify-center">
                    <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center justify-between">
                        <div>
                            <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-6">
                                Skin Care Kit
                            </h5>
                            <p className="font-normal text-xl leading-8 text-gray-500">
                                Cantidad:{" "}
                                <span className="text-black font-semibold">
                                    1
                                </span>
                            </p>
                        </div>
                        <h5 className="font-manrope font-semibold text-3xl leading-10 text-black sm:text-right mt-3">
                            $325.00
                        </h5>
                    </div>
                </div>
            </div>
            <hr className="pb-5"/>
        </div>
    );
}

export default ProductOrderDetail;
