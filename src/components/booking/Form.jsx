"use client";

import { useState } from "react";

import {
  HiUser,
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiCalendarDays,
  HiClock,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

import services from "./services";
import Field from "./Field";
import SubmitButton from "./SubmitButton";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const inputClass = `
w-full
h-[54px]
sm:h-[58px]
lg:h-[62px]
rounded-xl
lg:rounded-2xl
border
border-[#E5E7EB]
bg-[#FCFCFD]
pl-14
lg:pl-[68px]
pr-4
lg:pr-5
text-sm
lg:text-[15px]
outline-none
transition-all
duration-300
focus:border-[#C89B3C]
focus:bg-white
focus:shadow-[0_0_0_4px_rgba(200,155,60,.12)]
`;

const selectClass = `
${inputClass}
appearance-none
cursor-pointer
`;

const textareaClass = `
w-full
min-h-[130px]
lg:min-h-[150px]
rounded-xl
lg:rounded-2xl
border
border-[#E5E7EB]
bg-[#FCFCFD]
pt-4
pl-14
lg:pl-[68px]
pr-4
lg:pr-5
text-sm
lg:text-[15px]
outline-none
resize-none
transition-all
duration-300
focus:border-[#C89B3C]
focus:bg-white
focus:shadow-[0_0_0_4px_rgba(200,155,60,.12)]
`;

export default function Form() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validate() {
    const err = {};

    if (!form.name.trim())
      err.name = "Name is required";

    if (!form.phone.trim())
      err.phone = "Phone number is required";

    if (!form.service)
      err.service = "Please select a service";

    if (!form.date)
      err.date = "Choose a date";

    if (!form.time)
      err.time = "Choose a time";

    if (!form.address.trim())
      err.address = "Address is required";

    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      err.email = "Enter a valid email";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  }

async function handleSubmit(e) {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to submit booking.");
    }

    alert("Booking request submitted successfully!");

    setForm(initialForm);
    setErrors({});
  } catch (error) {
    console.error(error);
    alert(error.message || "Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
                {/* Full Name */}

        <Field
          label="Full Name *"
          icon={HiUser}
          error={errors.name}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
             style={{
    paddingLeft: "72px",
  }}
          />
        </Field>

        {/* Phone */}

        <Field
          label="Phone Number *"
          icon={HiPhone}
          error={errors.phone}
        >
          <input
            type="tel"
            name="phone"
            placeholder="(867) 447-1500"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
             style={{
    paddingLeft: "72px",
  }}
          />
        </Field>

        {/* Email */}

        <Field
          label="Email (Optional)"
          icon={HiEnvelope}
          error={errors.email}
        >
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
             style={{
    paddingLeft: "72px",
  }}
          />
        </Field>

        {/* Service */}

        <Field
          label="Select Service *"
          icon={HiChatBubbleLeftRight}
          error={errors.service}
        >
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={selectClass}
             style={{
    paddingLeft: "72px",
  }}
          >
            <option value="">Choose a Service</option>

            {services.map((item) => (
              <option
                key={item.id}
                value={item.name}
              >
                {item.name}
              </option>
            ))}
          </select>
        </Field>

        {/* Preferred Date */}

        <Field
          label="Preferred Date *"
          icon={HiCalendarDays}
          error={errors.date}
        >
          <input
            type="date"
            name="date"
            min={new Date().toISOString().split("T")[0]}
            value={form.date}
            onChange={handleChange}
            className={inputClass}
             style={{
    paddingLeft: "72px",paddingRight: "12px"
  }}
          />
        </Field>

        {/* Preferred Time */}

        <Field
          label="Preferred Time *"
          icon={HiClock}
          error={errors.time}
        >
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            className={selectClass}
             style={{
    paddingLeft: "72px",
  }}
          >
            <option value="">Select Time</option>

            {timeSlots.map((slot) => (
              <option
                key={slot}
                value={slot}
              >
                {slot}
              </option>
            ))}
          </select>
        </Field>

        {/* Address */}

        <div className="md:col-span-2">
          <Field
            label="Service Address *"
            icon={HiMapPin}
            error={errors.address}
          >
            <input
              type="text"
              name="address"
              placeholder="123 Main Street, Toronto"
              autoComplete="street-address"
              value={form.address}
              onChange={handleChange}
              className={inputClass}
               style={{
    paddingLeft: "72px",
  }}
            />
          </Field>
        </div>

        {/* Additional Details */}

        <div className="md:col-span-2">
          <Field
            label="Additional Details (Optional)"
            icon={HiChatBubbleLeftRight}
            textarea
            error={errors.message}
          >
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us more about your plumbing or heating issue..."
              value={form.message}
              onChange={handleChange}
              className={textareaClass}
                style={{
    paddingLeft: "72px", paddingTop: "20px",
  }}
            />
          </Field>
        </div>
              </div>

      {/* Submit Button */}

      <div className="mt-8 lg:mt-10">
        <SubmitButton loading={loading}>
          Request Free Estimate
        </SubmitButton>
      </div>
    </form>
  );
}