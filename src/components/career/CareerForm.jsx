"use client";

import { useState } from "react";

import {
  HiUser,
  HiPhone,
  HiEnvelope,
  HiBriefcase,
  HiChatBubbleLeftRight,
  HiArrowUpTray,
} from "react-icons/hi2";

import CareerField from "./CareerField";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

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
h-[58px]
rounded-2xl
border
border-[#E5E7EB]
bg-[#FCFCFD]
pr-5
text-[15px]
outline-none
transition-all
duration-300
focus:border-[#C89B3C]
focus:bg-white
focus:shadow-[0_0_0_4px_rgba(200,155,60,.12)]
`;

const textareaClass = `
w-full
min-h-[140px]
rounded-2xl
border
border-[#E5E7EB]
bg-[#FCFCFD]
pt-4
pr-5
text-[15px]
outline-none
resize-none
transition-all
duration-300
focus:border-[#C89B3C]
focus:bg-white
focus:shadow-[0_0_0_4px_rgba(200,155,60,.12)]
`;

export default function CareerForm({ onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
      err.fullName = "Full name is required";

    if (!form.phone.trim())
      err.phone = "Phone number is required";

    if (!form.email.trim())
      err.email = "Email is required";

    if (!form.job.trim())
      err.job = "Job title is required";

    if (!form.resume)
      err.resume = "Please upload your resume";

    setErrors(err);

    return Object.keys(err).length === 0;
  }

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
        throw new Error(result.message);
      }

     await Swal.fire({
  icon: "success",
  title: "Application Submitted!",
  text: "Thank you for applying. Our team will contact you shortly.",
  confirmButtonText: "Great!",
  confirmButtonColor: "#C89B3C",
  background: "#ffffff",
  color: "#123B67",
  customClass: {
    popup: "rounded-[24px]",
    confirmButton: "rounded-full px-8",
  },
});

setForm(initialForm);

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
});
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-5">
        {/* Full Name */}

<CareerField
  label="Full Name *"
  icon={HiUser}
  error={errors.fullName}
>
  <input
    type="text"
    name="fullName"
    value={form.fullName}
    onChange={handleChange}
    placeholder="John Smith"
    className={inputClass}
    style={{ paddingLeft: "68px" }}
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
    value={form.phone}
    onChange={handleChange}
    placeholder="+1 (867) 447-1500"
    className={inputClass}
    style={{ paddingLeft: "68px" }}
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
    value={form.email}
    onChange={handleChange}
    placeholder="john@example.com"
    className={inputClass}
    style={{ paddingLeft: "68px" }}
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
    value={form.job}
    onChange={handleChange}
    placeholder="Plumber"
    className={inputClass}
    style={{ paddingLeft: "68px" }}
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
      flex
      h-[58px]
      cursor-pointer
      items-center
      rounded-2xl
      border
      border-dashed
      border-[#C89B3C]
      bg-[#FCFCFD]
      transition-all
      duration-300
      hover:bg-[#FFF9EC]
      hover:border-[#B68923]
    "
    style={{
      paddingLeft: "68px",
      paddingRight: "20px",
    }}
  >
    <span className="truncate text-[15px] text-[#667085]">
      {form.resume
        ? form.resume.name
        : "Upload Resume (PDF, DOC, DOCX)"}
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
    value={form.message}
    onChange={handleChange}
    placeholder="Tell us about yourself..."
    className={textareaClass}
    style={{ paddingLeft: "68px" , paddingTop: "25px"
    }}
  />
</CareerField>

</div>

<button
  type="submit"
  disabled={loading}
  className="
    mt-8
    h-[58px]
    w-full
    rounded-full
    font-semibold
    text-[#123B67]
    transition-all
    duration-300
    disabled:opacity-70
    disabled:cursor-not-allowed
    hover:-translate-y-1
    hover:shadow-[0_15px_35px_rgba(200,155,60,.35)]
  "
  style={{
    background:
      "linear-gradient(90deg,#FFE9A8 0%,#F4C46A 30%,#C89B3C 70%,#A77715 100%)",
  }}
>
  {loading ? "Submitting..." : "Submit Application"}
</button>

</form>
  );
}