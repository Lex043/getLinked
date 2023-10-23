import criteriaImg from "../assets/Img3.webp";
import star from "../assets/star pu.png";
import plainStar from "../assets/star.png";
import purpleTop from "../assets/Purple-Lens-Flare-top.png";
import purpleRight from "../assets/Purple-Lens-Flare-right.png";
import purpleRightBg from "../assets/Purple-Lens-Flare-bg-right.png";

const Criteria = () => {
    return (
        <section className="mt-5 border-b-[1px] border-gray-700 px-4 lg:px-12 relative">
            <div className="absolute left-2/4 lg:left-48 lg:top-10">
                <img
                    src={star}
                    alt="star"
                    className="w-4 lg:w-6 animate-blink"
                />
            </div>

            <div className="absolute left-[55%] top-[10rem] md:top-1/3 lg:left-[31%] lg:top-2/4">
                <img
                    src={plainStar}
                    alt="a plain star"
                    className="w-4 lg:w-6 animate-blink"
                />
            </div>
            <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-[4rem] md:py-12 relative z-30">
                <figure className="mt-5">
                    <img
                        src={criteriaImg}
                        alt="criteria img"
                        className="max-w-full"
                    />
                </figure>
                <div className="flex flex-col gap-4 pb-10 text-center lg:w-[70%] md:gap-7 md:pb-0 lg:text-start">
                    <h1 className="font-clashDisplay text-3xl">
                        Judging Criteria <br />{" "}
                        <span className="text-[#d434fe]">Key attributes</span>
                    </h1>

                    <article className="font-montserrat text-xs lg:text-sm leading-5">
                        <span className="text-[#FF26B9] font-bold">
                            Innovation and Creativity:
                        </span>{" "}
                        Evaluate the uniqueness and creativity of the solution
                        consider whether it addresses a real-world problem in a
                        novel way or introduces innovative features
                    </article>
                    <article className="font-montserrat text-xs lg:text-sm leading-5">
                        <span className="text-[#FF26B9] font-bold">
                            Functionality:
                        </span>{" "}
                        Assess how well the solution works. Does it perform its
                        intended functions effectively and without major issues?
                        Judges would consider the completeness and robustness of
                        the solution.
                    </article>
                    <article className="font-montserrat text-xs lg:text-sm leading-5">
                        <span className="text-[#FF26B9] font-bold">
                            Impact and Relevance:
                        </span>{" "}
                        Determine the potential impact of the solution in the
                        real world. Does it address a significant problem, and
                        is it relevant to the target audience? Judges would
                        assess political socio economic or environmental
                        benefits
                    </article>
                    <article className="font-montserrat text-xs lg:text-sm leading-5">
                        <span className="text-[#FF26B9] font-bold">
                            Technical Complexity:
                        </span>{" "}
                        Evaluate the technical sophistication of the solution.
                        Judges would consider the complexity of the code, the
                        use of advanced technologies or algorithms, and
                        scalability of the solution
                    </article>
                    <article className="font-montserrat text-xs lg:text-sm leading-5">
                        <span className="text-[#FF26B9] font-bold">
                            Adherence to Hackthon Rules:
                        </span>{" "}
                        Judges will Ensure that the team adhered to the rules
                        and guidelines of the hackathon, including deadlines,
                        use of specific technologies or APIs, and any other
                        competition-specific requirements
                    </article>

                    <div className="relative">
                        <button className="mx-auto lg:mx-0 w-[90px] lg:w-[100px] rounded-sm bg-gradient-to-r from-[#FF26B9] via-[#d434fe] to-[#903aff] py-2 font-montserrat text-xs lg:text-sm text-white">
                            Read More
                        </button>

                        <div className="absolute -top-2 left-[16rem] md:left-[32rem]  lg:-left-14">
                            <img
                                src={plainStar}
                                alt="a plain star"
                                className="w-2 lg:w-4 animate-blink"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <span className="absolute top-10 lg left-0 mix-blend-hard-light">
                <img src={purpleTop} alt="purple blur" />
            </span>

            <span className="absolute lg:hidden -bottom-10 right-0 mix-blend-hard-light">
                <img src={purpleRight} alt="purple blur" />
            </span>

            {/* Desktop mode */}
            <span className="absolute hidden lg:block top-24 right-0 mix-blend-hard-light">
                <img src={purpleRightBg} alt="purple blur" />
            </span>
        </section>
    );
};

export default Criteria;
