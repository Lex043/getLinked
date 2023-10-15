import instagram from "../assets/mdi_instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/ri_linkedin-fill.png";
import dialerIcon from "../assets/dialerIcon.png";
import locationIcon from "../assets/locationIcon (1).png";
import star from "../assets/star pu.png";

const Footer = () => {
    return (
        <section className="px-4 lg:px-[10rem] bg-[#110B21] py-10">
            <div className="lg:flex lg:justify-between">
                <div className="md:w-[50%]">
                    <div>
                        <h1 className="font-clashDisplay text-xl lg:text-3xl font-bold">
                            get<span className="text-[#d434fe]">linked</span>
                        </h1>
                        <p className="py-2 font-montserrat text-xs lg:text-sm leading-5">
                            Getlinked Tech Hackathon is a technology innovation
                            program established by a group of organisations with
                            the aim of showcasing young and talented individuals
                            in the field
                        </p>
                    </div>

                    <div className="text-xs md:mt-6">
                        <h1>Terms of Use | Privacy Policy</h1>
                    </div>
                </div>

                <div className="mt-4 lg:mt-0">
                    <ul className="font-montserrat">
                        <li className="text-sm lg:text-base font-semibold text-[#d434fe]">
                            Useful Links
                        </li>
                        <li className="py-1 text-sm md:py-2 md:text-xs">
                            Overview
                        </li>
                        <li className="py-1 text-sm md:py-2 md:text-xs">
                            Timeline
                        </li>
                        <li className="py-1 text-sm md:py-2 md:text-xs">
                            FAQs
                        </li>
                        <li className="py-1 text-sm md:py-2 md:text-xs">
                            Register
                        </li>
                        <div className="flex gap-3">
                            <li className="py-1 text-xs text-[#d434fe]">
                                Follow us
                            </li>
                            <figure className="flex items-center gap-3">
                                <img src={instagram} alt="instagram" />
                                <img src={twitter} alt="twitter" />
                                <img src={facebook} alt="facebook" />
                                <img src={linkedin} alt="linkedin" />
                            </figure>
                        </div>
                    </ul>
                </div>

                <div className="mt-4 lg:mt-0">
                    <ul className="font-montserrat">
                        <li className="text-sm lg:text-base font-semibold text-[#d434fe]">
                            Contact Us
                        </li>
                        <li className="py-1 md:py-2 text-xs flex gap-2 items-center">
                            {" "}
                            <span>
                                <img src={dialerIcon} alt="Dialer Icon" />
                            </span>
                            +234 6707653444
                        </li>
                        <li className="py-1 md:py-2 text-xs flex gap-2 items-start">
                            {" "}
                            <span>
                                <img src={locationIcon} alt="location icon" />
                            </span>
                            27, Alara Street <br /> Yaba 100012 <br /> Lagos
                            State
                        </li>
                    </ul>
                </div>
            </div>

            <img src={star} alt="star" className="w-4 animate-blink mx-auto" />

            <p className="pt-10 text-center font-montserrat text-xs lg:text-sm">
                All rights reserved. <span>&copy;</span> getLinked Ltd.
            </p>
        </section>
    );
};

export default Footer;
