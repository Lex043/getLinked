import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-6 h-screen justify-center items-center">
            <h1 className="font-montserrat lg:text-2xl">Bad thing happens!</h1>

            <h2 className="text-6xl lg:text-9xl font-clashDisplay flex gap-2">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </h2>

            <Link
                to="/"
                className="uppercase bg-[#110B21] py-3 px-8 rounded-xl font-montserrat"
            >
                go home
            </Link>
        </div>
    );
};

export default NotFound;
