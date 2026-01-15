import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Process from "./Process";
import WhatWeDo from "./WhatWeDo";
import Questions from "./Questions";
import ClientVoice from "./ClientVoice";

export default function AllComponents() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <Process />
      <ClientVoice />
      <Questions />
    </div>
  );
}
