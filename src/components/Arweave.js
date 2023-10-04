import ArweaveLogo from '../images/arweave.png'

function Arweave() {
    return (
        <div class="mx-auto py-16 bg-gray-100">
            <div class="max-w-7xl mx-auto">
                <div class="text-4xl px-5">
                    <h1
                        class="mx-5 text-black bg-clip-text font-extrabold text-transparent md:mb-0"
                    >
                        Build on Arweave 🏗️
                    </h1>
                </div>
                <div>
                    <div className="grid pl-5 flex items-center grid-cols-1 md:grid-cols-3">
                        <div className='md:col-span-2 px-6 mb-8 mt-4 text-lg'>
                            Get started with an Arweave-based tech stack that provides everything you need to build permanent, decentralized applications.
                            <p>&nbsp;</p>
                            <p>Learn to write and deploy a smart contract backend, ensure speedy data availability, and host your dApp's UI on the blockweave where it'll be available forever.</p>
                            <p>&nbsp;</p>
                            <p><span className="font-bold">3-5 winners will be chosen from the total pool of submissions</span>, with extra prizes going to those who fill the bounties below.</p>
                            <div className="mt-8">
                                <button
                                    className="rounded bg-[#FF630B] hover:cursor-not-allowed px-12 py-3 text-md font-medium text-gray-900 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                    href="#"
                                    disabled
                                >
                                    {`Signup (coming soon)`}
                                </button>
                            </div>
                        </div>

                        <div className='hidden md:flex md:items-center md:justify-end'>
                            <div className='w-1/2 overflow-hidden'>
                                <img
                                    className='float-right'
                                    width={300}
                                    height={300}
                                    src={ArweaveLogo}
                                    alt="Arweave logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Arweave;
