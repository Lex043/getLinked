import rulesImg from "../assets/rulesImg.png";
import plainStar from "../assets/star.png";
import purpleTop from "../assets/Purple-Lens-Flare-top.png";
import purpleRight from "../assets/Purple-Lens-Flare-right.png";
import purpleBlurCenter from "../assets/Purple-Lens-Flare-center.png";
import purpleSmRight from "../assets/Purple-Lens-Flare-sm-right.png";

/* eslint-disable react/no-unescaped-entities */

const Rules = () => {
    return (
        <section className="border-b-[1px] border-gray-700 px-4 lg:px-20 relative">
            <div className="flex flex-col-reverse items-center lg:flex-row lg:gap-[3rem] relative z-30">
                <div className="text-center lg:w-[50%] lg:text-start relative">
                    <h1 className="font-clashDisplay text-xl lg:text-3xl">
                        Rules and <br />{" "}
                        <span className="text-[#d434fe]">Guidelines</span>
                    </h1>

                    <div className="absolute left-60 md:left-[34rem] lg:left-60 top-9 lg:-top-4">
                        <img
                            src={plainStar}
                            alt="a plan star"
                            className="w-3 md:w-4 animate-blink"
                        />
                    </div>
                    <p className="pb-8 pt-2 lg:pt-4 font-montserrat text-xs lg:text-sm leading-6 lg:leading-7">
                        Our tech hackathon is a melting point of visionaries,
                        and its purpose is as clear as day: to shape the future.
                        Whether you are a coding genuis a design maverick, or a
                        concept wizard, you'll have the chance to transform your
                        ideas into reality. Solving real world problems pushing
                        the boundries of technology and creating solutions that
                        can change the world. thats what we are all about!
                    </p>
                </div>
                <figure className="relative">
                    <img
                        src={rulesImg}
                        alt="rules and guidelines"
                        className="lg:h-[606px] lg:w-[650px] object-cover"
                    />

                    <div className="absolute bottom-40 md:bottom-72 lg:bottom-40">
                        <img
                            src={plainStar}
                            alt="a plan star"
                            className="w-3 md:w-4 animate-blink"
                        />
                    </div>
                </figure>
            </div>

            <span className="absolute lg:hidden -top-20 left-0 mix-blend-hard-light">
                <img src={purpleTop} alt="purple blur" />
            </span>

            {/* Desktop mode */}
            <span className="absolute hidden lg:block -bottom-14 left-0 mix-blend-hard-light">
                <img src={purpleBlurCenter} alt="purple blur" />
            </span>

            <span className="absolute lg:hidden bottom-10 right-0 mix-blend-hard-light">
                <img src={purpleRight} alt="purple blur" />
            </span>

            <span className="absolute hidden lg:block top-20 right-0 mix-blend-hard-light">
                <img src={purpleSmRight} alt="purple blur" />
            </span>
        </section>
    );
};

export default Rules;
