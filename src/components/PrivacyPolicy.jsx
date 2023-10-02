import privacyImg from "../assets/08 1.png";
import shield from "../assets/Vector (2).png";
import listItem from "../assets/list terms.png";

const PrivacyPolicy = () => {
    return (
        <section className="px-4 mt-14 pb-48">
            <div>
                <header className="text-center">
                    <h1 className="font-clashDisplay text-xl font-bold">
                        Privacy Policy and <br />{" "}
                        <span className="text-[#d434fe]">Terms</span>
                    </h1>
                    <p className="font-montserrat text-xs py-2">
                        Last updated on september 12, 2023
                    </p>
                </header>

                <p className="font-montserrat text-xs py-2 text-center">
                    Below are our privacy & policy, which outline a lot of
                    goodies. it&apos s our aim to always take our participant
                </p>

                <div className="border-[1px] px-4 py-8 mt-6 border-[#d434fe]">
                    <p className="font-montserrat text-xs py-2 text-center leading-6">
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and we are committed to protecting your personal
                        information. This Privacy Policy outlines how we
                        collect, use, disclose, and safeguard your data when you
                        participate in our tech hackathon event. By
                        participating in our event, you consent to practices
                        described in this policy
                    </p>

                    <div>
                        <div className="font-montserrat font-bold">
                            <h1 className="text-[#d434fe] text-sm">
                                Licensing Policy
                            </h1>
                            <h3 className="text-xs py-2">
                                Here are terms of our Standard License:
                            </h3>
                        </div>

                        <div className="font-montserrat text-xs flex flex-col gap-4 mt-4">
                            <div className="flex items-start gap-4">
                                <img src={listItem} alt="list item" />
                                <p>
                                    The Standard License grants you a
                                    non-exlusive right to navigate and register
                                    for our event
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <img src={listItem} alt="list item" />
                                <p>
                                    You are licensed to use the item available
                                    at any free source sites, for your project
                                    development
                                </p>
                            </div>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            <figure className="mt-8 flex flex-col items-center justify-center relative">
                <img src={shield} alt="shield" />
                <img
                    src={privacyImg}
                    alt="an unlocked padlock"
                    className="absolute bottom-[-8rem] right-6"
                />
            </figure>
        </section>
    );
};

export default PrivacyPolicy;
