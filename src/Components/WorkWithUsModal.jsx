import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle,
  Upload,
  Briefcase,
  User,
  DollarSign,
  Clock,
  Shield,
  Monitor,
  AlertCircle,
} from "lucide-react";

const WorkWithUsModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    city: "",
    linkedin: "",
    github: "",
    role: "",
    experience: "",
    skills: "",
    secondarySkills: "",
    status: "",
    availability: "",
    preference: {
      freelance: false,
      contract: false,
      longTerm: false,
    },
    resume: null,
    portfolio: "",
    projects: "",
    strongestSkill: "",
    currentSalary: "",
    expectedSalary: "",
    paymentModel: "",
    deadlines: "",
    communication: "",
    teamwork: "",
    versionControl: "",
    laptop: "",
    internet: "",
    meetings: "",
    hours: "",
    timeSlot: "",
    whyWeborbs: "",
    goodFit: "",
    declaration: {
      trueInfo: false,
      freelanceBasis: false,
      professionalism: false,
    },
  });

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      if (isSubmitted) {
        setTimeout(() => {
          setIsSubmitted(false);
          setErrors({});
          setIsFormValid(false);
          setFormData({
            fullName: "",
            age: "",
            email: "",
            phone: "",
            city: "",
            linkedin: "",
            github: "",
            role: "",
            experience: "",
            skills: "",
            secondarySkills: "",
            status: "",
            availability: "",
            preference: { freelance: false, contract: false, longTerm: false },
            resume: null,
            portfolio: "",
            projects: "",
            strongestSkill: "",
            currentSalary: "",
            expectedSalary: "",
            paymentModel: "",
            deadlines: "",
            communication: "",
            teamwork: "",
            versionControl: "",
            laptop: "",
            internet: "",
            meetings: "",
            hours: "",
            timeSlot: "",
            whyWeborbs: "",
            goodFit: "",
            declaration: {
              trueInfo: false,
              freelanceBasis: false,
              professionalism: false,
            },
          });
        }, 500);
      } else {
        setErrors({});
        setIsFormValid(false);
      }
    }
  }, [isOpen, isSubmitted]);

  const validateField = (name, value) => {
    let error = null;

    switch (name) {
      case "fullName":
        if (!value || value.trim().length === 0)
          error = "Full Name is required";
        break;
      case "age":
        if (!value) error = "Age is required";
        else if (parseInt(value) < 18 || parseInt(value) > 45)
          error = "Age must be between 18 and 45";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Invalid email format";
        break;
      case "phone":
        if (!value) error = "Phone number is required";
        else if (value.length !== 10)
          error = "Phone number must be exactly 10 digits";
        break;
      case "linkedin":
      case "github":
      case "portfolio":
        if (value && !/^https?:\/\//.test(value))
          error = "URL must start with http:// or https://";
        break;
      case "whyWeborbs":
      case "goodFit":
      case "projects":
      case "strongestSkill":
      case "skills":
        if (!value) error = "This field is required";
        else if (value.length < 20)
          error = "Please provide more detail (min 20 chars)";
        break;
      case "currentSalary":
      case "expectedSalary":
        if (!value) error = "This field is required";
        break;
      // Add other logical validations if needed (most are covered by masking or just 'required')
      default:
        break;
    }

    return error;
  };

  // Check form for errors on submit
  const validateFormOnSubmit = () => {
    const newErrors = {};

    // Required Fields List
    const requiredFields = [
      "fullName",
      "age",
      "email",
      "phone",
      "city",
      "role",
      "experience",
      "skills",
      "status",
      "availability",
      "projects",
      "strongestSkill",
      "expectedSalary",
      "paymentModel",
      "deadlines",
      "communication",
      "teamwork",
      "versionControl",
      "laptop",
      "internet",
      "meetings",
      "hours",
      "whyWeborbs",
      "goodFit",
      "currentSalary",
    ];

    // Check each required field
    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;

      // Also check empty strings for fields not covered directly by validateField switch cases (if any)
      if (
        !newErrors[field] &&
        (!formData[field] ||
          (typeof formData[field] === "string" && !formData[field].trim()))
      ) {
        newErrors[field] = "This field is required";
      }
    });

    // Resume
    if (!formData.resume) newErrors["resume"] = "Resume/CV is required";

    // Preference
    if (
      !formData.preference.freelance &&
      !formData.preference.contract &&
      !formData.preference.longTerm
    ) {
      newErrors["preference"] = "Please select at least one work preference";
    }

    // Declaration
    if (!formData.declaration.trueInfo)
      newErrors["declaration.trueInfo"] =
        "You must confirm the information is true";
    if (!formData.declaration.freelanceBasis)
      newErrors["declaration.freelanceBasis"] =
        "You must acknowledge the work basis";
    if (!formData.declaration.professionalism)
      newErrors["declaration.professionalism"] =
        "You must agree to professionalism terms";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = value;

    // --- Input Masking (Blocking Invalid Characters) ---
    if (name === "fullName") {
      // Allows alphabets and spaces only
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    } else if (
      name === "age" ||
      name === "phone" ||
      name === "currentSalary" ||
      name === "expectedSalary"
    ) {
      // Allows numbers only
      if (!/^\d*$/.test(value)) return;
    }

    // --- State Updates and Real-Time Validation ---

    if (type === "checkbox") {
      if (name.includes(".")) {
        const [parent, child] = name.split(".");
        setFormData((prev) => ({
          ...prev,
          [parent]: { ...prev[parent], [child]: checked },
        }));
        // Clear errors on change
        if (errors[name]) {
          setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
          });
        }
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
        if (name.startsWith("preference")) {
          // Check preference validity immediately
          // We need to wait for state update or check logic with new value
          // Simplified: We rely on useEffect for overall form validity, but for error clearing:
          const newPref = {
            ...formData.preference,
            [name.replace("preference.", "")]: checked,
          };
          if (newPref.freelance || newPref.contract || newPref.longTerm) {
            setErrors((prev) => {
              const newErrors = { ...prev };
              delete newErrors["preference"];
              return newErrors;
            });
          }
        }
      }
    } else if (type === "file") {
      if (e.target.files[0]) {
        if (e.target.files[0].type !== "application/pdf") {
          setErrors((prev) => ({
            ...prev,
            [name]: "Only PDF files are allowed",
          }));
          // Don't set file if invalid
          return;
        } else {
          setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
          setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
          });
        }
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: newValue }));

      // Validate immediately
      const error = validateField(name, newValue);
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (error) {
          newErrors[name] = error;
        } else {
          delete newErrors[name];
        }
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateFormOnSubmit();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to the first error
      const firstErrorFieldKey = Object.keys(newErrors)[0];
      const firstErrorField = document.querySelector(
        `[name="${firstErrorFieldKey}"]`,
      );

      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
        firstErrorField.focus();
      } else if (firstErrorFieldKey === "preference") {
        const prefSection = document.getElementById("preference-section");
        if (prefSection)
          prefSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Here you would normally handle the API call
    console.log("Form Submitted", formData);
    setIsSubmitted(true);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setErrors({});
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
  };

  if (!isOpen) return null;

  // Helper for input rendering
  const renderInput = (
    label,
    name,
    type = "text",
    placeholder = "",
    required = false,
    colSpan = 1,
  ) => (
    <div className={`space-y-2 ${colSpan === 2 ? "md:col-span-2" : ""}`}>
      <label className="text-gray-400 text-sm">
        {label} {required && "*"}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full bg-white/5 border rounded-lg p-3 text-white focus:outline-none transition-colors ${
            errors[name]
              ? "border-red-500/50 focus:border-red-500 bg-red-500/5"
              : "border-white/10 focus:border-[var(--color-bigchill)]"
          }`}
          placeholder={placeholder}
        />
        {errors[name] && (
          <div className="absolute right-3 top-3 text-red-500">
            <AlertCircle size={18} />
          </div>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );

  const renderSelect = (label, name, options, required = false) => (
    <div className="space-y-2">
      <label className="text-gray-400 text-sm">
        {label} {required && "*"}
      </label>
      <div className="relative">
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`w-full bg-white/5 border rounded-lg p-3 text-white focus:outline-none transition-colors appearance-none ${
            errors[name]
              ? "border-red-500/50 focus:border-red-500 bg-red-500/5"
              : "border-white/10 focus:border-[var(--color-bigchill)]"
          }`}
        >
          <option value="" className="bg-[#0a0a0a]">
            Select {label.replace("*", "").trim()}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0a0a0a]">
              {opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );

  const renderTextarea = (
    label,
    name,
    rows = 3,
    required = false,
    description = "",
  ) => (
    <div className="space-y-2 md:col-span-2">
      <label className="text-gray-400 text-sm">
        {label} {required && "*"}
        {description && (
          <span className="text-xs text-gray-500 ml-1">({description})</span>
        )}
      </label>
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleChange}
        rows={rows}
        className={`w-full bg-white/5 border rounded-lg p-3 text-white focus:outline-none transition-colors ${
          errors[name]
            ? "border-red-500/50 focus:border-red-500 bg-red-500/5"
            : "border-white/10 focus:border-[var(--color-bigchill)]"
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-white">
                  Work With Us
                </h2>
                <p className="text-[var(--color-bigchill)] text-sm font-semibold tracking-wide mt-1">
                  JOIN THE WEBORBS NETWORK
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-[var(--color-bigchill)]/20 rounded-full flex items-center justify-center text-[var(--color-bigchill)]">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-white">
                    Application Received
                  </h3>
                  <p className="text-gray-300 max-w-lg text-lg">
                    Thank you for applying to Weborbs. Our team will review your
                    application and contact you if your profile matches our
                    current requirements.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-8 py-3 bg-[var(--color-bigchill)] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-gray-300 mb-8 border-l-4 border-[var(--color-bigchill)] pl-4 py-1 bg-white/5 rounded-r-lg">
                    We’re always looking to collaborate with skilled developers,
                    designers, testers, and technical professionals across
                    India. Fill out this form to apply and become part of the
                    Weborbs freelance network.{" "}
                    <span className="font-semibold text-white">
                      Only serious and committed professionals should apply.
                    </span>
                  </p>

                  {Object.keys(errors).length > 0 && (
                    <div className="mb-6 mx-auto p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start space-x-3 w-fit">
                      <AlertCircle
                        className="text-red-500 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <div>
                        <h4 className="text-red-500 font-bold text-sm">
                          Please fix the highlighted errors before submitting.
                        </h4>
                      </div>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-12"
                    noValidate
                  >
                    {/* Core Personal Details */}
                    <section className="space-y-6">
                      <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                        <User
                          size={24}
                          className="text-[var(--color-bigchill)]"
                        />
                        <h3>Core Personal Details</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {renderInput(
                          "Full Name",
                          "fullName",
                          "text",
                          "John Doe",
                          true,
                        )}
                        {renderInput("Age", "age", "number", "25", true)}
                        {renderInput(
                          "Email Address",
                          "email",
                          "email",
                          "john@example.com",
                          true,
                        )}
                        {renderInput(
                          "Phone Number / WhatsApp",
                          "phone",
                          "tel",
                          "+91 9876543210",
                          true,
                        )}
                        {renderInput(
                          "Current City & State",
                          "city",
                          "text",
                          "Mumbai, Maharashtra",
                          true,
                          2,
                        )}
                        {renderInput(
                          "LinkedIn Profile URL",
                          "linkedin",
                          "url",
                          "linkedin.com/in/username",
                        )}
                        {renderInput(
                          "GitHub / Portfolio Website",
                          "github",
                          "url",
                          "github.com/username",
                        )}
                      </div>
                    </section>

                    {/* Professional Details */}
                    <section className="space-y-6">
                      <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                        <Briefcase
                          size={24}
                          className="text-[var(--color-bigchill)]"
                        />
                        <h3>Professional Details</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {renderSelect(
                          "Primary Role / Designation",
                          "role",
                          [
                            "Front-End Developer",
                            "Back-End Developer",
                            "Full-Stack Developer",
                            "Mobile App Developer",
                            "UI/UX Designer",
                            "QA / Tester",
                            "DevOps / Cloud Engineer",
                            "Other",
                          ],
                          true,
                        )}

                        {renderSelect(
                          "Years of Experience",
                          "experience",
                          ["0–1 Year", "1–2 Years", "2–4 Years", "4+ Years"],
                          true,
                        )}

                        {renderTextarea(
                          "Primary Skill Stack",
                          "skills",
                          3,
                          true,
                          "React, Next.js, Node.js, MongoDB, AWS, Figma, etc.",
                        )}

                        {renderInput(
                          "Secondary Skills",
                          "secondarySkills",
                          "text",
                          "",
                          false,
                          2,
                        )}

                        {renderSelect(
                          "Current Employment Status",
                          "status",
                          [
                            "Freelancer",
                            "Working Full-Time",
                            "Part-Time",
                            "Student",
                            "Open to Freelance Projects Only",
                          ],
                          true,
                        )}

                        {renderSelect(
                          "Availability",
                          "availability",
                          [
                            "Immediately",
                            "Within 1 Week",
                            "Within 15 Days",
                            "Within 1 Month",
                          ],
                          true,
                        )}

                        <div
                          id="preference-section"
                          className="space-y-2 md:col-span-2"
                        >
                          <label
                            className={`text-sm block mb-2 ${errors.preference ? "text-red-500" : "text-gray-400"}`}
                          >
                            Work Preference *{" "}
                            {errors.preference && (
                              <span className="text-xs font-normal ml-2">
                                ({errors.preference})
                              </span>
                            )}
                          </label>
                          <div
                            className={`flex flex-wrap gap-4 p-3 rounded-lg border transition-colors ${
                              errors.preference
                                ? "border-red-500/50 bg-red-500/5"
                                : "border-transparent"
                            }`}
                          >
                            {["freelance", "contract", "longTerm"].map(
                              (key) => (
                                <label
                                  key={key}
                                  className="flex items-center space-x-2 cursor-pointer bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-[var(--color-bigchill)] transition-all"
                                >
                                  <input
                                    type="checkbox"
                                    name={`preference.${key}`}
                                    checked={formData.preference[key]}
                                    onChange={handleChange}
                                    className="form-checkbox text-[var(--color-bigchill)] rounded border-gray-600 focus:ring-0 focus:ring-offset-0 bg-[#0a0a0a]"
                                  />
                                  <span className="text-white capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </span>
                                </label>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Experience & Proof of Work */}
                    <section className="space-y-6">
                      <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                        <Upload
                          size={24}
                          className="text-[var(--color-bigchill)]"
                        />
                        <h3>Experience & Proof of Work</h3>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-gray-400 text-sm">
                            Upload Resume / CV (PDF only) *
                          </label>
                          <div
                            className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors bg-white/5 ${
                              errors.resume
                                ? "border-red-500/50 bg-red-500/5 hover:border-red-500"
                                : "border-white/20 hover:border-[var(--color-bigchill)]/50"
                            }`}
                          >
                            <input
                              type="file"
                              name="resume"
                              accept=".pdf"
                              onChange={handleChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="pointer-events-none">
                              <Upload
                                className={`mx-auto h-8 w-8 mb-2 ${errors.resume ? "text-red-500" : "text-gray-400"}`}
                              />
                              <p
                                className={`text-sm ${errors.resume ? "text-red-400" : "text-gray-300"}`}
                              >
                                {formData.resume
                                  ? formData.resume.name
                                  : "Click to upload or drag and drop PDF"}
                              </p>
                              {errors.resume && (
                                <p className="text-xs text-red-500 mt-2">
                                  {errors.resume}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {renderInput(
                            "Portfolio Link",
                            "portfolio",
                            "url",
                            "",
                            false,
                          )}
                          {renderInput(
                            "GitHub Profile",
                            "github",
                            "url",
                            "",
                            false,
                          )}
                        </div>

                        {renderTextarea(
                          "Describe Your Recent Projects",
                          "projects",
                          4,
                          true,
                          "Briefly explain 1–3 projects, your role, and technologies used",
                        )}
                        {renderTextarea(
                          "Your Strongest Skill",
                          "strongestSkill",
                          2,
                          true,
                          "What are you best at?",
                        )}
                      </div>
                    </section>

                    {/* Compensation Details */}
                    <section className="space-y-6">
                      <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                        <DollarSign
                          size={24}
                          className="text-[var(--color-bigchill)]"
                        />
                        <h3>Compensation Details</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {renderInput(
                          "Current Salary / Monthly Earnings",
                          "currentSalary",
                          "text",
                          "",
                          true,
                          1,
                        )}
                        {renderInput(
                          "Expected Salary / Project Rate",
                          "expectedSalary",
                          "text",
                          "",
                          true,
                        )}
                        {renderSelect(
                          "Preferred Payment Model",
                          "paymentModel",
                          ["Per Project", "Monthly", "Hourly"],
                          true,
                        )}
                      </div>
                    </section>

                    {/* Work Style & Reliability */}
                    <section className="space-y-6">
                      <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                        <Shield
                          size={24}
                          className="text-[var(--color-bigchill)]"
                        />
                        <h3>Work Style & Reliability</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {renderSelect(
                          "Are you comfortable working with deadlines?",
                          "deadlines",
                          ["Yes", "No"],
                          true,
                        )}
                        {renderSelect(
                          "Can you commit to timely communication?",
                          "communication",
                          ["Yes", "No"],
                          true,
                        )}
                        {renderSelect(
                          "Have you worked in a team environment?",
                          "teamwork",
                          ["Yes", "No"],
                          true,
                        )}
                        {renderSelect(
                          "Experience with version control (Git)?",
                          "versionControl",
                          ["Yes", "No"],
                          true,
                        )}
                      </div>
                    </section>

                    {/* Technical Readiness */}
                    <section className="space-y-6">
                      <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                        <Monitor
                          size={24}
                          className="text-[var(--color-bigchill)]"
                        />
                        <h3>Technical Readiness</h3>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        {renderSelect(
                          "Personal laptop/PC?",
                          "laptop",
                          ["Yes", "No"],
                          true,
                        )}
                        {renderSelect(
                          "Stable internet?",
                          "internet",
                          ["Yes", "No"],
                          true,
                        )}
                        {renderSelect(
                          "Online meetings?",
                          "meetings",
                          ["Yes", "No"],
                          true,
                        )}
                      </div>
                    </section>

                    {/* Availability Commitment */}
                    <section className="space-y-6">
                      <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                        <Clock
                          size={24}
                          className="text-[var(--color-bigchill)]"
                        />
                        <h3>Availability Commitment</h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {renderSelect(
                          "Hours per day to dedicate",
                          "hours",
                          ["1–2 hours", "2–4 hours", "4–6 hours", "6+ hours"],
                          true,
                        )}
                        {renderInput(
                          "Preferred Working Time Slot",
                          "timeSlot",
                          "text",
                          "e.g. 6 PM - 10 PM IST",
                        )}
                      </div>
                    </section>

                    {/* Why Weborbs ? */}
                    <section className="space-y-6">
                      <div className="flex items-center space-x-2 text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                        <Shield
                          size={24}
                          className="text-[var(--color-bigchill)]"
                        />
                        <h3>Why Weborbs?</h3>
                      </div>

                      <div className="space-y-6">
                        {renderTextarea(
                          "Why do you want to work with Weborbs?",
                          "whyWeborbs",
                          3,
                          true,
                        )}
                        {renderTextarea(
                          "What makes you a good fit for our team?",
                          "goodFit",
                          3,
                          true,
                        )}
                      </div>
                    </section>

                    {/* Declaration */}
                    <section className="space-y-4 pt-4 border-t border-white/10">
                      <h3 className="text-xl font-bold text-white mb-4">
                        Declaration & Agreement
                      </h3>

                      <label className="flex items-start space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="declaration.trueInfo"
                          checked={formData.declaration.trueInfo}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className={`mt-1 form-checkbox rounded border-gray-600 focus:ring-0 focus:ring-offset-0 bg-[#0a0a0a] ${errors["declaration.trueInfo"] ? "text-red-500 border-red-500" : "text-[var(--color-bigchill)]"}`}
                        />
                        <span
                          className={`${errors["declaration.trueInfo"] ? "text-red-500" : "text-gray-300"} text-sm group-hover:text-white transition-colors`}
                        >
                          I confirm that all the information provided is true
                          and accurate.
                        </span>
                      </label>

                      <label className="flex items-start space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="declaration.freelanceBasis"
                          checked={formData.declaration.freelanceBasis}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className={`mt-1 form-checkbox rounded border-gray-600 focus:ring-0 focus:ring-offset-0 bg-[#0a0a0a] ${errors["declaration.freelanceBasis"] ? "text-red-500 border-red-500" : "text-[var(--color-bigchill)]"}`}
                        />
                        <span
                          className={`${errors["declaration.freelanceBasis"] ? "text-red-500" : "text-gray-300"} text-sm group-hover:text-white transition-colors`}
                        >
                          I understand that Weborbs works primarily on a
                          freelance and contract basis.
                        </span>
                      </label>

                      <label className="flex items-start space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="declaration.professionalism"
                          checked={formData.declaration.professionalism}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className={`mt-1 form-checkbox rounded border-gray-600 focus:ring-0 focus:ring-offset-0 bg-[#0a0a0a] ${errors["declaration.professionalism"] ? "text-red-500 border-red-500" : "text-[var(--color-bigchill)]"}`}
                        />
                        <span
                          className={`${errors["declaration.professionalism"] ? "text-red-500" : "text-gray-300"} text-sm group-hover:text-white transition-colors`}
                        >
                          I agree to maintain professionalism, deadlines, and
                          confidentiality if selected.
                        </span>
                      </label>
                    </section>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="w-full py-4 text-white font-bold text-lg rounded-full transition-all transform block text-center shadow-lg bg-[var(--color-bigchill)] hover:bg-opacity-90 hover:shadow-[var(--color-bigchill)]/20 hover:-translate-y-1 cursor-pointer"
                      >
                        Apply to Work With Weborbs
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WorkWithUsModal;
