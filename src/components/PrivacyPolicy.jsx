import privacyImg from "../assets/08 1.png";
import shield from "../assets/Vector (2).png";
import listItem from "../assets/list terms.png";

import Button from "./Button";

const PrivacyPolicy = () => {
    return (
        <section className="mt-14 px-4 lg:pl-[9rem] pb-48">
            <div className="flex flex-col items-center lg:items-start gap-6 lg:flex-row lg:gap-[8rem]">
                <div className="md:w-[70%] lg:w-[40%]">
                    <header className="text-center md:text-start">
                        <h1 className="font-clashDisplay text-xl lg:text-2xl">
                            Privacy Policy and <br />{" "}
                            <span className="text-[#d434fe]">Terms</span>
                        </h1>
                        <p className="pt-5 font-montserrat text-xs lg:text-sm">
                            Last updated on september 12, 2023
                        </p>
                    </header>

                    <p className="pt-5 text-center font-montserrat text-xs lg:text-sm md:text-start">
                        Below are our privacy & policy, which outline a lot of
                        goodies. it&apos s our aim to always take our
                        participant
                    </p>

                    <div className="mt-12 lg:mt-12 border-[1px] border-[#d434fe] px-4 lg:px-14 py-8">
                        <p className="py-2 text-center font-montserrat text-xs lg:text-sm leading-6 lg:leading-7 md:text-start">
                            At getlinked tech Hackathon 1.0, we value your
                            privacy and we are committed to protecting your
                            personal information. This Privacy Policy outlines
                            how we collect, use, disclose, and safeguard your
                            data when you participate in our tech hackathon
                            event. By participating in our event, you consent to
                            practices described in this policy
                        </p>

                        <div>
                            <div className="font-montserrat font-bold">
                                <h1 className="text-sm lg:text-base text-[#d434fe]">
                                    Licensing Policy
                                </h1>
                                <h3 className="py-2 text-xs">
                                    Here are terms of our Standard License:
                                </h3>
                            </div>

                            <div className="mt-4 flex flex-col items-center gap-4 font-montserrat text-xs">
                                <div className="flex items-start gap-4">
                                    <img src={listItem} alt="list item" />
                                    <p>
                                        The Standard License grants you a
                                        non-exlusive right to navigate and
                                        register for our event
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <img src={listItem} alt="list item" />
                                    <p>
                                        You are licensed to use the item
                                        available at any free source sites, for
                                        your project development
                                    </p>
                                </div>

                                <Button>Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <figure className="relative mt-8 flex flex-col items-center justify-center">
                    <img src={shield} alt="shield" />
                    <img
                        src={privacyImg}
                        alt="an unlocked padlock"
                        className="absolute md:right-10 bottom-[-8rem] md:bottom-[-10rem]"
                    />
                </figure>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
