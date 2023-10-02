import partnersLogo from "../assets/Partner and sponsors section.png";

const Partners = () => {
    return (
        <section className="mt-5 pb-16 border-b-[1px] border-white">
            <div className="px-4">
                <div className="text-center">
                    <h1 className="font-clashDisplay text-xl font-bold">
                        Partners and Sponsors
                    </h1>
                    <p className="font-montserrat text-xs pt-2 pb-10">
                        Getlinked Hackathon 1.0 is honored to have the following
                        major companies as its partners and sponsors
                    </p>
                </div>
                <figure className="">
                    <img src={partnersLogo} alt="partner and sponsors logo" />
                </figure>
            </div>
        </section>
    );
};

export default Partners;
