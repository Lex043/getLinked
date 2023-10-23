import heroImg from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import heroDsgn from "../assets/Image 1.png";
import underlineDsg from "../assets/Vector 4.png";
import lightSpark from "../assets/1f4a5.png";
import chain from "../assets/chain-9365116-7621444.png";
import bulb from "../assets/Creative 1.png";
import plainStar from "../assets/star.png";
import purpleBlur1 from "../assets/Purple-Lens-Flare-top.png";
import purpleBlurCenter from "../assets/Purple-Lens-Flare-center.png";

import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="pt-4 border-t-[1px]  border-b-[1px] border-gray-700 relative">
            <h1 className="flex justify-end font-montserrat text-[15px] font-bold italic md:text-xl px-4 lg:px-10">
                Igniting a Revolution in HR Innovation
            </h1>
            <div className="w-full px-4 lg:px-12">
                <img
                    src={underlineDsg}
                    alt="underline design"
                    className="float-right w-28 md:w-32"
                />
            </div>

            <div className="absolute top-12 left-20">
                <img
                    src={plainStar}
                    alt="A Plain Star"
                    className="w-2 md:w-4 animate-blink"
                />
            </div>

            <div className="absolute top-16 right-10 md:left-[22rem] md:top-20 lg:left-[45%]">
                <img
                    src={plainStar}
                    alt="A Plain Star"
                    className="w-2 md:w-4 animate-blink"
                />
            </div>

            <section className="mt-10 flex gap-10 md:gap-0 flex-col md:mt-8 md:flex-row md:items-center md:justify-between">
                <div className="text-center md:text-start px-4 lg:pl-20 relative z-30">
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
                    <p className="py-4 font-montserrat text-xs md:pb-6 md:text-sm lg:w-[72%]">
                        Participate in getlinked tech Hackathon 2023 stand a
                        chance to win a Big price
                    </p>

                    <div className="relative">
                        <Link
                            to="/register"
                            className="px-10 lg:w-[100px] rounded-[4px] bg-gradient-to-r from-[#FF26B9] via-[#d434fe] to-[#903aff]
                         py-3 font-montserrat text-xs text-white relative z-30"
                        >
                            Register
                        </Link>
                        <div className="absolute top-3 left-[16rem] md:top-14 ">
                            <img
                                src={plainStar}
                                alt="a plain star"
                                className="w-2 md:w-4 animate-blink"
                            />
                        </div>
                    </div>
                    <div className="py-4 text-xl md:pt-14 md:text-3xl lg:text-5xl font-unica">
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
            <span className="lg:hidden absolute mix-blend-hard-light left-0 top-2">
                <img src={purpleBlur1} alt="purple blur" />
            </span>
            <span className="absolute hidden lg:block mix-blend-hard-light bottom-32 left-14">
                <img src={purpleBlurCenter} alt="purple blur" />
            </span>
        </section>
    );
};

export default Hero;
