import rulesImg from "../assets/7450159 1.png";

/* eslint-disable react/no-unescaped-entities */

const Rules = () => {
    return (
        <section className="flex flex-col-reverse items-center border-b-[1px] border-white">
            <div className="px-4 text-center">
                <h1 className="font-clashDisplay font-bold text-xl">
                    Rules and <br />{" "}
                    <span className="text-[#d434fe]">Guidelines</span>
                </h1>
                <p className="font-montserrat text-xs pt-2 pb-8 leading-6">
                    Our tech hackathon is a melting point of visionaries, and
                    its purpose is as clear as day: to shape the future. Whether
                    you are a coding genuis a design maverick, or a concept
                    wizard, you'll have the chance to transform your ideas into
                    reality. Solving real world problems pushing the boundries
                    of technology and creating solutions that can change the
                    world. thats what we are all about!
                </p>
            </div>
            <figure>
                <img src={rulesImg} alt="rules and guidelines" />
            </figure>
        </section>
    );
};

export default Rules;
