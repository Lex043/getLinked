import Navbar from "../components/Navbar";
import regImg from "../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";
import line from "../assets/Line 9.png";
import femaleEmoji from "../assets/1f6b6-2640.png";
import maleEmoji from "../assets/image_processing20200511-10310-13mnlsx.png";

const Register = () => {
    return (
        <section>
            <div className="hidden lg:block">
                <Navbar />
            </div>

            <section className="px-4 pt-8 lg:flex lg:items-center lg:gap-4 lg:pt-6">
                <section className="lg:w-2/5">
                    <h1 className="font-clashDisplay text-xl text-[#d434fe] lg:hidden">
                        Register
                    </h1>
                    <figure>
                        <img src={regImg} alt="" />
                    </figure>
                </section>

                <section className="lg:w-[48%]  lg:rounded-xl lg:bg-[#1C152E] lg:px-12 lg:py-10 lg:shadow-xl">
                    <header className="font-montserrat text-center lg:text-start">
                        <h1 className="font-clashDisplay text-2xl text-[#d434fe] hidden lg:block lg:pb-10">
                            Register
                        </h1>
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

                    <form className="mt-6 flex flex-col gap-6 justify-center font-montserrat text-sm">
                        <section className="flex flex-col lg:flex-row gap-6">
                            <div className="flex flex-col gap-2 lg:w-1/2">
                                <label htmlFor="">Team&apos;s Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter the name of your group"
                                    className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                                />
                            </div>

                            <div className="flex flex-col gap-2 lg:w-1/2">
                                <label htmlFor="">Phone</label>
                                <input
                                    type="number"
                                    placeholder="Enter your phone number"
                                    className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                                />
                            </div>
                        </section>

                        <section className="flex flex-col lg:flex-row gap-6">
                            <div className="flex flex-col gap-2 lg:w-1/2">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                                />
                            </div>

                            <div className="flex flex-col gap-2 lg:w-1/2">
                                <label htmlFor="">Project Topic</label>
                                <input
                                    type="text"
                                    placeholder="What is your group project topic"
                                    className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2"
                                />
                            </div>
                        </section>

                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="">Category</label>
                                <select className="bg-transparent border-[1px] text-white outline-none rounded-md pl-2 py-2">
                                    <option>Select your category</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2 w-1/2">
                                <label htmlFor="">Group Size</label>
                                <select className="bg-transparent border-[1px] text-white outline-none rounded-md pl-4 py-2">
                                    <option>Select</option>
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

                        <button className="w-[120px] rounded-md bg-gradient-to-r from-[#d434fe] via-[#d434fe] to-[#903aff] py-3 font-montserrat text-sm text-white mx-auto lg:hidden">
                            Submit
                        </button>
                        <button className="w-full rounded-md bg-gradient-to-r from-[#d434fe] via-[#d434fe] to-[#903aff] py-3 font-montserrat text-sm text-white mx-auto hidden lg:block">
                            Register Now
                        </button>
                    </form>
                </section>
            </section>
        </section>
    );
};

export default Register;
