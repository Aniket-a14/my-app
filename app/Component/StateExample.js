'use client';

import { useState } from 'react';

export default function StateExample() {
  const [count, setCount] = useState(0); // Initial count is 0

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">🧮 Counter</h1>
      <p className="text-2xl mb-4">Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
      >
        Increment
      </button>
    </div>
  );

  /*
  -------------------------------------------------------
  🔍 useState Hook Explanation:

  ✅ Syntax:
  const [stateVariable, setStateFunction] = useState(initialValue);

  ✅ Example in this file:
  const [count, setCount] = useState(0);

  - count → current value of the state (starts at 0)
  - setCount → function used to update the state
  - useState(0) → sets the initial value to 0

  🎯 When the "Increment" button is clicked:
  - setCount(count + 1) is called
  - This updates the state value
  - React re-renders the UI with the new value

  🛠️ This is a classic example of a counter using useState.
  It's useful for learning how React manages internal component state.

  -------------------------------------------------------
  */
}
