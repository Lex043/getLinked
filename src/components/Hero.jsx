import heroImg from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import underlineDsg from "../assets/Vector 4.png";

const Hero = () => {
    return (
        <section className="px-4 mt-4 border-b-[1px] border-white">
            <h1 className="font-montserrat font-bold italic text-[15px] md:text-xl flex justify-end">
                Igniting a Revolution in HR Innovation
            </h1>
            <div className="m-w-full">
                <img
                    src={underlineDsg}
                    alt="underline design"
                    className="w-28 float-right md:w-32"
                />
            </div>

            <section className="mt-5 md:mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="text-center md:text-start">
                    <h1 className="font-clashDisplay font-bold text-2xl md:text-4xl">
                        getlinked Tech <br /> Hackaction{" "}
                        <span className="text-[#d434fe]">1.0</span>
                    </h1>
                    <p className="text-xs font-montserrat py-2 md:pb-6 md:text-sm">
                        Participate in getlinked tech Hackathon 2023 stand a
                        chance to win a Big price
                    </p>
                    <button className="w-[90px] bg-[#d434fe] text-white text-xs py-2 rounded-sm font-montserrat">
                        Register
                    </button>
                    <div className="py-2 md:pt-14 text-xl md:text-3xl">
                        00<span className="text-[8px] font-montserrat">H</span>{" "}
                        00
                        <span className="text-[8px] font-montserrat">M</span> 00
                        <span className="text-[8px] font-montserrat">S</span>
                    </div>
                </div>

                <figure>
                    <img
                        src={heroImg}
                        alt="man wearing smart glasses touching virtual screen"
                    />
                </figure>
            </section>
        </section>
    );
};

export default Hero;
