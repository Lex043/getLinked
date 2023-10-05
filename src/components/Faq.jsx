import faqImg from "../assets/cwok_casual_21 1.png";
import plus from "../assets/+.png";

const Faq = () => {
    return (
        <section className="mt-4 border-b-[1px] border-gray-700 px-4 lg:px-12 pb-10 md:flex md:justify-between">
            <div className="flex flex-col items-center md:w-[40%] md:items-start">
                <div className="text-center md:text-start">
                    <h1 className="font-clashDisplay text-xl font-bold">
                        Frequently Answer <br />{" "}
                        <span className="text-[#d434fe]">Question</span>
                    </h1>
                    <p className="pt-2 font-montserrat text-xs leading-5">
                        We got answers to the questions that you might want to
                        ask about <strong>getlinked Hackathon 1.0</strong>
                    </p>
                </div>

                <div className="mt-3">
                    <div className="flex items-end gap-7 border-b-[1px] border-[#d434fe] py-3">
                        <p className="text-xs">
                            Can I work on a project I started before the
                            hackathon?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                        <p className="text-xs">
                            What happens if i need help during the hackathon?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                        <p className="text-xs">
                            What happens if i don&apos;t have an idea for a
                            project?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                        <p className="text-xs">
                            Can I join a team or do I have to come with one?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                        <p className="text-xs">
                            What happens after the hackathon ends.
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>

                    <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                        <p className="text-xs">
                            Can I work on a project I started before the
                            hackathon?
                        </p>
                        <img src={plus} alt="plus sign" />
                    </div>
                </div>
            </div>

            <figure className="flex items-center justify-center">
                <img src={faqImg} alt="frequently ask question img " />
            </figure>
        </section>
    );
};

export default Faq;
