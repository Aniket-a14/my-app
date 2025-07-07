export default async function UserPage(props) {
  const params = await props.params;
  const username =  params?.username
  const email = params?.email

  return (
    <div className="p-6">
      <h1 className="text-2xl">Welcome, {username}!</h1>
      <p>Your email is {email}</p>
    </div>
  )
}



// export default async function UserProfile(props) {
//   const params = await props.params;
//   const username = params?.username;

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <h1 className="text-3xl font-bold mb-4">User Profile</h1>
//       <p className="text-xl">
//         Hello, <span className="font-semibold text-blue-600">{username}</span>!
//       </p>
//     </div>
//   );
// }

// --- Explanation ---
/*
Dynamic Routing in Next.js App Router:

1. File Structure:
   - To create a dynamic route, use square brackets in the folder name, e.g., app/user/[username]/page.js
   - This allows URLs like /user/aniket or /user/pallavi to be handled by the same component.

2. Accessing Route Parameters:
   - In the latest Next.js, route parameters (like username) are provided as an async prop.
   - You must await props.params to get the params object.

   Syntax:
   export default async function Page(props) {
     const params = await props.params;
     // Now you can use params.username
   }

3. Example:
   If you visit /user/aniket, then:
   - params.username will be 'aniket'
   - The page will display: Hello, aniket!

4. Why async/await?
   - Next.js may fetch params asynchronously for advanced routing and server features.
   - Always use 'await' as shown above to avoid errors.

5. Full Example:
   export default async function UserProfile(props) {
     const params = await props.params;
     const username = params?.username;
     return <div>Hello, {username}!</div>;
   }

6. Summary:
   - Use async function for your page.
   - Await props.params to get route parameters.
   - Use params.username (or any other param) in your component.
*/
