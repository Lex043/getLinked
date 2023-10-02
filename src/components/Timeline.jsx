const Timeline = () => {
    return (
        <section className="mt-10">
            <div className="px-4">
                <div className="text-center">
                    <h1 className="text-xl font-bold font-clashDisplay">
                        Timeline
                    </h1>
                    <p className="text-[14px] font-montserrat py-2">
                        Here is the breakdown of time we anticipate using for
                        upcoming event
                    </p>
                </div>

                <section className="flex flex-col gap-4 mt-8 text-xs font-montserrat">
                    <article>
                        <div className="border-l-2 border-[#d434fe]"></div>
                        <div>
                            <h1 className="text-[#d434fe] font-bold">
                                Hackathon Announcement
                            </h1>
                            <p className="py-2 leading-5">
                                The getlinked tech hackathon 1.0 is formally
                                announced to the general public and teams begin
                                to get ready to register
                            </p>
                            <h3 className="text-[#d434fe] font-bold">
                                November 18, 2023
                            </h3>
                        </div>
                    </article>

                    <article>
                        <h1 className="text-[#d434fe] font-bold">
                            Teams Registration begins
                        </h1>
                        <p className="py-2 leading-5">
                            Interested teams can now show their interest in the
                            getlinked tech hackathon 1.0 2023 by proceeding to
                            register
                        </p>
                        <h3 className="text-[#d434fe] font-bold">
                            November 18, 2023
                        </h3>
                    </article>

                    <article>
                        <h1 className="text-[#d434fe] font-bold">
                            Teams Registration ends
                        </h1>
                        <p className="py-2 leading-5">
                            Interested Participants are no longer Allowed to
                            register
                        </p>
                        <h3 className="text-[#d434fe] font-bold">
                            November 18, 2023
                        </h3>
                    </article>

                    <article>
                        <h1 className="text-[#d434fe] font-bold">
                            Announcement of the accepted teams and ideas
                        </h1>
                        <p className="py-2 leading-5">
                            All teams whom idea has been accepted into getlinked
                            tech hackathon 1.0 2023 are formally announced
                        </p>
                        <h3 className="text-[#d434fe] font-bold">
                            November 18, 2023
                        </h3>
                    </article>

                    <article>
                        <h1 className="text-[#d434fe] font-bold">
                            Getlinked Hackathon 1.0 Offically Begins
                        </h1>
                        <p className="py-2 leading-5">
                            Accepted teams can now proceed to build their ground
                            breaking skill driven solutions
                        </p>
                        <h3 className="text-[#d434fe] font-bold">
                            November 18, 2023
                        </h3>
                    </article>

                    <article>
                        <h1 className="text-[#d434fe] font-bold">Demo Day</h1>
                        <p className="py-2 leading-5">
                            Teams get the opportunity to pitch their projects to
                            judges. The winner of the hackathon will also be
                            announced on this day
                        </p>
                        <h3 className="text-[#d434fe] font-bold">
                            November 18, 2023
                        </h3>
                    </article>
                </section>
            </div>
        </section>
    );
};

export default Timeline;
