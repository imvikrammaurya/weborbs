import React, { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const BookingModal = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState("Today");
  const [selectedTime, setSelectedTime] = useState(null);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    contactNumber: "",
    description: "",
  });
  const [phoneError, setPhoneError] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;

    // Check if the last entered character is not a number
    if (/[^0-9]/.test(inputValue)) {
      setPhoneError("Only numbers are allowed");
      return;
    }

    if (inputValue.length > 10) {
      return;
    }

    setPhoneError("");
    setFormData((prev) => ({ ...prev, contactNumber: inputValue }));
  };

  const timeSlots = [
    "1:00 – 2:00 PM",
    "3:00 – 4:00 PM",
    "5:00 – 6:00 PM",
    "7:00 – 8:00 PM",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                mass: 1,
              }}
              className="bg-white/90 backdrop-blur-lg w-full max-w-lg rounded-3xl shadow-2xl pointer-events-auto border border-white/20 overflow-hidden max-h-[90vh] overflow-y-auto transform-gpu"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Book a Free Call
                  </h2>
                  <p className="text-sm text-gray-500 font-medium mt-1">
                    Step 1 of 1 • Takes less than 60 seconds
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Step 1: Day Selector */}
                <div className="flex p-1.5 bg-gray-100/80 rounded-full border border-gray-200/50">
                  <LayoutGroup id="booking-modal-day-toggle">
                    {["Today", "Tomorrow"].map((day) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className="relative flex-1 py-2 text-sm font-semibold rounded-full z-0 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                      >
                        {selectedDay === day && (
                          <motion.div
                            layoutId="booking-modal-pill"
                            className="absolute inset-0 bg-bigchill rounded-full shadow-[0_0_15px_rgba(124,58,237,0.3)] z-[-1]"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                        <span
                          className={`relative z-10 transition-colors duration-200 ${
                            selectedDay === day
                              ? "text-white"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {day}
                        </span>
                      </button>
                    ))}
                  </LayoutGroup>
                </div>

                {/* Step 2: User Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bigchill/20 focus:border-bigchill focus:shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bigchill/20 focus:border-bigchill focus:shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all duration-300"
                      placeholder="Company Ltd"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handlePhoneChange}
                      className={`w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                        phoneError
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-200 focus:ring-bigchill/20 focus:border-bigchill focus:shadow-[0_0_15px_rgba(124,58,237,0.1)]"
                      }`}
                      placeholder=" 767-123-4567"
                    />
                    {phoneError && (
                      <p className="text-xs text-red-500 font-medium pl-2 mt-1">
                        {phoneError}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 font-medium pl-2">
                      Used only to confirm your call. No spam.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">
                      Timing
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          setIsTimeDropdownOpen(!isTimeDropdownOpen)
                        }
                        className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-bigchill/20 focus:border-bigchill transition-all ${selectedTime ? "text-gray-900 font-medium" : "text-gray-500"}`}
                      >
                        <span>{selectedTime || "Select a time below..."}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isTimeDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Step 3: Time Slots (Dropdown) */}
                <AnimatePresence>
                  {isTimeDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => {
                              setSelectedTime(time);
                              setIsTimeDropdownOpen(false);
                            }}
                            className={`py-2 text-sm border rounded-lg transition-all ${
                              selectedTime === time
                                ? "border-bigchill bg-bigchill/5 text-bigchill font-medium ring-1 ring-bigchill"
                                : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step 4: Business Description */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Describe Your Business
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bigchill/20 focus:border-bigchill focus:shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-all duration-300"
                    placeholder="Tell us what you do and what you're looking to build."
                  />
                </div>

                {/* Step 5: CTA */}
                <div className="pt-2">
                  <button className="w-full py-3.5 bg-bigchill text-white font-semibold rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:brightness-110 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-bigchill/20 flex items-center justify-center gap-2">
                    Book My Free Call
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3 font-medium">
                    No commitment • Free 10-minute call
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
