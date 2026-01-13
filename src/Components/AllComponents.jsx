import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Process from "./Process";
import Questions from "./Questions";
import WhatWeDo from "./WhatWeDo";

export default function AllComponents() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <Process />
      <Questions />
    </div>
  );
}
