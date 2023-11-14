import React from 'react';
import xLogo from '../images/x.svg';
import Discord from '../images/discord.svg';

const RulesLink = "https://arweave.net/bnkKbLkyaVe-417rCLWnHXBChCp6VPYZNu5DNgEElHY";
const xLink = "https://twitter.com/permahacks";
const discordLink = "https://discord.com/invite/wGtB6A7mmh";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800">
      <div className="navbar-logo">
        <img className="h-4 ml-2 hidden" src="/favicon.png" alt="Logo" />
      </div>
      <div className="flex items-center px-4 gap-4 py-2">
        <a href={xLink} target="_blank" rel="noopener noreferrer">
          <img className="h-4" src={xLogo} alt="Twitter Icon" />
        </a>
        <a href={discordLink} target="_blank" rel="noopener noreferrer">
          <img className="h-4" src={Discord} alt="Discord Icon" />
        </a>
        <a href={RulesLink} target="_blank" rel="noopener noreferrer" className="text-white underline">CoC</a>
      </div>
    </div>
  );
}

export default Navbar;
