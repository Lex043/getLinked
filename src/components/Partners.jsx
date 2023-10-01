import partnersLogo from "../assets/Partner and sponsors section.png";

const Partners = () => {
    return (
        <section>
            <div>
                <h1>Partners and Sponsors</h1>
                <p>
                    Getlinked Hackathon 1.0 is honored to have the following
                    major companies as its partners and sponsors
                </p>
            </div>
            <figure>
                <img src={partnersLogo} alt="partner and sponsors logo" />
            </figure>
        </section>
    );
};

export default Partners;
