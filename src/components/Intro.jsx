import bigIdea from "../assets/The big idea.png";
import arrow from "../assets/arrow.png";

/* eslint-disable react/no-unescaped-entities */
const Intro = () => {
    return (
        <section className="mt-4 border-b-[1px] border-gray-700 px-4 lg:px-16 md:py-14 lg:py-10">
            <div className=" flex flex-col items-center gap-6 md:flex-row md:justify-between lg:w-[80%] lg:mx-auto">
                <figure className="md:flex md:items-end md:gap-2">
                    <img src={bigIdea} alt="The big idea" />

                    <div className="mt-3 flex items-center justify-center">
                        <img src={arrow} alt="sprial arrow" />
                    </div>
                </figure>

                <div className="text-center md:w-[50%] md:text-start">
                    <h1 className="font-clashDisplay text-xl lg:text-2xl">
                        Introduction to getlinked <br />{" "}
                        <span className="text-[#d434fe]">
                            tech Hackathon 1.0
                        </span>
                    </h1>
                    <p className="pb-10 pt-3 font-montserrat text-xs lg:text-sm leading-5 md:pb-0">
                        Our tech hackathon is a melting point of visionaries,
                        and its purpose is as clear as day: to shape the future.
                        Whether you are a coding genuis a design maverick, or a
                        concept wizard, you'll have the chance to transform your
                        ideas into reality. Solving real world problems pushing
                        the boundries of technology and creating solutions that
                        can change the world. thats what we are all about!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Intro;
