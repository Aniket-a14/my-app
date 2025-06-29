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


// 'use client';

// import { useRef } from 'react';

// export default function RefExample() {
//   const countRef = useRef(0);

//   console.log('🔄 Component rendered');

//   const handleClick = () => {
//     countRef.current += 1;
//     console.log('🧮 Ref Count:', countRef.current);
//   };

//   return (
//     <div className="p-6 text-center min-h-screen flex flex-col justify-center          items-center  bg-red-100 text-black">
//       <h1 className="text-2xl font-bold mb-4">useRef No Re-render Example</h1>
//       <p className="text-lg mb-2">
//         Ref Count (check console): {countRef.current}
//       </p>
//       <button
//         onClick={handleClick}
//         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//       >
//         Increment Ref
//       </button>
//     </div>
//   );
// }
