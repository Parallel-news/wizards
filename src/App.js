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
import Arconnect from "./images/arconnect.png"
import ArweaveKit from "./images/arweavekit.png"
import Navbar from './components/Navbar';

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
  arweaveKitIntegration: {
    title: 'ArweaveKit Integration',
    icon: ArweaveKit,
    iconlink: 'https://www.arweavekit.com/',
    prize: '$1,000',
    desc: 'Must use ArweaveKit as the primary tool in developing your application on Arweave. Use the kit as much as you can and showcase how you’ve used it. Those that create functional apps which fully integrate ArweaveKit will be considered for the bounty. Code must be hosted on protocol.land.',
    moreinfo: 'https://docs.arweavekit.com/arweavekit/introduction'
  },
  bestPluginSubmission: {
    title: 'Best plugin submission to ArweaveKit',
    icon: ArweaveKit,
    iconlink: 'https://www.arweavekit.com/',
    prize: '$1,000',
    desc: 'The plugin system streamlines the coding process by allowing developers the ability to leverage external packages from a variety of Arweave projects without needing direct integrations. All it takes is less than 5 lines of code to import a supported external package. This bounty will be awarded to the best plugin submission to ArweaveKit. Looking for plugins with the most utility, creativity, and impact. Code must be hosted on protocol.land.',
    moreinfo: 'https://docs.arweavekit.com/arweavekit/introduction'
  },
  arConnectIntegration: {
    title: 'ArConnect Integration',
    icon: Arconnect,
    iconlink: 'https://arconnect.io',
    prize: '$1,000',
    desc: 'Best project using ArConnect. Must directly use ArConnect to be considered for this bounty. Fully functional integration of Arconnect tied to an app that works. We’ll be looking for creative implementations that make the wallet experience better overall. Code must be hosted on protocol.land.',
    moreinfo: 'https://docs.arconnect.io/'
  }
}

function App() {
  const tracksRef = useRef();

  return (
    <div className="bg-gray-900">
      <Navbar/>
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
        <Track content={tracks.arweaveKitIntegration} />
        <Track content={tracks.bestPluginSubmission} />
        <Track content={tracks.arConnectIntegration} />
        <Track content={tracks.pwn} />
      </div>
      <Events />
    </div>
  );
}

export default App;
