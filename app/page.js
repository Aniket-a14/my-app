import Navbar from "./Component/Navbar";
//Navbar component is imported from the Component directory.


export default function Home() {
  return (
    <div>
      Hi I am home page
      <Navbar/>
    </div>
  );
}

// This page is the main page in the react application.
// It is located at the root of the app directory.
// The Home component is exported as the default export.
// Default exports can be explained as the main entry point of a module.
// In this case, the Home component is the main entry point of the app/page.js file.
// The Home component returns a simple div with a message.
// This is a simple example of a React component in Next.js.
