import React, { useState } from "react";
import HeroSection from "./HeroSection";
import Process from "./Process";
import WhatWeDo from "./WhatWeDo";
import Questions from "./Questions";
import ClientVoice from "./ClientVoice";
import Why from "./Why";
import BookingModal from "./BookingModal";

export default function AllComponents() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <HeroSection openModal={openModal} />

      <WhatWeDo />
      <Why />
      <Process />
      <ClientVoice />
      <Questions openModal={openModal} />

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
