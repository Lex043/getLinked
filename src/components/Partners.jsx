import partnersLogo from "../assets/Partner and Sponsors.png";
import star from "../assets/sata gra.png";
import plainStar from "../assets/star.png";
import purpleTop from "../assets/Purple-Lens-Flare-top.png";
import purpleSmRight from "../assets/Purple-Lens-Flare-sm-right.png";
import purpleRightBg from "../assets/Purple-Lens-Flare-bg-right.png";

const Partners = () => {
    return (
        <section className="mt-5 border-b-[1px] border-gray-700 pb-16 relative">
            <div className="px-4 lg:w-[90%] lg:mx-auto relative z-30">
                <div className="text-center md:mx-auto md:w-[50%] lg:w-[35%]">
                    <h1 className="font-clashDisplay text-xl md:text-2xl lg:text-4xl">
                        Partners and Sponsors
                    </h1>
                    <p className="pb-10 pt-2 font-montserrat text-xs md:text-sm leading-5">
                        Getlinked Hackathon 1.0 is honored to have the following
                        major companies as its partners and sponsors
                    </p>
                </div>
                <div className="hidden md:block md:pl-12 md:pb-1">
                    <img
                        src={star}
                        alt="star"
                        className="w-3 md:w-4 animate-blink"
                    />
                </div>

                <div className="absolute left-8 md:left-[28rem] lg:left-[45rem] md:top-[13rem]">
                    <img
                        src={star}
                        alt="star"
                        className="w-3 md:w-4 animate-blink"
                    />
                </div>

                <figure className=" flex items-center justify-center rounded-md border-[1px] border-[#d434fe] p-8 md:p-16">
                    <img
                        src={partnersLogo}
                        alt="partner and sponsors logo"
                        className="max-w-full"
                    />
                </figure>
                <div className="absolute right-14 bottom-2 md:right-[20rem] md:bottom-9">
                    <img
                        src={plainStar}
                        alt="a plain star"
                        className="w-3 md:w-4 animate-blink"
                    />
                </div>
            </div>

            <span className="absolute -top-20 lg:-top-52 left-0 mix-blend-hard-light">
                <img src={purpleTop} alt="purple blur" />
            </span>

            <span className="absolute lg:block -top-8 right-0 mix-blend-hard-light">
                <img src={purpleSmRight} alt="purple blur" />
            </span>

            <span className="absolute hidden lg:block top-24 right-0 mix-blend-hard-light">
                <img src={purpleRightBg} alt="purple blur" />
            </span>
        </section>
    );
};

export default Partners;
