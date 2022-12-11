import React, { Fragment } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

function Home() {
  return (
    <div
      className="flex flex-col h-[100vh] pt-[3rem] mt-0 overflow-y-scroll 
    hide-scrollbar scroll-smooth snap-start snap-y snap-mandatory"
    >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default Home;
