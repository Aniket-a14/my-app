'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && email) {
      router.push(`/user/${username}?email=${encodeURIComponent(email)}`)
    }
  }

  return (
    <main className="p-6 flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border p-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </main>
  )
}


// import EffectExample from "./Component/EffectEaxmple";
// import StateExample from "./Component/StateExample";
// import RefExample from "./Component/RefExample";
// import MapExample from "./Component/MapExample";
// import ConExample from "./Component/ConExample";


// export default function Home() {
//   return (
//     <div>
//       <ConExample/>
//       <MapExample/>
//       <RefExample/>
//       <StateExample />
//       <EffectExample />
//     </div>
//   );
// }

// This page is the main page in the react application.
// It is located at the root of the app directory.
// The Home component is exported as the default export.
// Default exports can be explained as the main entry point of a module.
// In this case, the Home component is the main entry point of the app/page.js file.
// The Home component returns a simple div with a message.
// This is a simple example of a React component in Next.js.
