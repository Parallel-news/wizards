import Permahacks from '../images/permahacks.svg'

function Hero({ tracksRef }) {
    const scrollToTracks = () => {
        tracksRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section class="bg-gray-900 text-white">
            <div
                class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div class="mx-auto max-w-3xl text-center flex flex-col justify-between h-full">
                    {/* Space filler */}
                    <div class="flex-grow"></div>

                    {/* New row of text */}
             

                    <div>
                        <h1
                            class="bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            <img src={Permahacks} />
                            <span class="sm:block">  </span>
                        </h1>

                        <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                            Hack on Arweave: Oct 30 - Nov 10
                        </p>

                        <div class="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                class="block w-full rounded bg-[#FF630B] px-12 py-3 text-md font-medium text-gray-900 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="https://y2kodq8uua3.typeform.com/permahacks"
                                
                            >
                                {`Sign up`}
                            </a>

                            <button
                                class="block w-full rounded border border-[#FF630B] px-12 py-3 text-md font-medium text-[#FF630B] focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                onClick={scrollToTracks}
                            >
                                See Bounties
                            </button>
                        </div>
                    </div>

                    {/* Space filler */}
                    <div class="flex-grow"></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
