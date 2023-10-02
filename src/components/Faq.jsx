import faqImg from "../assets/cwok_casual_21 1.png";
import plus from "../assets/+.png";

const Faq = () => {
    return (
        <section className="border-b-[1px] border-white mt-4 pb-10">
            <div className="flex flex-col items-center px-4">
                <div className="text-center">
                    <h1 className="text-xl font-bold font-clashDisplay">
                        Frequently Answer <br />{" "}
                        <span className="text-[#d434fe]">Question</span>
                    </h1>
                    <p className="pt-2 text-xs font-montserrat leading-5">
                        We got answers to the questions that you might want to
                        ask about <strong>getlinked Hackathon 1.0</strong>
                    </p>
                </div>

                <div className="mt-3">
                    <div className="border-b-[1px] border-[#d434fe] py-3 flex items-end justify-between">
                        <p className="text-xs">
                            Can I work on a project I started before the
                            hackathon?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="border-b-[1px] border-[#d434fe] py-3 flex justify-between items-end">
                        <p className="text-xs">
                            What happens if i need help during the hackathon?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="border-b-[1px] border-[#d434fe] py-3 flex items-end justify-between">
                        <p className="text-xs">
                            What happens if i don&apos;t have an idea for a
                            project?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="border-b-[1px] border-[#d434fe] py-3 flex items-end justify-between">
                        <p className="text-xs">
                            Can I join a team or do I have to come with one?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="border-b-[1px] border-[#d434fe] py-3 flex items-end justify-between">
                        <p className="text-xs">
                            What happens after the hackathon ends.
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="border-b-[1px] border-[#d434fe] py-3 flex items-end justify-between">
                        <p className="text-xs">
                            Can I work on a project I started before the
                            hackathon?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>
                </div>
            </div>

            <figure>
                <img src={faqImg} alt="frequently ask question img" />
            </figure>
        </section>
    );
};

export default Faq;
