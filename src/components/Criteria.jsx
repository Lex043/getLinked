import criteriaImg from "../assets/8046554 1.png";

const Criteria = () => {
    return (
        <section className="mt-5 border-b-[1px] border-white flex flex-col items-center">
            <figure>
                <img src={criteriaImg} alt="criteria img" />
            </figure>
            <div className="text-center flex flex-col gap-4 px-4 pb-10">
                <h1 className="text-xl font-clashDisplay font-bold">
                    Judging Criteria <br />{" "}
                    <span className="text-[#d434fe]">Key attributes</span>
                </h1>

                <article className="font-montserrat text-xs leading-5">
                    <span className="text-[#d434fe]">
                        Innovation and Creativity:
                    </span>{" "}
                    Evaluate the uniqueness and creativity of the solution
                    consider whether it addresses a real-world problem in a
                    novel way or introduces innovative features
                </article>
                <article className="font-montserrat text-xs leading-5">
                    <span className="text-[#d434fe]">Functionality:</span>{" "}
                    Assess how well the solution works. Does it perform its
                    intended functions effectively and without major issues?
                    Judges would consider the completeness and robustness of the
                    solution.
                </article>
                <article className="font-montserrat text-xs leading-5">
                    <span className="text-[#d434fe]">
                        Impact and Relevance:
                    </span>{" "}
                    Determine the potential impact of the solution in the real
                    world. Does it address a significant problem, and is it
                    relevant to the target audience? Judges would assess
                    political socio economic or environmental benefits
                </article>
                <article className="font-montserrat text-xs leading-5">
                    <span className="text-[#d434fe]">
                        Technical Complexity:
                    </span>{" "}
                    Evaluate the technical sophistication of the solution.
                    Judges would consider the complexity of the code, the use of
                    advanced technologies or algorithms, and scalability of the
                    solution
                </article>
                <article className="font-montserrat text-xs leading-5">
                    <span className="text-[#d434fe]">
                        Adherence to Hackthon Rules:
                    </span>{" "}
                    Judges will Ensure that the team adhered to the rules and
                    guidelines of the hackathon, including deadlines, use of
                    specific technologies or APIs, and any other
                    competition-specific requirements
                </article>

                <button className="w-[90px] bg-[#d434fe] text-white py-1 rounded-sm mx-auto">
                    Read More
                </button>
            </div>
        </section>
    );
};

export default Criteria;
