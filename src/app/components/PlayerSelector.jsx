// components/PlayerSelector.js
"use client"

import { useState } from 'react';
import { playersArray } from "../Players";

const PlayerSelector = () => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const nextPlayer = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % playersArray.length);
  };

  const otherPlayers = playersArray.filter((_, index) => index !== currentPlayerIndex);

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl text-black font-bold mb-4">בחוץ</h2>
      <div className="flex items-center justify-between mb-4">
        <select 
          value={currentPlayerIndex}
          onChange={(e) => setCurrentPlayerIndex(Number(e.target.value))}
          className="block appearance-none w-48 bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        >
          {playersArray.map((player, index) => (
            <option key={index} value={index}>
              {player}
            </option>
          ))}
        </select>
        <button 
          onClick={nextPlayer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          הבא
        </button>
      </div>
      <div className="mt-4">
        {/* <p className="text-lg text-black">Current player: <strong>{playersArray[currentPlayerIndex]}</strong></p> */}
        <p className="text-md text-black mt-2">משחקים:</p>
        <ul className="list-disc text-black list-inside">
          {otherPlayers.map((player, index) => (
            <li key={index} className="ml-4">{player}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerSelector;