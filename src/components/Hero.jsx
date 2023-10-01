import heroImg from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import underlineDsg from "../assets/Vector 4.png";

const Hero = () => {
    return (
        <section className="px-4 mt-4">
            <h1 className="font-montserrat font-bold italic text-[15px] flex justify-end">
                Igniting a Revolution in HR Innovation
            </h1>
            <div className="m-w-full">
                <img
                    src={underlineDsg}
                    alt="underline design"
                    className="w-28 float-right"
                />
            </div>

            <section className="mt-5">
                <div className="text-center">
                    <h1 className="font-clashDisplay font-bold text-2xl">
                        getlinked Tech <br /> Hackaction{" "}
                        <span className="text-[#d434fe]">1.0</span>
                    </h1>
                    <p className="text-xs font-montserrat py-2">
                        Participate in getlinked tech Hackathon 2023 stand a
                        chance to win a Big price
                    </p>
                    <button className="w-[90px] bg-[#d434fe] text-white text-xs py-2 rounded-sm font-montserrat">
                        Register
                    </button>
                    <div className="py-2 text-xl">
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
