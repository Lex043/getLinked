import cup from "../assets/9486889 1.png";
import rewards from "../assets/Rewards.png";

const Prize = () => {
    return (
        <section className="my-10 px-4 lg:px-12">
            <div className="text-center md:flex md:flex-col">
                <div>
                    <h1 className="font-clashDisplay text-xl font-bold">
                        Prizes and <br />
                        <span className="text-[#d434fe]">Rewards</span>
                    </h1>
                    <p className="py-2 font-montserrat text-xs">
                        Highlight of the prizes or rewards for winners and for
                        participants
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
                    <figure>
                        <img src={cup} alt="prize and rewards cup" />
                    </figure>

                    <figure>
                        <img src={rewards} alt="Reward ranks" />
                    </figure>
                </div>
            </div>

            {/* <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                <figure>
                    <img src={cup} alt="prize and rewards cup" />
                </figure>

                <figure>
                    <img src={rewards} alt="Reward ranks" />
                </figure>
            </div> */}
        </section>
    );
};

export default Prize;
