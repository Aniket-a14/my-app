"use client";
import { useState } from "react";


export default function RefExample() {
    const [count, setCount] = useState(0);

    console.log("Component Rerendered");

    return (
        <div className="p-6 text-center min-h-screen flex flex-col justify-center items-center bg-red-100 text-black">
            <h1 className="text-2xl font-bold mb-4">useState Re-render Example</h1>
            <p className="text-lg mb-2">Current Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Increment
            </button>
        </div>
    )
};

// --- Explanation of useRef --

/*
useRef is a React Hook that lets you create a mutable reference which persists across re-renders. 
Unlike useState, updating a ref does NOT cause the component to re-render.

Syntax:
const myRef = useRef(initialValue);

- myRef.current holds the value.
- You can update myRef.current directly.

Example (from the commented code above):

import { useRef } from 'react';

export default function RefExample() {
  const countRef = useRef(0);

  console.log('Component rendered');

  const handleClick = () => {
    countRef.current += 1;
    console.log('Ref Count:', countRef.current);
  };

  return (
    <div>
      <p>Ref Count (check console): {countRef.current}</p>
      <button onClick={handleClick}>Increment Ref</button>
    </div>
  );
}

Explanation:
- countRef is a ref object with an initial value of 0.
- When you click the button, countRef.current increases, but the component does NOT re-render.
- The updated value is visible in the console, but not on the screen unless you trigger a re-render.
- useRef is useful for storing values that don’t need to trigger a UI update, like timers, DOM nodes, or previous
*/
