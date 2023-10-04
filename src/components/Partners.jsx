import partnersLogo from "../assets/Partner and Sponsors.png";

const Partners = () => {
    return (
        <section className="mt-5 pb-16 border-b-[1px] border-white">
            <div className="px-4">
                <div className="text-center md:w-[50%] md:mx-auto">
                    <h1 className="font-clashDisplay text-xl font-bold">
                        Partners and Sponsors
                    </h1>
                    <p className="font-montserrat text-xs pt-2 pb-10">
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
