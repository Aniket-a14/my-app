'use client';

import { useState, useEffect } from 'react';

export default function EffectExample() {
  const [time, setTime] = useState(new Date()); 
  useEffect(() => {
   

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval); 
    };
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">🕒 Live Clock</h1>
      <p className="text-2xl font-mono">
        {time.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </p>
    </div>
  );

  /*
  -------------------------------------------------------
  🔍 useEffect Hook Full Breakdown

  ✅ Syntax:
  useEffect(() => {
    // 1. Logic goes here
    return () => {
      // 2. Cleanup logic goes here
    };
  }, [dependencies]);

  -------------------------------------------------------

  🧠 1. Logic:
  - This is the main code you want to run after the component is rendered.
  - In our case: 
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  - This starts a timer that updates the state every 1 second.
  - That triggers a re-render of the UI with the new time.

  -------------------------------------------------------

  🧹 2. Cleanup Logic:
  - Cleanup helps prevent memory leaks when the component is removed from the screen (unmounted).
  - In our case: 
      return () => clearInterval(interval);
  - This clears the timer so it doesn’t keep running in the background.

  -------------------------------------------------------

  🧩 3. Dependencies:
  - The array after useEffect is called the "dependency array".
  - It controls when the effect should run again.

    ✅ [] (empty array):
       - Runs the effect only **once**, after the component is mounted.
       - This is what we used here because we only need to set the interval one time.

    ✅ [someValue]:
       - If you add variables in the array, the effect will run every time that variable changes.

    ✅ No array:
       - If you skip the dependency array completely, the effect will run after **every render**, which is usually not what you want.

  -------------------------------------------------------

  🎯 Summary:
  - useState manages the dynamic data (time).
  - useEffect sets up the timer and cleans it up.
  - Together, they build a live clock that updates every second.

  -------------------------------------------------------
  */
}
//.....................................................................
