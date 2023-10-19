import congratulation from "../assets/congratulation.png";
import { Link } from "react-router-dom";

const modal = () => {
    return (
        <section
            className="fixed inset-0 backdrop-blur-md bg-[#150e28] bg-opacity-30
         flex justify-center items-center"
        >
            <div
                className="flex flex-col items-center justify-center gap-3
             border-2 border-[#D434FE] rounded-md p-8 md:px-20 mx-4 md:mx-10 lg:w-[50%]"
            >
                <img
                    src={congratulation}
                    alt="congratulation"
                    className="md:w-[50%] md:h-[60%]"
                />
                <h1 className="font-montserrat font-semibold text-xl md:text-2xl text-center">
                    Congratulations <br /> you have successfully Registered!
                </h1>
                <p className="text-center">
                    Yes, it was easy and you did it! <br /> check you mail box
                    for next step
                </p>

                <Link
                    to="/"
                    className="w-full rounded-md bg-gradient-to-r from-[#d434fe]
                     via-[#d434fe] to-[#903aff] py-3 font-montserrat text-sm text-white text-center"
                >
                    Back
                </Link>
            </div>
        </section>
    );
};

export default modal;
