import cup from "../assets/9486889 1.png";
import rewards from "../assets/Rewards.png";
import star from "../assets/sata gra.png";
import plainStar from "../assets/star.png";

const Prize = () => {
    return (
        <section className="my-10 px-4 lg:px-16 bg-[#110B21] pt-10 pb-14 lg:pb-20">
            <div className="lg:flex lg:flex-col lg:gap-10 relative">
                <div className="lg:absolute lg:top-24 lg:left-52">
                    <img
                        src={star}
                        alt="star"
                        className="w-3 lg:w-4 animate-blink"
                    />
                </div>
                <div className="text-center lg:text-start lg:ml-auto relative">
                    <h1 className="font-clashDisplay text-xl md:text-3xl font-bold">
                        Prizes and <br />
                        <span className="text-[#d434fe]">Rewards</span>
                    </h1>

                    <p className="py-2 font-montserrat text-xs md:text-sm  lg:w-[80%]">
                        Highlight of the prizes or rewards for winners and for
                        participants
                    </p>

                    <div className="absolute top-6 right-11 lg:right-40 lg:top-20">
                        <img
                            src={star}
                            alt="star"
                            className="w-3 lg:w-4 animate-blink"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center justify-center relative">
                    <figure>
                        <img src={cup} alt="prize and rewards cup" />
                    </figure>

                    <div className="absolute left-10 lg:left-52 lg:-bottom-6">
                        <img
                            src={plainStar}
                            alt="a plain star"
                            className="w-3 animate-blink"
                        />
                    </div>

                    <div className="absolute right-4 bottom-48 lg:bottom-[22rem] lg:right-0">
                        <img
                            src={plainStar}
                            alt="a plain star"
                            className="w-3 md:w-4 animate-blink"
                        />
                    </div>

                    <figure>
                        <img src={rewards} alt="Reward ranks" />
                    </figure>

                    <div className="absolute -bottom-8 right-20 lg:right-52 lg:-bottom-10">
                        <img
                            src={plainStar}
                            alt="a plain star"
                            className="w-3 md:w-4 animate-blink"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prize;
