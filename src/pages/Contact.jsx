import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import back from "../assets/back.png";
import instagram from "../assets/mdi_instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/ri_linkedin-fill.png";
import sata from "../assets/sata gra.png";
import plainStar from "../assets/star.png";

import purpleRightContact from "../assets/Purple-Lens-Flare-right-contact.png";
import purpleLeftContact from "../assets/Purple-Lens-Flare-left-contact.png";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const body = {
        email: email,
        phone_number: phoneNumber,
        first_name: firstName,
        message: message,
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://backend.getlinked.ai/hackathon/contact-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => {
                if (res.ok) {
                    toast.success("success!", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    setEmail("");
                    setFirstName("");
                    setPhoneNumber("");
                    setMessage("");
                } else {
                    toast.error("Failed. Check network.");
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <section className="px-8 pt-10 lg:pt-0 pb-6 relative">
            <div className="hidden lg:block">
                <Navbar />
            </div>
            <Link to="/" className="lg:hidden relative z-30">
                <img src={back} alt="back icon" />
            </Link>

            <section className="lg:flex lg:gap-32 lg:w-[70%] lg:mx-auto lg:mt-20 relative z-30">
                <div className="absolute left-[50%] lg:left-0 -top-10">
                    <img
                        src={sata}
                        alt="a purple star"
                        className="w-2 md:w-4 animate-blink"
                    />
                </div>
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
                <div className="absolute right-10 lg:-top-12 lg:right-20">
                    <img
                        src={plainStar}
                        alt="a purple star"
                        className="w-3 md:w-4 animate-blink"
                    />
                </div>
                <div className="mt-10 lg:mt-0 lg:w-[50%]">
                    <div className=" lg:rounded-xl lg:bg-[#1C152E] lg:px-10 lg:py-8 lg:shadow-xl">
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
                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 flex flex-col gap-6 justify-center relative"
                        >
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                            />

                            <input
                                type="number"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                            />

                            <textarea
                                name=""
                                id=""
                                cols="20"
                                rows="10"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="resize-none h-28 bg-transparent border-[1px] text-white outline-none rounded-md pl-4 pt-2"
                            ></textarea>
                            <div className="absolute -right-4 bottom-20 lg:-right-24 lg:-bottom-5">
                                <img
                                    src={plainStar}
                                    alt="a purple star"
                                    className="w-2 md:w-4 animate-blink"
                                />
                            </div>
                            <button className="w-[120px] rounded-md bg-gradient-to-r from-[#d434fe] via-[#d434fe] to-[#903aff] py-3 font-montserrat text-sm text-white mx-auto">
                                Submit
                            </button>
                            <ToastContainer />
                            <div className="absolute bottom-5 lg:-left-12 lg:bottom-16">
                                <img
                                    src={sata}
                                    alt="a purple star"
                                    className="w-2 md:w-4 animate-blink"
                                />
                            </div>
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

            <span className="absolute top-0 left-0 mix-blend-hard-light">
                <img src={purpleRightContact} alt="purple blur" />
            </span>

            <span className="absolute hidden lg:block -bottom-16 right-0 mix-blend-hard-light">
                <img src={purpleLeftContact} alt="purple blur" />
            </span>
        </section>
    );
};

export default Contact;
