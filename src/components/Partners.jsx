import partnersLogo from "../assets/Partner and Sponsors.png";

const Partners = () => {
    return (
        <section className="mt-5 border-b-[1px] border-gray-700 pb-16">
            <div className="px-4 lg:w-[90%] lg:mx-auto">
                <div className="text-center md:mx-auto md:w-[50%] lg:w-[35%]">
                    <h1 className="font-clashDisplay text-xl lg:text-2xl">
                        Partners and Sponsors
                    </h1>
                    <p className="pb-10 pt-2 font-montserrat text-xs leading-5">
                        Getlinked Hackathon 1.0 is honored to have the following
                        major companies as its partners and sponsors
                    </p>
                </div>
                <figure className=" flex items-center justify-center border-[1px] border-[#d434fe] p-6 md:p-16">
                    <img
                        src={partnersLogo}
                        alt="partner and sponsors logo"
                        className="max-w-full"
                    />
                </figure>
            </div>
        </section>
    );
};

export default Partners;
