import cup from "../assets/9486889 1.png";
import rewards from "../assets/Rewards.png";

const Prize = () => {
    return (
        <section className="px-4 my-10">
            <div className="text-center">
                <h1 className="text-xl font-bold font-clashDisplay">
                    Prizes and <br />
                    <span className="text-[#d434fe]">Rewards</span>
                </h1>
                <p className="py-2 text-xs font-montserrat">
                    Highlight of the prizes or rewards for winners and for
                    participants
                </p>
            </div>

            <div className="flex flex-col gap-12">
                <figure>
                    <img src={cup} alt="prize and rewards cup" />
                </figure>

                <figure>
                    <img src={rewards} alt="Reward ranks" />
                </figure>
            </div>
        </section>
    );
};

export default Prize;
