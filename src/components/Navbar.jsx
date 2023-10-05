import { useEffect } from "react";
import Button from "./Button";
import menu from "../assets/menu.png";

const Navbar = () => {
    const toggleMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
    };

    useEffect(() => {
        const hamburgerBtn = document.getElementById("hamburger-button");
        const mobileMenu = document.getElementById("mobile-menu");

        hamburgerBtn.addEventListener("click", toggleMenu);
        mobileMenu.addEventListener("click", toggleMenu);

        return () => {
            hamburgerBtn.removeEventListener("click", toggleMenu);
            mobileMenu.removeEventListener("click", toggleMenu);
        };
    }, []);

    return (
        <section>
            <section className="flex items-center justify-between border-b-[1px] border-gray-700 px-4 lg:px-16 py-3 md:py-4">
                <div className="font-clashDisplay text-2xl lg:text-3xl">
                    <span>get</span>
                    <span className="text-[#d434fe]">linked</span>
                </div>

                <div>
                    <figure
                        id="hamburger-button"
                        className="cursor-pointer md:hidden"
                    >
                        <img src={menu} alt="hamburger" />
                    </figure>

                    <nav className="hidden font-montserrat text-xs lg:text-sm md:flex md:items-center md:gap-8">
                        <a href="#">Timeline</a>
                        <a href="#">Overview</a>
                        <a href="#">FAQs</a>
                        <a href="#">Contact</a>

                        <Button>Register</Button>
                    </nav>
                </div>
            </section>

            <section
                id="mobile-menu"
                className="text-x absolute top-0 hidden w-full origin-top animate-open-menu flex-col bg-[#150e28]"
            >
                <button className="self-end px-4 text-4xl">&times;</button>
                <nav className="flex min-h-screen flex-col pl-2 md:block">
                    <a href="#" className="w-full py-2 text-start">
                        Timeline
                    </a>
                    <a href="#" className="w-full py-2 text-start">
                        Overview
                    </a>
                    <a href="#" className="w-full py-2 text-start">
                        FAQs
                    </a>
                    <a href="#" className="w-full py-2 text-start">
                        Contact
                    </a>

                    <button className="w-[90px] rounded-sm bg-[#d434fe] py-1 text-white">
                        Register
                    </button>
                </nav>
            </section>
        </section>
    );
};

export default Navbar;
