import React from "react";

const PeopleMatter = () => {
    return (
        <section className="flex flex-col items-center w-full h-full gap-12">
            <img
                src="/whiteW.svg"
                alt="white hannulawells logo on homepage"
                className="w-[20%] h-auto mt-32"
            />
            <h1 className="text-[#8E8E8E] text-[4rem] border-y-2 border-[#1C1C2D] py-4 px-24">
                Your <span className="text-white">people</span> matter to us.
            </h1>
            <p className="text-center text-[1.75rem] w-[60%] leading-10 text-white opacity-85">
                We prioritize people over technology, offering value-driven
                cybersecurity services tailored to meet our clients' unique
                needs. With a client-centric approach, we strive to understand
                your challenges and deliver comprehensive solutions to improve
                your security posture and protect what matters most to you.
            </p>
            <p className="text-white text-[1.75rem] opacity-85 border-y-2 border-[#1C1C2D] ">
                HannulaWells
            </p>
        </section>
    );
};

export default PeopleMatter;