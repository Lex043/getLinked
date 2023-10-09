import criteriaImg from "../assets/Img3.webp";

const Criteria = () => {
    return (
        <section className="mt-5 border-b-[1px] border-gray-700 px-4 lg:px-12">
            <div className="flex flex-col items-center lg:flex-row md:gap-[4rem] md:py-12">
                <figure>
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

                    <button className="mx-auto lg:mx-0 w-[90px] lg:w-[100px] rounded-sm bg-gradient-to-r from-[#d434fe] via-[#d434fe] to-[#903aff] py-2 font-montserrat text-xs lg:text-sm text-white">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Criteria;
