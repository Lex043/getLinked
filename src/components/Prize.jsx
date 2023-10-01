import cup from "../assets/9486889 1.png";
import rewards from "../assets/Rewards.png";

const Prize = () => {
    return (
        <section>
            <figure>
                <img src={cup} alt="prize and rewards cup" />
            </figure>
            <div>
                <h1>
                    Prizes and <br />
                    Rewards
                </h1>
                <p>
                    Highlight of the prizes or rewards for winners and for
                    participants
                </p>

                <figure>
                    <img src={rewards} alt="Reward ranks" />
                </figure>
            </div>
        </section>
    );
};

export default Prize;
