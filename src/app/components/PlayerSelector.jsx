// components/PlayerSelector.js
"use client"

import { useState } from 'react';
import { playersArray } from "../Players";

const PlayerSelector = () => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const nextPlayer = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % playersArray.length);
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl text-black font-bold mb-4">בחוץ</h2>
      <div className="flex items-center justify-between">
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
          className="bg-blue-500 m-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          הבא
        </button>
      </div>
      <p className="mt-4 text-lg">Current player: <strong>{playersArray[currentPlayerIndex]}</strong></p>
    </div>
  );
};

export default PlayerSelector;