import cup from "../assets/9486889 1.png";
import rewards from "../assets/Rewards.png";

const Prize = () => {
    return (
        <section className="my-10 px-4 lg:px-16 bg-[#110B21] py-10 opacity">
            <div className="lg:flex lg:flex-col lg:gap-10">
                <div className="text-center lg:text-start lg:ml-auto">
                    <h1 className="font-clashDisplay text-xl md:text-3xl font-bold">
                        Prizes and <br />
                        <span className="text-[#d434fe]">Rewards</span>
                    </h1>
                    <p className="py-2 font-montserrat text-xs md:text-sm  lg:w-[80%]">
                        Highlight of the prizes or rewards for winners and for
                        participants
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                    <figure>
                        <img src={cup} alt="prize and rewards cup" />
                    </figure>

                    <figure>
                        <img src={rewards} alt="Reward ranks" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Prize;
