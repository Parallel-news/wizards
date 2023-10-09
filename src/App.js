import React, { useRef } from 'react';
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Arweave from "./components/Arweave";
import Events from "./components/Events";
import Track from "./components/Track";
import Ever from "./images/everfinance.png"
import Mem from "./images/mem-logo.svg"
import PermawebNews from "./images/permawebnews.png"

const tracks = {
  
  devtooling: {
    title: 'Best use of Arseeding or EverID',
    icon: Ever,
    iconlink: "https://ever.vision",
    desc: 'Use the everVision data availability and identity services in your submission to qualify'
  },
  web3dapps: {
    title: 'Best use of MEM',
    icon: Mem,
    iconlink: "https://mem.tech",
    desc: 'Use the Molecular Execution Machine (MEM) as your dApp\'s backend to qualify',
  },
  crosschain: {
    title: 'Cross-chain',
    icon: '🌀',
    desc: 'Bridge the gap between Arweave and the wider world of web3. Build dApps and infrastructure that interface with other chains in clever ways.'
  },
  education: {
    title: 'Educational video content',
    icon: PermawebNews,
    iconlink: "https://permaweb.news",
    desc: 'Create a technology-focused video series for Arweave developers or end users.',
  }
}

function App() {
  const tracksRef = useRef();

  return (
    <div className="bg-gray-900">
      <Hero tracksRef={tracksRef} />
      <Arweave />
      <Logos />
      <div ref={tracksRef} class="mx-auto max-w-4xl text-center mt-8 py-6">
        <h1
          class="mb-5 bg-[#FF630B] bg-clip-text text-4xl font-extrabold text-transparent sm:text-4xl"
        >
          Bounties
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 pb-8 px-8">
        <Track content={tracks.devtooling} />
        <Track content={tracks.web3dapps} />
        <Track content={tracks.education} />
        {/*<Track content={tracks.crosschain} />*/}
      </div>
      <Events />
    </div>
  );
}

export default App;
