import React, { useRef } from 'react';
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Arweave from "./components/Arweave";
import Events from "./components/Events";
import Track from "./components/Track";
import Ever from "./images/everfinance.png"
import Mem from "./images/mem-logo.svg"
import Forward from "./images/forward.jpg"
import PermawebNews from "./images/permawebnews.png"

const tracks = {

  ever: {
    title: 'Best use of Arseeding',
    icon: Ever,
    iconlink: "https://ever.vision",
    desc: 'Use the everVision data availability service in your submission to qualify',
    prize: '$1,000',
    moreinfo: 'https://web3infra.dev/docs/arseeding/introduction/lightNode'
  },
  mem: {
    title: 'Best use of MEM',
    icon: Mem,
    iconlink: "https://mem.tech",
    desc: 'Use the Molecular Execution Machine (MEM) as your dApp\'s backend to qualify',
    prize: '$1,000',
    moreinfo: 'https://docs.mem.tech'
  },
  pwn: {
    title: 'Educational video content',
    icon: PermawebNews,
    iconlink: "https://permaweb.news",
    desc: 'Create a technology-focused video series for Arweave developers or end users.',
    prize: "$1,000",
    moreinfo: ''
  },
  fwdvideo: {
    title: 'UDL Video Player Renderer',
    icon: Forward,
    iconlink: "https://fwd.arweave.dev",
    desc: 'Create a renderer for video media that uses the UDL in order for users to view the entire video content.',
    prize: "$1,500",
    moreinfo: 'https://docs.google.com/document/d/1zlku_YzX7NArjG13tGnP-2aihWnnXbdbM0czWAynka8/edit?usp=sharing'
  },
  fwdsearch: {
    title: 'Search for the Permaweb',
    icon: Forward,
    iconlink: "https://fwd.arweave.dev",
    desc: 'Create a search engine based on discoverability and human curation for the Permaweb using Discoverability (ANS-110), STAMP, and Renderers.',
    prize: "$3,500",
    moreinfo: 'https://docs.google.com/document/d/1lbPc_hr_2wLjp3CoM-aZApBgCOVKVcoaZxC-5CbcOGQ/edit?usp=sharing'
  },
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
        <Track content={tracks.ever} />
        <Track content={tracks.mem} />
        <Track content={tracks.fwdvideo} />
        <Track content={tracks.fwdsearch} />
        <Track content={tracks.pwn} />
      </div>
      <Events />
    </div>
  );
}

export default App;
