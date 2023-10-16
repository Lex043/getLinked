import { useEffect } from "react";
import { Link } from "react-router-dom";
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
            <section className="flex items-center justify-between px-4 lg:px-16 py-3 md:py-4">
                <Link to="/" className="font-clashDisplay text-2xl lg:text-3xl">
                    <span>get</span>
                    <span className="text-[#d434fe]">linked</span>
                </Link>

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
                        <Link to="/contact">Contact</Link>

                        <Link to="/register" className="ml-10">
                            <Button>Register</Button>
                        </Link>
                    </nav>
                </div>
            </section>

            <section
                id="mobile-menu"
                className="text-x absolute top-0 hidden w-full origin-top animate-open-menu flex-col bg-[#150e28] z-50"
            >
                <button className="self-end px-4 text-4xl">&times;</button>
                <nav className="flex min-h-screen flex-col pl-4 md:block">
                    <a href="#" className="w-full py-2 text-start">
                        Timeline
                    </a>
                    <a href="#" className="w-full py-2 text-start">
                        Overview
                    </a>
                    <a href="#" className="w-full py-2 text-start">
                        FAQs
                    </a>

                    <Link to="/contact" className="w-full py-2 text-start">
                        Contact
                    </Link>

                    <Link
                        to="/register"
                        className="w-28 rounded-sm mt-2  bg-gradient-to-r from-[#FF26B9] via-[#d434fe] to-[#903aff] py-2 text-white text-center"
                    >
                        Register
                    </Link>
                </nav>
            </section>
        </section>
    );
};

export default Navbar;
