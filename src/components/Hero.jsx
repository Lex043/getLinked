import heroImg from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import heroDsgn from "../assets/Image 1.png";
import underlineDsg from "../assets/Vector 4.png";
import lightSpark from "../assets/1f4a5.png";
import chain from "../assets/chain-9365116-7621444.png";
import bulb from "../assets/Creative 1.png";

import Button from "./Button";

const Hero = () => {
    return (
        <section className="pt-4 border-t-[1px]  border-b-[1px] border-gray-700">
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

            <section className="mt-16 flex gap-10 md:gap-0 flex-col md:mt-8 md:flex-row md:items-center md:justify-between">
                <div className="text-center md:text-start px-4 lg:pl-20">
                    <div className="flex items-end justify-center md:justify-start relative">
                        <h1 className="font-clashDisplay text-2xl lg:text-6xl md:text-4xl relative">
                            getlinked Tech <br /> Hackaction{" "}
                            <span className="text-[#d434fe]">1.0</span>
                            <img
                                src={bulb}
                                alt="bulb"
                                className="w-5 md:w-8 lg:w-14 absolute right-[10px] md:right-[8px] lg:right-[14px] top-[-20px] md:top-[-40px] lg:top-[-60px]"
                            />
                        </h1>
                        <figure className="flex items-center w-7 md:w-8 lg:w-14">
                            <img src={chain} alt="chain" />
                            <img src={lightSpark} alt="light spark" />
                        </figure>
                    </div>
                    <p className="py-2 font-montserrat text-xs md:pb-6 md:text-sm lg:w-[72%]">
                        Participate in getlinked tech Hackathon 2023 stand a
                        chance to win a Big price
                    </p>

                    <Button>Register</Button>
                    <div className="py-2 text-xl md:pt-14 md:text-3xl lg:text-5xl font-unica">
                        00<span className="font-montserrat text-[8px]">H</span>{" "}
                        00
                        <span className="font-montserrat text-[8px]">M</span> 00
                        <span className="font-montserrat text-[8px]">S</span>
                    </div>
                </div>

                <figure className="relative">
                    <img
                        src={heroDsgn}
                        alt="hero design"
                        className="absolute bottom-2 md:h-[370px] lg:h-[600px] opacity-70"
                    />
                    <img
                        src={heroImg}
                        alt="man wearing smart glasses touching virtual screen"
                        className="lg:h-[600px]"
                    />
                </figure>
            </section>
        </section>
    );
};

export default Hero;
