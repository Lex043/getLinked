import { useEffect } from "react";
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
            <section className="flex justify-between items-center border-b-[1px] border-b-white px-4 py-3">
                <div className="font-bold font-clashDisplay text-2xl">
                    <span>get</span>
                    <span className="text-[#d434fe]">linked</span>
                </div>

                <div>
                    <figure
                        id="hamburger-button"
                        className="md:hidden cursor-pointer"
                    >
                        <img src={menu} alt="hamburger" />
                    </figure>

                    <nav className="hidden md:block">
                        <a href="#">Timeline</a>
                        <a href="#">Overview</a>
                        <a href="#">FAQs</a>
                        <a href="#">Contact</a>

                        <button>Register</button>
                    </nav>
                </div>
            </section>

            <section
                id="mobile-menu"
                className="absolute top-0 bg-[#150e28] w-full text-x flex-col origin-top animate-open-menu hidden"
            >
                <button className="text-4xl self-end px-4">&times;</button>
                <nav className="flex flex-col pl-2 min-h-screen md:block">
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

                    <button className="w-[90px] bg-[#d434fe] text-white py-1 rounded-sm">
                        Register
                    </button>
                </nav>
            </section>
        </section>
    );
};

export default Navbar;
