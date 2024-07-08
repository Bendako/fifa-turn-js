"use client"

import { useState } from 'react';

const Card = ({ name }) => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('bg-white');

  const colorOptions = {
    red: 'bg-red-400',
    yellow: 'bg-yellow-400',
    blue: 'bg-blue-400',
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const handleColorChange = (e) => setColor(colorOptions[e.target.value]);


  return (
    <div className={`max-w-sm m-4 rounded overflow-hidden shadow-lg ${color} p-6`}>
      <div className="text-black font-bold text-xl mb-2">{name}</div>
      <select 
          onChange={handleColorChange}
          className="block appearance-none w-20 bg-white border border-gray-300 text-gray-700 py-1 px-2 rounded-md text-sm leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        >
          <option value="">צבע</option>
          <option value="red">אדום</option>
          <option value="yellow">צהוב</option>
          <option value="blue">כחול</option>
        </select>
      <div className="text-gray-700 text-4xl mb-4">{count}</div>
      <div className="flex justify-between">
        <button 
          onClick={decrement} 
          className="bg-red-500 mr-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          -
        </button>
        <button 
          onClick={increment} 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
