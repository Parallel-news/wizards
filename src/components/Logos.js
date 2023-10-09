import DecentLand from '../images/decentland.png'
import CL from '../images/cl.png'
import EverFinance from '../images/everfinance.png'
import Forward from '../images/forward.jpg'
import Meson from '../images/meson.png'
import PermawebNews from '../images/permawebnews.png'

function Logos() {
    return (
        <div className="mx-auto text-center p-5 bg-white">
            <div className="text-4xl">
                <h1
                    className="pt-10 text-black bg-clip-text font-extrabold text-transparent"
                >
                    $20,000 in prizes
                </h1>
                <h1
                    className="mb-5 text-black bg-clip-text text-xl font-extrabold text-transparent"
                >
                    Get paid to learn Arweave tooling
                </h1>
            </div>
            <div>
                <div className="mx-auto max-w-7xl py-16 px-6 sm:py-4 lg:px-6 justify-center">
                    <div className="flex justify-center">
                        <div className="mt-8 gap-10 flex flex-wrap justify-center">
                            <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                                <a href="https://ever.vision" target="_blank" rel="noopener noreferrer">
                                    <img
                                        width={48}
                                        height={48}
                                        src={EverFinance}
                                        alt="everfinance logo"
                                    />
                                </a>
                                <div className="text-sm mt-3 mb-5 text-gray-500">everVision</div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                                <a href="https://decent.land" target="_blank" rel="noopener noreferrer">
                                    <img width={48} height={48} src={DecentLand} alt="decent.land logo" />
                                </a>
                                <div className="text-sm mt-3 mb-5 text-gray-500">decent.land</div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                                <a href="https://www.communitylabs.com/" target="_blank" rel="noopener noreferrer">
                                    <img width={48} height={48} src={CL} alt="Community Labs logo" />
                                </a>
                                <div className="text-sm mt-3 mb-5 text-gray-500">Community Labs</div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                                <a href="https://forward.arweave.dev/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        width={48}
                                        height={48}
                                        src={Forward}
                                        alt="Forward Research Logo"
                                    />
                                </a>
                                <div className="text-sm mt-3 mb-5 text-gray-500">Forward Research</div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                                <a href="https://permaweb.news" target="_blank" rel="noopener noreferrer">
                                    <img
                                        width={48}
                                        height={48}
                                        src={PermawebNews}
                                        alt="permaweb.news logo"
                                    />
                                </a>
                                <div className="text-sm mt-3 mb-5 text-gray-500">permaweb.news</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logos;
