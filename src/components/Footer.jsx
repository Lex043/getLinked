import instagram from "../assets/mdi_instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/ri_linkedin-fill.png";

const Footer = () => {
    return (
        <section className="px-4">
            <div className="md:flex md:justify-between">
                <div className="md:w-[50%]">
                    <div>
                        <h1 className="font-clashDisplay font-bold text-xl">
                            get<span className="text-[#d434fe]">linked</span>
                        </h1>
                        <p className="font-montserrat text-xs leading-5 py-2">
                            Getlinked Tech Hackathon is a technology innovation
                            program established by a group of organisations with
                            the aim of showcasing young and talented individuals
                            in the field
                        </p>
                    </div>

                    <div className="md:mt-6">
                        <h1>Terms of Use | Privacy Policy</h1>
                    </div>
                </div>

                <div className="mt-4 md:mt-0">
                    <ul className="font-montserrat">
                        <li className="text-[#d434fe] font-semibold text-sm">
                            Useful Links
                        </li>
                        <li className="text-sm py-1 md:py-2 md:text-xs">
                            Overview
                        </li>
                        <li className="text-sm py-1 md:py-2 md:text-xs">
                            Timeline
                        </li>
                        <li className="text-sm py-1 md:py-2 md:text-xs">
                            FAQs
                        </li>
                        <li className="text-sm py-1 md:py-2 md:text-xs">
                            Register
                        </li>
                        <div className="flex gap-3">
                            <li className="text-xs text-[#d434fe] py-1">
                                Follow us
                            </li>
                            <figure className="flex gap-3 items-center">
                                <img src={instagram} alt="instagram" />
                                <img src={twitter} alt="twitter" />
                                <img src={facebook} alt="facebook" />
                                <img src={linkedin} alt="linkedin" />
                            </figure>
                        </div>
                    </ul>
                </div>

                <div className="">
                    <ul className="font-montserrat">
                        <li className="text-[#d434fe] font-semibold text-sm">
                            Contact Us
                        </li>
                        <li className="text-xs py-1">+234 6707653444</li>
                        <li className="text-xs py-1">
                            27, Alara Street <br /> Yaba 100012 <br /> Lagos
                            State
                        </li>
                    </ul>
                </div>
            </div>

            <p className="font-montserrat text-xs text-center my-10">
                All rights reserved. getLinked Ltd.
            </p>
        </section>
    );
};

export default Footer;
