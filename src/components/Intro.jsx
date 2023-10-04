import bigIdea from "../assets/The big idea.png";
import arrow from "../assets/arrow.png";

/* eslint-disable react/no-unescaped-entities */
const Intro = () => {
    return (
        <section className="mt-4 md:py-14 flex flex-col md:flex-row md:justify-between items-center gap-6 border-b-[1px] border-white px-4 md:px">
            <figure className="md:flex md:gap-2 md:items-end">
                <img src={bigIdea} alt="The big idea" />

                <div className="mt-3 flex items-center justify-center">
                    <img src={arrow} alt="sprial arrow" />
                </div>
            </figure>

            <div className="text-center md:text-start md:w-[50%]">
                <h1 className="font-bold font-clashDisplay text-xl">
                    Introduction to getlinked <br />{" "}
                    <span className="text-[#d434fe]">tech Hackathon 1.0</span>
                </h1>
                <p className="font-montserrat text-xs pt-3 pb-10 md:pb-0  leading-5">
                    Our tech hackathon is a melting point of visionaries, and
                    its purpose is as clear as day: to shape the future. Whether
                    you are a coding genuis a design maverick, or a concept
                    wizard, you'll have the chance to transform your ideas into
                    reality. Solving real world problems pushing the boundries
                    of technology and creating solutions that can change the
                    world. thats what we are all about!
                </p>
            </div>
        </section>
    );
};

export default Intro;
