import EffectExample from "./Component/EffectEaxmple";
import StateExample from "./Component/StateExample";
import RefExample from "./Component/RefExample";


export default function Home() {
  return (
    <div>
      <RefExample/>
      <StateExample />
      <EffectExample />
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
