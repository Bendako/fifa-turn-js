"use client"

import { useState } from 'react';

const Card = ({ name }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="text-black font-bold text-xl mb-2">{name}</div>
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
