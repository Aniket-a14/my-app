'use client';
import { useState } from 'react';

export default function ConExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 to-pink-300 text-black">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className={`text-3xl font-bold mb-4 ${isLoggedIn ? 'text-green-600' : 'text-pink-600'}`}>
          {isLoggedIn ? "Welcome back!" : "Please log in"}
        </h1>
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="px-6 py-2 rounded-lg bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition"
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
}

// Explanation:
/*
This component demonstrates a simple login/logout functionality using React hooks.
It maintains a piece of state (`isLoggedIn`) to track the user's login status.
Based on this state, it conditionally renders different messages and button labels.
*/
// The component uses Tailwind CSS for styling, providing a visually appealing interface.

// The button toggles the login state when clicked, changing the displayed message and button text accordingly.
//Conditional Rendering can be explained as the process of rendering different UI elements based on certain conditions, such as user authentication status in this case.
// This is a common pattern in React applications to create dynamic and interactive user interfaces.
// The component is designed to be responsive and visually appealing, using Tailwind CSS classes for styling.
// The useState hook is used to manage the login state, allowing the component to re-render when the state changes.
// The component is wrapped in a div with a gradient background, and the text color changes based on the login state.
// This example is a great starting point for understanding how to manage state and conditional rendering in React applications.

//Syntax:
/*
1. Import necessary modules and components.
2. Define the functional component.
3. Use the useState hook to manage component state.
4. Return the JSX structure with conditional rendering.
5. Apply Tailwind CSS classes for styling.
*/

//Example Usage:
/*
The ternary operator is used to conditionally render the welcome message and button text based on the `isLoggedIn` state.
The button toggles the login state when clicked, changing the displayed message and button text accordingly.
*/