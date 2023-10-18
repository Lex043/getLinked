import plainStar from "../assets/star.png";
import sata from "../assets/sata gra.png";

const Timeline = () => {
    return (
        <section className="mt-10 relative">
            <div className="px-4 lg:px-20">
                <div className="text-center">
                    <h1 className="font-clashDisplay text-xl font-bold">
                        Timeline
                    </h1>
                    <p className="py-2 font-montserrat text-[14px] lg:pb-8 lg:w-[28%] lg:mx-auto">
                        Here is the breakdown of time we anticipate using for
                        upcoming event
                    </p>
                </div>

                <div className="absolute left-12 lg:left-[20rem]">
                    <img
                        src={sata}
                        alt="a pink star"
                        className="w-3 lg:w-4 animate-blink"
                    />
                </div>

                <section className="mt-8 flex flex-col gap-4 font-montserrat text-xs lg:hidden">
                    <article className="flex gap-2">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <div className="border-l-2 border-[#D434FE] h-full"></div>
                            <div className="rounded-full bg-[#D434FE] w-5 h-7 flex items-center justify-center">
                                1
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[#d434fe]">
                                Hackathon Announcement
                            </h1>
                            <p className="py-1 leading-5">
                                The getlinked tech hackathon 1.0 is formally
                                announced to the general public and teams begin
                                to get ready to register
                            </p>
                            <h3 className="font-bold text-[#d434fe]">
                                November 18, 2023
                            </h3>
                        </div>
                    </article>

                    <article className="flex gap-2">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <div className="border-l-2 border-[#D434FE] h-full"></div>
                            <div className="rounded-full bg-[#D434FE] w-5 h-7 flex items-center justify-center">
                                2
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[#d434fe]">
                                Teams Registration begins
                            </h1>
                            <p className="py-1 leading-5">
                                Interested teams can now show their interest in
                                the getlinked tech hackathon 1.0 2023 by
                                proceeding to register
                            </p>
                            <h3 className="font-bold text-[#d434fe]">
                                November 18, 2023
                            </h3>
                        </div>
                    </article>

                    <article className="flex gap-2">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <div className="border-l-2 border-[#D434FE] h-full"></div>
                            <div className="rounded-full bg-[#D434FE] w-5 h-7 flex items-center justify-center">
                                3
                            </div>
                        </div>
                        <div className="relative">
                            <h1 className="font-bold text-[#d434fe]">
                                Teams Registration ends
                            </h1>
                            <p className="pt-1 pb-6 leading-5">
                                Interested Participants are no longer Allowed to
                                register
                            </p>
                            <h3 className="font-bold text-[#d434fe]">
                                November 18, 2023
                            </h3>

                            <div className="absolute right-20 top-24">
                                <img
                                    src={plainStar}
                                    alt="a plain star"
                                    className="w-2 lg:w-4 animate-blink"
                                />
                            </div>
                        </div>
                    </article>

                    <article className="flex gap-2">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <div className="border-l-2 border-[#D434FE] h-full"></div>
                            <div className="rounded-full bg-[#D434FE] w-5 h-7 flex items-center justify-center">
                                4
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[#d434fe]">
                                Announcement of the accepted teams and ideas
                            </h1>
                            <p className="py-1 leading-5">
                                All teams whom idea has been accepted into
                                getlinked tech hackathon 1.0 2023 are formally
                                announced
                            </p>
                            <h3 className="font-bold text-[#d434fe]">
                                November 18, 2023
                            </h3>
                        </div>
                    </article>

                    <article className="flex gap-2">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <div className="border-l-2 border-[#D434FE] h-full"></div>
                            <div className="rounded-full bg-[#D434FE] w-5 h-7 flex items-center justify-center">
                                5
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[#d434fe]">
                                Getlinked Hackathon 1.0 Offically Begins
                            </h1>
                            <p className="pt-1 pb-6 leading-5">
                                Accepted teams can now proceed to build their
                                ground breaking skill driven solutions
                            </p>
                            <h3 className="font-bold text-[#d434fe]">
                                November 18, 2023
                            </h3>
                        </div>
                    </article>

                    <article className="flex gap-2">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <div className="border-l-2 border-[#D434FE] h-full"></div>
                            <div className="rounded-full bg-[#D434FE] w-5 h-7 flex items-center justify-center">
                                6
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[#d434fe]">
                                Demo Day
                            </h1>
                            <p className="py-2 leading-5">
                                Teams get the opportunity to pitch their
                                projects to judges. The winner of the hackathon
                                will also be announced on this day
                            </p>
                            <h3 className="font-bold text-[#d434fe]">
                                November 18, 2023
                            </h3>
                        </div>
                    </article>
                </section>

                {/* Desktop mode */}

                <section className="mt-8 hidden lg:flex flex-col gap-20 font-montserrat text-sm">
                    <article className="grid grid-cols-3 items-center justify-items-center pt-10">
                        <div className="flex flex-col items-end">
                            <h1 className="font-bold text-[#d434fe]">
                                Hackathon Announcement
                            </h1>
                            <p className="py-1 leading-5 text-end">
                                The getlinked tech hackathon 1.0 is formally
                                announced to the general public and teams begin
                                to get ready to register
                            </p>
                        </div>

                        <div className="rounded-full bg-[rgb(212,52,254)] w-8 h-8 flex items-center justify-center relative">
                            1
                            <div className="bg-[#a866fd] w-1 h-20 absolute -top-[90px]"></div>
                        </div>

                        <h3 className="font-bold text-[#d434fe] justify-self-start">
                            November 18, 2023
                        </h3>
                    </article>

                    <article className="grid grid-cols-3 items-center justify-items-center">
                        <h3 className="font-bold text-[#d434fe] justify-self-end">
                            November 18, 2023
                        </h3>

                        <div className="rounded-full bg-[#D434FE] w-8 h-8 flex items-center justify-center relative">
                            2
                            <div className="bg-[#a866fd] w-1 h-20 absolute -top-[90px]"></div>
                        </div>

                        <div className="flex flex-col items-start">
                            <h1 className="font-bold text-[#d434fe]">
                                Teams Registration begins
                            </h1>
                            <p className="py-1 leading-5 text-start">
                                Interested teams can now show their interest in
                                the getlinked tech hackathon 1.0 2023 by
                                proceeding to register
                            </p>
                        </div>
                    </article>

                    <article className="grid grid-cols-3 items-center justify-items-center">
                        <div className="justify-self-end">
                            <h1 className="font-bold text-[#d434fe] text-end">
                                Teams Registration ends
                            </h1>
                            <p className="py-1 leading-5 text-end">
                                Interested Participants are no longer Allowed to
                                register
                            </p>
                        </div>

                        <div className="rounded-full bg-[#D434FE] w-8 h-8 flex items-center justify-center relative">
                            3
                            <div className="bg-[#a866fd] w-1 h-20 absolute -top-[90px]"></div>
                        </div>

                        <h3 className="font-bold text-[#d434fe] justify-self-start">
                            November 18, 2023
                        </h3>
                    </article>

                    <article className="grid grid-cols-3 items-center justify-items-center">
                        <h3 className="font-bold text-[#d434fe] justify-self-end">
                            November 18, 2023
                        </h3>

                        <div className="rounded-full bg-[#D434FE] w-8 h-8 flex items-center justify-center relative">
                            4
                            <div className="bg-[#a866fd] w-1 h-20 absolute -top-[90px]"></div>
                        </div>

                        <div>
                            <h1 className="font-bold text-[#d434fe]">
                                Announcement of the accepted teams and ideas
                            </h1>
                            <p className="py-1 leading-5 text-start">
                                All teams whom idea has been accepted into
                                getlinked tech hackathon 1.0 2023 are formally
                                announced
                            </p>
                        </div>
                    </article>

                    <article className="grid grid-cols-3 items-center justify-items-center">
                        <div>
                            <h1 className="font-bold text-[#d434fe] text-end">
                                Getlinked Hackathon 1.0 Offically Begins
                            </h1>
                            <p className="py-1 leading-5 text-end">
                                Accepted teams can now proceed to build their
                                ground breaking skill driven solutions
                            </p>
                        </div>

                        <div className="rounded-full bg-[#D434FE] w-8 h-8 flex items-center justify-center relative">
                            5
                            <div className="bg-[#a866fd] w-1 h-20 absolute -top-[90px]"></div>
                        </div>

                        <h3 className="font-bold text-[#d434fe] justify-self-start">
                            November 18, 2023
                        </h3>
                    </article>

                    <article className="grid grid-cols-3 items-center justify-items-center">
                        <h3 className="font-bold text-[#d434fe] justify-self-end">
                            November 18, 2023
                        </h3>

                        <div className="rounded-full bg-[#D434FE] w-8 h-8 flex items-center justify-center relative">
                            6
                            <div className="bg-[#a866fd] w-1 h-20 absolute -top-[90px]"></div>
                        </div>

                        <div>
                            <h1 className="font-bold text-[#d434fe] text-start">
                                Demo Day
                            </h1>
                            <p className="py-1 leading-5 text-start">
                                Teams get the opportunity to pitch their
                                projects to judges. The winner of the hackathon
                                will also be announced on this day
                            </p>
                        </div>
                    </article>
                </section>
            </div>

            <div className="absolute left-5 -bottom-6 lg:bottom-8 lg:left-32">
                <img
                    src={plainStar}
                    alt="a plain star"
                    className="w-2 lg:w-4 animate-blink"
                />
            </div>
        </section>
    );
};

export default Timeline;
