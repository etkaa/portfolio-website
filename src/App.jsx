import { Fragment } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="my-0 mx-0 py-0 px-0 w-screen h-[100dvh] overflow-y-hidden hide-scrollbar">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
