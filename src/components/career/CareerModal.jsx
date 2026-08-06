"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { motion } from "framer-motion";

import {
  HiUser,
  HiPhone,
  HiEnvelope,
  HiBriefcase,
  HiArrowUpTray,
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

import { IoClose } from "react-icons/io5";

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

export default function CareerModal({
  open,
  onClose,
}) {
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const err = {};

    if (!form.fullName.trim())
      err.fullName = "Full name is required.";

    if (!form.phone.trim())
      err.phone = "Phone number is required.";

    if (!form.email.trim())
      err.email = "Email address is required.";

    if (!form.job.trim())
      err.job = "Job position is required.";

    if (!form.resume)
      err.resume = "Resume is required.";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
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
        title: "Application Submitted",
        text: "Thank you for applying.",
        confirmButtonColor: "#C89B3C",
      });

      setForm(initialForm);

      onClose();

    } catch (err) {

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: err.message,
      });

    } finally {
      setLoading(false);
    }
  };
    return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[9999]"
        onClose={onClose}
      
      >
        {/* Backdrop */}

        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#081F38]/70 backdrop-blur-md" />
        </TransitionChild>

        {/* Modal */}

        <div className="fixed inset-0 overflow-y-auto"   style={{padding:"10px"}}>
          <div className="flex min-h-full items-center justify-center p-4">

           <TransitionChild
  as={Fragment}
  enter="transform transition ease-out duration-300"
  enterFrom="opacity-0 translate-y-4 scale-95"
  enterTo="opacity-100 translate-y-0 scale-100"
  leave="transform transition ease-in duration-200"
  leaveFrom="opacity-100 translate-y-0 scale-100"
  leaveTo="opacity-0 translate-y-2 scale-98"
