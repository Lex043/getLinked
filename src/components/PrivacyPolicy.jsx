import privacyImg from "../assets/08 1.png";
import shield from "../assets/Vector (2).png";

const PrivacyPolicy = () => {
    return (
        <section>
            <div>
                <header>
                    <h1>
                        Privacy Policy and <span>Terms</span>
                    </h1>
                    <p>Last updated on september 12, 2023</p>
                </header>

                <p>
                    Below are our privacy & policy, which outline a lot of
                    goodies. it&apos s our aim to always take our participant
                </p>

                <div>
                    <p>
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and we are committed to protecting your personal
                        information. This Privacy Policy outlines how we
                        collect, use, disclose, and safeguard your data when you
                        participate in our tech hackathon event. By
                        participating in our event, you consent to practices
                        described in this policy
                    </p>

                    <div>
                        <h1>Licensing Policy</h1>
                        <h3>Here are terms of our Standard License:</h3>

                        <p>
                            <span></span> The Standard License grants you a
                            non-exlusive right to navigate and register for our
                            event
                        </p>

                        <p>
                            <span></span> You are licensed to use the item
                            available at any free source sites, for your project
                            development
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>

            <figure>
                <img src={shield} alt="shield" />
                <img src={privacyImg} alt="an unlocked padlock" />
            </figure>
        </section>
    );
};

export default PrivacyPolicy;
