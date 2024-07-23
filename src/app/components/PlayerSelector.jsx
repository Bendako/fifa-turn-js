"use client"

import { useState, useEffect } from 'react';
import { playersArray } from "../Players";

const PlayerSelector = () => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [roundStartPlayerIndex, setRoundStartPlayerIndex] = useState(0);
  const [roundNumber, setRoundNumber] = useState(1);

  const nextPlayer = () => {
    setCurrentPlayerIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % playersArray.length;
      console.log(`Next player index: ${nextIndex}`);
      if (nextIndex === roundStartPlayerIndex) {
        setRoundNumber((prevRound) => {
          console.log(`Incrementing round number from ${prevRound} to ${prevRound + 1}`);
          return prevRound + 1;
        });
      }
      return nextIndex;
    });
  };

  const handlePlayerChange = (event) => {
    const newIndex = Number(event.target.value);
    setCurrentPlayerIndex(newIndex);
    setRoundStartPlayerIndex(newIndex);
    setRoundNumber(1); // Reset round number when manually changing player
  };

  const otherPlayers = playersArray.filter((_, index) => index !== currentPlayerIndex);

  return (
    <div className="mb-6 p-4 bg-white text-black rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Player Selection</h2>
      <div className="flex items-center justify-between mb-4">
        <select 
          value={currentPlayerIndex}
          onChange={handlePlayerChange}
          className="block appearance-none w-48  bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
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
        <p className="text-lg">Current player: <strong>{playersArray[currentPlayerIndex]}</strong></p>
        <p className="text-md mt-2">Other players:</p>
        <ul className="list-disc list-inside">
          {otherPlayers.map((player, index) => (
            <li key={index} className="ml-4">{player}</li>
          ))}
        </ul>
        <p className="text-lg mt-4">Round: <strong>{roundNumber}</strong></p>
      </div>
    </div>
  );
};

export default PlayerSelector;
