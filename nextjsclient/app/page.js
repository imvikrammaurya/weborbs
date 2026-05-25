"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "../components/public/HeroSection";
import Process from "../components/public/Process";
import WhatWeDo from "../components/public/WhatWeDo";
import Questions from "../components/public/Questions";
import Why from "../components/public/Why";
import ClientVoice from "../components/public/ClientVoice";
import WhatWeBuild from "@/components/public/WhatWeBuild";

const BookingModal = dynamic(() => import("../components/public/BookingModal"), { ssr: false });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <HeroSection openModal={openModal} />
      <WhatWeBuild />
      <Why />
      <Process />
      <ClientVoice />
      <Questions openModal={openModal} />

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