>
              <DialogPanel
              
            
                className="
                  relative
                  w-full
                  max-w-5xl
                  overflow-hidden
                  rounded-[32px]
                  bg-white
                  shadow-[0_30px_90px_rgba(0,0,0,.18)]
                "
              >

                {/* Close */}

                <button
                  onClick={onClose}
                  className="
                    absolute
                    right-5
                    top-3
                    
                    z-50
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-[#123B67]
                    hover:text-white
                  "
                >
                  <IoClose size={22} />
                </button>

          

               

                  {/* RIGHT PANEL */}

                  <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8 lg:p-10" style={{padding:"20px"}}>

                    <h3 className="text-3xl font-bold text-[#123B67]" style={{marginLeft:"4px"}}>
                      Apply Now
                    </h3>

                    <p className="mt-3 text-[#667085]" style={{marginLeft:"4px" ,marginBottom:"10px"}}>
                      Fill in the details below and upload your resume.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-8 space-y-6"
                    >
                      {/* Row 1 */}

<div className="grid gap-5 md:grid-cols-2">

  {/* Full Name */}

  <div style={{marginBottom:"15px"}}>

    <label className="mb-2 block text-sm font-semibold text-[#123B67]" style={{marginBottom:"7px", paddingLeft:"5px"}}>
      Full Name *
    </label>

    <div className="relative">

      <HiUser
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#123B67]"
      />

      <input
        type="text"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="John Smith"
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-[#E5E7EB]
          bg-[#FCFCFD]
          pl-12
          pr-4
          text-[15px]
          outline-none
          transition-all
          duration-300
          focus:border-[#C89B3C]
          focus:bg-white
          focus:ring-4
          focus:ring-[#C89B3C]/10
        "
        style={{paddingLeft:"40px"}}
      />

    </div>

    {errors.fullName && (
      <p className="mt-2 text-sm text-red-600">
        {errors.fullName}
      </p>
    )}

  </div>

  {/* Phone */}

  <div style={{marginBottom:"15px"}}>

    <label className="mb-2 block text-sm font-semibold text-[#123B67]" style={{marginBottom:"7px", paddingLeft:"5px"}}>
      Phone Number *
    </label>

    <div className="relative">

      <HiPhone
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#123B67]"
      />

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="+1 (867) 447-1500"
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-[#E5E7EB]
          bg-[#FCFCFD]
          pl-12
          pr-4
          text-[15px]
          outline-none
          transition-all
          duration-300
          focus:border-[#C89B3C]
          focus:bg-white
          focus:ring-4
          focus:ring-[#C89B3C]/10
        "
           style={{paddingLeft:"40px"}}
      />

    </div>

    {errors.phone && (
      <p className="mt-2 text-sm text-red-600">
        {errors.phone}
      </p>
    )}

  </div>

</div>
{/* Row 2 */}

<div className="grid gap-5 md:grid-cols-2">

  {/* Email */}

  <div style={{marginBottom:"15px"}}>
    <label className="mb-2 block text-sm font-semibold text-[#123B67]" style={{marginBottom:"7px", paddingLeft:"5px"}}>
      Email Address *
    </label>

    <div className="relative">

      <HiEnvelope
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#123B67]"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="john@example.com"
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-[#E5E7EB]
          bg-[#FCFCFD]
          pl-12
          pr-4
          text-[15px]
          outline-none
          transition-all
          duration-300
          focus:border-[#C89B3C]
          focus:bg-white
          focus:ring-4
          focus:ring-[#C89B3C]/10
        "
           style={{paddingLeft:"40px"}}
      />

    </div>

    {errors.email && (
      <p className="mt-2 text-sm text-red-600">
        {errors.email}
      </p>
    )}

  </div>

  {/* Job */}

  <div style={{marginBottom:"15px"}}>

    <label className="mb-2 block text-sm font-semibold text-[#123B67]" style={{marginBottom:"7px", paddingLeft:"5px"}}>
      Job Position *
    </label>

    <div className="relative">

      <HiBriefcase
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#123B67]"
      />

      <input
        type="text"
        name="job"
        value={form.job}
        onChange={handleChange}
        placeholder="Plumber"
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-[#E5E7EB]
          bg-[#FCFCFD]
          pl-12
          pr-4
          text-[15px]
          outline-none
          transition-all
          duration-300
          focus:border-[#C89B3C]
          focus:bg-white
          focus:ring-4
          focus:ring-[#C89B3C]/10
        "
           style={{paddingLeft:"40px"}}
      />

    </div>

    {errors.job && (
      <p className="mt-2 text-sm text-red-600">
        {errors.job}
      </p>
    )}

  </div>

</div>
{/* Resume Upload */}

<div style={{marginBottom:"15px"}}>

  <label className="mb-2 block text-sm font-semibold text-[#123B67]" style={{marginLeft:"5px", marginBottom:"7px"}}>
    Upload Resume *
  </label>

  <label
    className="
      group
      relative
      flex
      cursor-pointer
      items-center
      justify-between
      rounded-2xl
      border-2
      border-dashed
      border-[#D9B25F]
      bg-gradient-to-r
      from-[#FFFDF7]
      to-[#FFF8EC]
      px-5
      py-5
      transition-all
      duration-300
      hover:border-[#C89B3C]
      hover:shadow-lg
      hover:shadow-[#C89B3C]/10
    "
  >

    <div className="flex items-center gap-4" style={{padding:"5px"}}>

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#C89B3C]/10
          text-[#C89B3C]
          transition-all
          duration-300
          group-hover:bg-[#C89B3C]
          group-hover:text-white
        "
      >
        <HiArrowUpTray size={22} />
      </div>

      <div>

        <p className="font-semibold text-[#123B67]">
          {form.resume
            ? form.resume.name
            : "Upload Your Resume"}
        </p>

        <p className="mt-1 text-sm text-[#667085]">
          PDF, DOC or DOCX (Maximum 5MB)
        </p>

      </div>

    </div>

    <span
      className="
        hidden
        rounded-full
        bg-[#123B67]
        px-5
        py-2
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        group-hover:bg-[#C89B3C]
        md:block
      "
          style={{padding:"5px", marginRight:"5px"}}
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

  {errors.resume && (
    <p className="mt-2 text-sm text-red-600">
      {errors.resume}
    </p>
  )}

</div>
{/* Message */}

<div style={{marginBottom:"15px"}}>
  <label className="mb-2 block text-sm font-semibold text-[#123B67]" style={{marginLeft:"5px", marginBottom:"7px"}}>
    Message (Optional)
  </label>

  <div className="relative">

    <HiChatBubbleLeftRight
      size={18}
      className="absolute left-4 top-5 text-[#123B67]"
    />

    <textarea
      rows={5}
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="Tell us about yourself..."
      className="
        w-full
        rounded-2xl
        border
        border-[#E5E7EB]
        bg-[#FCFCFD]
        pl-12
        pr-4
        pt-4
        text-[15px]
        leading-7
        outline-none
        resize-none
        transition-all
        duration-300
        focus:border-[#C89B3C]
        focus:bg-white
        focus:ring-4
        focus:ring-[#C89B3C]/10
      "
      style={{paddingLeft:"40px", paddingTop:"15px"}}
    />

  </div>
</div>

{/* Submit */}

<div className="pt-2">
  <button
    type="submit"
    disabled={loading}
    className="
      group
      relative
      flex
      h-14
      w-full
      items-center
      justify-center
      overflow-hidden
      rounded-2xl
      border
      border-[#D9A63A]
      bg-gradient-to-r
      from-[#FFF1B8]
      via-[#F4C46A]
      to-[#B8821F]
      font-semibold
      text-[#123B67]
      shadow-[0_15px_35px_rgba(200,155,60,.35)]
      transition-all
      duration-500
      hover:-translate-y-1
      hover:scale-[1.01]
      hover:shadow-[0_25px_50px_rgba(200,155,60,.45)]
      active:scale-[0.98]
      disabled:cursor-not-allowed
      disabled:opacity-70
    "
  >
    {/* Silver Glaze */}

    <span
      className="
        absolute
        top-0
        -left-[130%]
        h-full
        w-[40%]
        -skew-x-12
        bg-gradient-to-r
        from-transparent
        via-white/80
        to-transparent
        transition-all
        duration-700
        ease-out
        group-hover:left-[140%]
      "
    />

    {/* Soft Glow */}

    <span
      className="
        absolute
        inset-0
        rounded-2xl
        bg-white/10
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
    />

    {loading ? (
      <div className="relative z-10 flex items-center gap-3">
        <div
          className="
            h-5
            w-5
            animate-spin
            rounded-full
            border-2
            border-[#123B67]
            border-t-transparent
          "
        />
        <span>Submitting...</span>
      </div>
    ) : (
      <span className="relative z-10 flex items-center gap-2 tracking-wide">
        Submit Application
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    )}
  </button>
</div>

</form>

                  </div>

              

              </DialogPanel>

            </TransitionChild>

          </div>

        </div>

      </Dialog>

    </Transition>
  );
}