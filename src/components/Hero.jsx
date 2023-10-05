import heroImg from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import underlineDsg from "../assets/Vector 4.png";

import Button from "./Button";

const Hero = () => {
    return (
        <section className="mt-4 border-b-[1px] border-gray-700">
            <h1 className="flex justify-end font-montserrat text-[15px] font-bold italic md:text-xl px-4 lg:px-12">
                Igniting a Revolution in HR Innovation
            </h1>
            <div className="w-full px-4 lg:px-12">
                <img
                    src={underlineDsg}
                    alt="underline design"
                    className="float-right w-28 md:w-32"
                />
            </div>

            <section className="mt-5 flex flex-col md:mt-8 md:flex-row md:items-center md:justify-between">
                <div className="text-center md:text-start px-4 lg:pl-16">
                    <h1 className="font-clashDisplay text-2xl lg:text-6xl md:text-4xl">
                        getlinked Tech <br /> Hackaction{" "}
                        <span className="text-[#d434fe]">1.0</span>
                    </h1>
                    <p className="py-2 font-montserrat text-xs md:pb-6 md:text-sm lg:w-[72%]">
                        Participate in getlinked tech Hackathon 2023 stand a
                        chance to win a Big price
                    </p>
                    <Button>Register</Button>
                    <div className="py-2 text-xl md:pt-14 md:text-3xl font-unica">
                        00<span className="font-montserrat text-[8px]">H</span>{" "}
                        00
                        <span className="font-montserrat text-[8px]">M</span> 00
                        <span className="font-montserrat text-[8px]">S</span>
                    </div>
                </div>

                <figure>
                    <img
                        src={heroImg}
                        alt="man wearing smart glasses touching virtual screen"
                        className="lg:h-[600px] "
                    />
                </figure>
            </section>
        </section>
    );
};

export default Hero;
