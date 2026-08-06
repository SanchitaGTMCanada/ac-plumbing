"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import {
  HiUser,
  HiPhone,
  HiEnvelope,
  HiBriefcase,
  HiChatBubbleLeftRight,
  HiArrowUpTray,
} from "react-icons/hi2";

import CareerField from "./CareerField";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  job: "",
  message: "",
  resume: null,
};

const inputClass = `
w-full
h-12
sm:h-14
lg:h-16

rounded-xl
lg:rounded-2xl

border
border-[#E7EAF0]

bg-white

text-[14px]
sm:text-[15px]

placeholder:text-[#98A2B3]

transition-all
duration-300

outline-none

focus:border-[#C89B3C]
focus:shadow-[0_0_0_5px_rgba(200,155,60,.12)]

pr-5
`;

const textareaClass = `
w-full

min-h-[120px]
sm:min-h-[150px]

rounded-xl
lg:rounded-2xl

border
border-[#E7EAF0]

bg-white

text-[14px]
sm:text-[15px]

placeholder:text-[#98A2B3]

transition-all
duration-300

outline-none

resize-none

focus:border-[#C89B3C]
focus:shadow-[0_0_0_5px_rgba(200,155,60,.12)]

pr-5
`;

export default function CareerForm({ onSuccess , handleSubmit }) {
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    const formData = new FormData();

    formData.append("fullName", form.fullName);
    formData.append("phone", form.phone);
    formData.append("email", form.email);
    formData.append("job", form.job);
    formData.append("message", form.message);

    if (form.resume) {
      formData.append("resume", form.resume);
    }

    const response = await fetch("/api/career", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Something went wrong.");
    }

    await Swal.fire({
      icon: "success",
      title: "Application Submitted!",
      text: "Thank you for applying. Our hiring team will contact you shortly.",
      confirmButtonText: "Great!",
      confirmButtonColor: "#C89B3C",
      background: "#ffffff",
      color: "#123B67",
      customClass: {
        popup: "rounded-[24px]",
        confirmButton: "rounded-full px-8",
      },
      didOpen: () => {
        const popup = document.querySelector(".swal2-container");
        if (popup) {
          popup.style.zIndex = "99999";
        }
      },
    });

    setForm(initialForm);
    setErrors({});

    onSuccess?.();

  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Submission Failed",
      text: error.message || "Something went wrong. Please try again.",
      confirmButtonText: "OK",
      confirmButtonColor: "#DC2626",
      background: "#ffffff",
      color: "#123B67",
      customClass: {
        popup: "rounded-[24px]",
        confirmButton: "rounded-full px-8",
      },
      didOpen: () => {
        const popup = document.querySelector(".swal2-container");
        if (popup) {
          popup.style.zIndex = "99999";
        }
      },
    });
  } finally {
    setLoading(false);
  }
}

  function handleChange(e) {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validate() {
    const err = {};

    if (!form.fullName.trim())
      err.fullName = "Full name is required.";

    if (!form.phone.trim())
      err.phone = "Phone number is required.";

    if (!form.email.trim())
      err.email = "Email is required.";

    if (!form.job.trim())
      err.job = "Job title is required.";

    if (!form.resume)
      err.resume = "Please upload your resume.";

    setErrors(err);

    return Object.keys(err).length === 0;
  }
  return (
  <form
    onSubmit={handleSubmit}
    className="space-y-5 sm:space-y-6"
  >
    {/* Full Name */}

    <CareerField
      label="Full Name *"
      icon={HiUser}
      error={errors.fullName}
    >
      <input
        type="text"
        name="fullName"
        placeholder="John Smith"
        value={form.fullName}
        onChange={handleChange}
        className={inputClass}
        style={{
          paddingLeft: "56px",
        }}
      />
    </CareerField>

    {/* Phone */}

    <CareerField
      label="Phone Number *"
      icon={HiPhone}
      error={errors.phone}
    >
      <input
        type="tel"
        name="phone"
        placeholder="+1 (867) 447-1500"
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
        style={{
          paddingLeft: "56px",
        }}
      />
    </CareerField>

    {/* Email */}

    <CareerField
      label="Email Address *"
      icon={HiEnvelope}
      error={errors.email}
    >
      <input
        type="email"
        name="email"
        placeholder="john@example.com"
        value={form.email}
        onChange={handleChange}
        className={inputClass}
        style={{
          paddingLeft: "56px",
        }}
      />
    </CareerField>

    {/* Job */}

    <CareerField
      label="Job Applying For *"
      icon={HiBriefcase}
      error={errors.job}
    >
      <input
        type="text"
        name="job"
        placeholder="e.g. Licensed Plumber"
        value={form.job}
        onChange={handleChange}
        className={inputClass}
        style={{
          paddingLeft: "56px",
        }}
      />
    </CareerField>

    {/* Resume */}

    <CareerField
      label="Upload Resume *"
      icon={HiArrowUpTray}
      error={errors.resume}
    >
      <label
        className="
          group
          flex
          h-12
          sm:h-14
          lg:h-16
          cursor-pointer
          items-center
          justify-between
          rounded-xl
          lg:rounded-2xl
          border-2
          border-dashed
          border-[#E6C56F]
          bg-[#FFFDF7]
          px-4
          transition-all
          duration-300
          hover:border-[#C89B3C]
          hover:bg-[#FFF7E5]
        "
      >
        <div
          className="flex items-center gap-3"
          style={{
            paddingLeft: "42px",
          }}
        >
          <span className="truncate text-[13px] sm:text-[15px] text-[#667085]">
            {form.resume
              ? form.resume.name
              : "Choose Resume (PDF, DOC, DOCX)"}
          </span>
        </div>

        <span
          className="
            rounded-full
            bg-[#123B67]
            px-3
            py-1.5
            text-[11px]
            font-semibold
            text-white
            transition-all
            duration-300
            group-hover:bg-[#C89B3C]
          "
        >
          Browse
        </span>

        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </CareerField>

    {/* Message */}

    <CareerField
      label="Message (Optional)"
      icon={HiChatBubbleLeftRight}
      textarea
      error={errors.message}
    >
      <textarea
        rows={5}
        name="message"
        placeholder="Tell us a little about yourself..."
        value={form.message}
        onChange={handleChange}
        className={textareaClass}
        style={{
          paddingLeft: "56px",
          paddingTop: "18px",
        }}
      />
    </CareerField>
        {/* Submit Button */}

    <button
      type="submit"
      disabled={loading}
      className="
        group
        relative
        mt-6
        sm:mt-8
        flex
        h-12
        sm:h-14
        lg:h-16
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        lg:rounded-full
        font-semibold
        text-[#123B67]
        transition-all
        duration-500
        disabled:cursor-not-allowed
        disabled:opacity-70
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(200,155,60,.35)]
      "
      style={{
        background:
          "linear-gradient(90deg,#FFF1BE 0%,#F4C46A 25%,#C89B3C 65%,#A77715 100%)",
      }}
    >
      {/* Shine Effect */}

      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
        "
      />

      {loading ? (
        <span className="flex items-center gap-3 relative z-10">
          <span
            className="
              h-5
              w-5
              animate-spin
              rounded-full
              border-[3px]
              border-[#123B67]
              border-t-transparent
            "
          />
          Submitting...
        </span>
      ) : (
        <span className="relative z-10 flex items-center gap-2">
          Submit Application

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      )}
    </button>
  </form>
);
}