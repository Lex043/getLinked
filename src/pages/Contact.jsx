import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import back from "../assets/back.png";
import instagram from "../assets/mdi_instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/ri_linkedin-fill.png";

const Contact = () => {
    return (
        <section className="px-4 md:px-10 pt-10 lg:pt-0 pb-6">
            <div className="hidden lg:block">
                <Navbar />
            </div>
            <Link to="/" className="lg:hidden">
                <img src={back} alt="back icon" />
            </Link>

            <section className="lg:flex lg:gap-32 lg:w-[70%] lg:mx-auto lg:mt-20">
                <div className="hidden lg:block lg:mt-12">
                    <h1 className="font-clashDisplay text-xl text-[#d434fe]">
                        Get in touch
                    </h1>

                    <div className="text-sm font-montserrat flex flex-col gap-5 mt-6">
                        <p>
                            Contact <br /> Information
                        </p>
                        <p>
                            27, Alara Street <br /> Yaba 100012 <br /> Lagos
                            State
                        </p>
                        <p>Call Us: 07067901019</p>
                        <p>
                            We are open from Monday-Friday <br /> 08:00am -
                            05:00pm
                        </p>
                    </div>

                    <div className="mt-6 lg:flex flex-col gap-3 items-start hidden">
                        <h1 className="text-[#d434fe] text-sm">Share on</h1>
                        <figure className="flex items-center gap-3">
                            <img
                                src={instagram}
                                alt="instagram"
                                className="w-5 h-5"
                            />
                            <img src={twitter} alt="twitter" />
                            <img src={facebook} alt="facebook" />
                            <img src={linkedin} alt="linkedin" />
                        </figure>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0">
                    <div className=" lg:rounded-xl lg:bg-[#1C152E] lg:px-20 lg:py-10 lg:shadow-xl">
                        <header>
                            <h1 className="text-[#d434fe] font-clashDisplay text-xl ">
                                Questions or need assistance? <br /> Let us know
                                about it
                            </h1>
                            <p className="font-montserrat text-xs pt-5 lg:hidden">
                                Email us below to any questions related to our
                                event.
                            </p>
                        </header>
                        <form className="mt-6 flex flex-col gap-6 justify-center">
                            <input
                                type="text"
                                placeholder="Team's Name"
                                className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2 lg:hidden"
                            />

                            <input
                                type="text"
                                placeholder="First Name"
                                className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2 hidden lg:block"
                            />

                            <input
                                type="text"
                                placeholder="Topic"
                                className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2 lg:hidden"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2 lg:hidden"
                            />

                            <input
                                type="email"
                                placeholder="Mail"
                                className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2 hidden lg:block"
                            />
                            <textarea
                                name=""
                                id=""
                                cols="20"
                                rows="10"
                                placeholder="Message"
                                className="resize-none h-28 bg-transparent border-[1px] text-white outline-none rounded-md pl-4 pt-2"
                            ></textarea>
                            <button className="w-[120px] rounded-md bg-gradient-to-r from-[#d434fe] via-[#d434fe] to-[#903aff] py-3 font-montserrat text-sm text-white mx-auto">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <div className="mt-6 flex flex-col gap-3 items-center lg:hidden">
                <h1 className="text-[#d434fe] text-sm">Share on</h1>
                <figure className="flex items-center gap-3">
                    <img src={instagram} alt="instagram" className="w-5 h-5" />
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                    <img src={linkedin} alt="linkedin" />
                </figure>
            </div>
        </section>
    );
};

export default Contact;
