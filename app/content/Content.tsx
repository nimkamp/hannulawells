import React from "react";
import Cards from "./Cards";

const Content = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('/laptop.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100"></div>
            </div>
            <div className="relative z-10">
                <h1 className="text-8xl font-medium flex justify-center py-[5%]">
                    Good Reads
                </h1>
                <Cards />
            </div>
        </div>
    );
};

export default Content;
