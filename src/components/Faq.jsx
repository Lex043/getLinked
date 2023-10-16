import faqImg from "../assets/faqImg.png";
import plus from "../assets/+.png";
import questionMark from "../assets/_ (2).png";
import star from "../assets/star pu.png";
import sata from "../assets/sata gra.png";
import plainStar from "../assets/star.png";

const Faq = () => {
    return (
        <section className="mt-5 border-b-[1px] border-gray-700 px-4 lg:px-12 pb-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[4rem] lg:justify-center">
                <div className="flex flex-col items-center md:justify-center lg:w-[40%] lg:items-start">
                    <div className="text-center lg:text-start relative">
                        <div className="lg:absolute lg:-left-8">
                            <img
                                src={star}
                                alt="star"
                                className="w-4 lg:w-6 animate-blink"
                            />
                        </div>
                        <h1 className="font-clashDisplay text-xl lg:text-3xl pt-5 lg:pt-10">
                            Frequently Ask <br />{" "}
                            <span className="text-[#d434fe]">Question</span>
                        </h1>
                        <p className="pt-4 font-montserrat text-xs md:text-sm leading-5">
                            We got answers to the questions that you might want
                            to ask about{" "}
                            <strong>getlinked Hackathon 1.0</strong>
                        </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-4">
                        <div className="flex items-end gap-7 border-b-[1px] border-[#d434fe] py-3">
                            <p className="text-xs md:text-sm">
                                Can I work on a project I started before the
                                hackathon?
                            </p>
                            <img src={plus} alt="plus sign" />
                        </div>

                        <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                            <p className="text-xs md:text-sm">
                                What happens if i need help during the
                                hackathon?
                            </p>
                            <img src={plus} alt="plus sign" />
                        </div>

                        <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                            <p className="text-xs md:text-sm">
                                What happens if i don&apos;t have an idea for a
                                project?
                            </p>
                            <img src={plus} alt="plus sign" />
                        </div>

                        <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                            <p className="text-xs md:text-sm">
                                Can I join a team or do I have to come with one?
                            </p>
                            <img src={plus} alt="plus sign" />
                        </div>

                        <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                            <p className="text-xs md:text-sm">
                                What happens after the hackathon ends.
                            </p>
                            <img src={plus} alt="plus sign" />
                        </div>

                        <div className="flex items-end justify-between border-b-[1px] border-[#d434fe] py-3">
                            <p className="text-xs md:text-sm">
                                Can I work on a project I started before the
                                hackathon?
                            </p>
                            <img src={plus} alt="plus sign" />
                        </div>
                    </div>
                </div>

                <figure className="flex flex-col items-center justify-center relative">
                    <div className="flex items-end gap-10 md:gap-14 mr-[4rem] md:mr-32 relative top-4 lg:top-0">
                        <img
                            src={questionMark}
                            alt="Question Mark"
                            className="w-5 lg:w-10 object-contain"
                        />
                        <img
                            src={questionMark}
                            alt="Question Mark"
                            className="w-10 lg:w-16"
                        />
                        <div className="absolute right-8 ">
                            <img
                                src={sata}
                                alt="a pink star"
                                className="w-3 animate-blink"
                            />
                        </div>
                        <img
                            src={questionMark}
                            alt="Question Mark"
                            className="w-5 lg:w-10 object-contain"
                        />
                    </div>
                    <img
                        src={faqImg}
                        alt="frequently ask question img"
                        className="lg:h-[406px] lg:w-[450px] object-cover"
                    />

                    <div className="absolute left-14 bottom-48 md:top-[10rem] md:left-52 lg:left-16 lg:top-[13rem]">
                        <img
                            src={sata}
                            alt="a pink star"
                            className="w-2 md:w-4 animate-blink"
                        />
                    </div>

                    <div className="absolute left-6 bottom-36 md:bottom-56 md:left-28 lg:left-6 lg:bottom-52">
                        <img
                            src={plainStar}
                            alt="a plain star"
                            className="w-2 md:w-4 animate-blink"
                        />
                    </div>
                    <div className="absolute -bottom-2 right-12 md:right-48 lg:right-16">
                        <img
                            src={plainStar}
                            alt="a plain star"
                            className="w-4 animate-blink"
                        />
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Faq;
