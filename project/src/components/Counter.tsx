import React, { useEffect } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export function Counter() {
  const { state, dispatch } = useAppContext();
  const { counter } = state;

  useEffect(() => {
    const savedCounter = localStorage.getItem('counter');
    if (savedCounter) {
      dispatch({ type: 'SET_COUNTER', payload: parseInt(savedCounter, 10) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('counter', counter.toString());
  }, [counter]);

  const intensity = Math.min(Math.abs(counter) * 10, 100);
  const bgColor = counter >= 0 
    ? `rgb(${255 - intensity}, 255, ${255 - intensity})`
    : `rgb(255, ${255 - intensity}, ${255 - intensity})`;

  return (
    <div 
      className="p-8 rounded-lg shadow-lg transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-4xl font-bold text-center mb-6">{counter}</div>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <Plus size={20} /> Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <Minus size={20} /> Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          <RotateCcw size={20} /> Reset
        </button>
      </div>
    </div>
  );
}