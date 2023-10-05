import rulesImg from "../assets/7450159 1.png";

/* eslint-disable react/no-unescaped-entities */

const Rules = () => {
    return (
        <section className="border-b-[1px] border-gray-700 px-4 lg:px-16 ">
            <div className="flex flex-col-reverse items-center md:flex-row md:justify-between lg:w-[80%] lg:mx-auto">
                <div className="text-center md:w-[55%] md:text-start">
                    <h1 className="font-clashDisplay text-xl lg:text-2xl">
                        Rules and <br />{" "}
                        <span className="text-[#d434fe]">Guidelines</span>
                    </h1>
                    <p className="pb-8 pt-2 font-montserrat text-xs lg:text-sm leading-6">
                        Our tech hackathon is a melting point of visionaries,
                        and its purpose is as clear as day: to shape the future.
                        Whether you are a coding genuis a design maverick, or a
                        concept wizard, you'll have the chance to transform your
                        ideas into reality. Solving real world problems pushing
                        the boundries of technology and creating solutions that
                        can change the world. thats what we are all about!
                    </p>
                </div>
                <figure>
                    <img src={rulesImg} alt="rules and guidelines" />
                </figure>
            </div>
        </section>
    );
};

export default Rules;
