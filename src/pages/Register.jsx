import useSWR from "swr";
import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import regImg from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import line from "../assets/Line 9.png";
import femaleEmoji from "../assets/1f6b6-2640.png";
import maleEmoji from "../assets/image_processing20200511-10310-13mnlsx.png";
import sata from "../assets/sata gra.png";
import plainStar from "../assets/star.png";

import purpleRightContact from "../assets/Purple-Lens-Flare-right-contact.png";
import purpleLeftContact from "../assets/Purple-Lens-Flare-left-contact.png";

// component
import Modal from "../components/Modal";

const Register = () => {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [teamName, setTeamName] = useState("");
    const [projectTopic, setProjectTopic] = useState("");
    const [category, setCategory] = useState("");
    const [groupSize, setGroupSize] = useState("");
    const [regError, setRegError] = useState("");

    //Modal
    const [modal, setModal] = useState(false);

    const body = {
        email: email,
        phone_number: phoneNumber,
        team_name: teamName,
        group_size: groupSize,
        project_topic: projectTopic,
        category: category,
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://backend.getlinked.ai/hackathon/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("something went wrong");
                } else {
                    setRegError("");
                    setModal(!modal);
                }
            })
            .catch((e) => {
                setRegError(e.message);
            });
    };

    // fetch category
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR(
        "https://backend.getlinked.ai/hackathon/categories-list",
        fetcher
    );

    return (
        <section>
            <div className="hidden lg:block">
                <Navbar />
            </div>

            <section className="px-6 py-8 lg:flex lg:items-center lg:gap-4 lg:pt-6 relative">
                <section className="lg:w-2/5 relative">
                    <Link
                        to="/"
                        className="font-clashDisplay text-xl text-[#d434fe] lg:hidden relative z-30"
                    >
                        Register
                    </Link>
                    <figure className="relative">
                        <img src={regImg} alt="" />

                        <div className="hidden lg:block absolute left-24 top-5">
                            <img
                                src={sata}
                                alt="a purple star"
                                className="w-3 animate-blink"
                            />
                        </div>

                        <div className="hidden lg:block absolute right-10 bottom-32">
                            <img
                                src={sata}
                                alt="a purple star"
                                className="w-2 md:w-4 animate-blink"
                            />
                        </div>

                        <div className="absolute left-24 bottom-0 hidden lg:block">
                            <img
                                src={plainStar}
                                alt="a plain star"
                                className="w-3 md:w-4 animate-blink"
                            />
                        </div>
                    </figure>

                    <div className="absolute right-0 top-36 lg:hidden">
                        <img
                            src={sata}
                            alt="a purple star"
                            className="w-3 md:w-4 animate-blink"
                        />
                    </div>
                </section>

                <section className="lg:w-[48%]  lg:rounded-xl lg:bg-[#1C152E] lg:px-12 lg:py-10 lg:shadow-xl">
                    <header className="font-montserrat text-center lg:text-start relative">
                        <h1 className="font-clashDisplay text-2xl text-[#d434fe] hidden lg:block lg:pb-10">
                            Register
                        </h1>
                        <div className="hidden lg:block lg:absolute lg:right-48 lg:-top-6">
                            <img
                                src={plainStar}
                                alt="a plain star"
                                className="w-3 md:w-4 animate-blink"
                            />
                        </div>
                        <div className="text-xs flex gap-2 justify-center lg:justify-start relative">
                            <span>Be part of this movement! </span>
                            <figure>
                                <img
                                    src={femaleEmoji}
                                    alt="female emoji"
                                    className="w-8 absolute bottom-1"
                                />
                                <img
                                    src={maleEmoji}
                                    alt="male Emoji"
                                    className="w-8 absolute bottom-1 ml-6"
                                />

                                <img
                                    src={line}
                                    alt="dotted line"
                                    className="w-16 md:w-20  absolute top-3"
                                />
                            </figure>
                        </div>
                        <h1 className="uppercase pt-2">create your account</h1>
                    </header>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-6 flex flex-col gap-6 justify-center font-montserrat text-sm"
                    >
                        <section className="flex flex-col lg:flex-row gap-6 relative">
                            <div className="absolute -left-4 top-6 lg:hidden">
                                <img
                                    src={plainStar}
                                    alt="a purple star"
                                    className="w-3 md:w-4 animate-blink"
                                />
                            </div>
                            <div className="flex flex-col gap-2 lg:w-1/2">
                                <label htmlFor="">Team&apos;s Name</label>
                                <input
                                    type="text"
                                    value={teamName}
                                    onChange={(e) =>
                                        setTeamName(e.target.value)
                                    }
                                    placeholder="Enter the name of your group"
                                    className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                                />
                            </div>

                            <div className="flex flex-col gap-2 lg:w-1/2">
                                <label>Phone</label>
                                <input
                                    type="number"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                    placeholder="Enter your phone number"
                                    className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                                />
                            </div>
                        </section>

                        <section className="flex flex-col lg:flex-row gap-6">
                            <div className="flex flex-col gap-2 lg:w-1/2">
                                <label>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                                />
                            </div>

                            <div className="flex flex-col gap-2 lg:w-1/2">
                                <label>Project Topic</label>
                                <input
                                    type="text"
                                    value={projectTopic}
                                    onChange={(e) =>
                                        setProjectTopic(e.target.value)
                                    }
                                    placeholder="What is your group project topic"
                                    className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                                />
                            </div>
                        </section>

                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2 w-3/5">
                                <label>Category</label>
                                <select
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    className="bg-[#1C152E] border-[1px] text-white text-xs outline-none rounded-md pl-2 py-2"
                                >
                                    <option>Select your category</option>
                                    {data &&
                                        data.map((category) => (
                                            <option key={category.id}>
                                                {category.id}
                                            </option>
                                        ))}
                                    {error && (
                                        <option>
                                            failed to fetch category
                                        </option>
                                    )}
                                </select>
                            </div>

                            <div className="flex flex-col gap-2 w-1/2 relative">
                                <label>Group Size</label>
                                <div className="absolute right-0 lg:hidden">
                                    <img
                                        src={sata}
                                        alt="a purple star"
                                        className="w-2 md:w-4 animate-blink"
                                    />
                                </div>
                                <select
                                    value={groupSize}
                                    onChange={(e) =>
                                        setGroupSize(e.target.value)
                                    }
                                    className="bg-[#1C152E] border-[1px] text-white text-xs outline-none rounded-md pl-4 py-2"
                                >
                                    <option>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>

                        <div className="font-montserrat">
                            <p className="text-[#d434fe] text-[10px] italic text-center">
                                Please review your registration details before
                                submitting
                            </p>

                            <p className="text-[12px] flex gap-2 items-center pt-2 justify-center">
                                <input type="checkbox" />
                                <span>
                                    I agreed with the events terms and
                                    conditions and privacy policy
                                </span>
                            </p>
                        </div>
                        <p className="text-red-600 6e0t-[10px] italic text-center">
                            {regError && regError}
                        </p>
                        <button className="w-[120px] rounded-md bg-gradient-to-r from-[#d434fe] via-[#d434fe] to-[#903aff] py-3 font-montserrat text-sm text-white mx-auto lg:hidden">
                            Submit
                        </button>
                        <button className="w-full rounded-md bg-gradient-to-r from-[#d434fe] via-[#d434fe] to-[#903aff] py-3 font-montserrat text-sm text-white mx-auto hidden lg:block">
                            Register Now
                        </button>
                    </form>
                </section>
                {modal && <Modal />}

                <span className="absolute top-0 left-0 mix-blend-hard-light">
                    <img
                        src={purpleRightContact}
                        alt="purple blur"
                        className="md:w-[50%] lg:w-[85%]"
                    />
                </span>

                <span className="absolute hidden lg:block -bottom-8 right-0 mix-blend-hard-light">
                    <img src={purpleLeftContact} alt="purple blur" />
                </span>
            </section>
        </section>
    );
};

export default Register;
