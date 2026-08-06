"use client";

export default function CareerField({
  label,
  icon: Icon,
  error,
  textarea = false,
  children,
}) {
  return (
    <div className="w-full">
      {/* Label */}

      <label className="mb-2 block text-[14px] font-semibold text-[#123B67] sm:text-[15px]">
        {label}
      </label>

      {/* Input Wrapper */}

      <div className="relative">
        {/* Icon */}

        <div
          className={`
            absolute
            z-10
            flex
            items-center
            justify-center
            rounded-full
            border
            border-[#E9EEF5]
            bg-[#F7F8FC]
            pointer-events-none
            transition-all
            duration-300

            left-3
            sm:left-4

            w-9
            h-9
            sm:w-10
            sm:h-10

            ${textarea ? "top-4 sm:top-[18px]" : "top-1/2 -translate-y-1/2"}
          `}
        >
          <Icon
            className="text-[#123B67]"
            size={16}
          />
        </div>

        {children}
      </div>

      {/* Error */}

      {error && (
        <p className="mt-2 text-[12px] font-medium text-red-600 sm:text-[13px]">
          {error}
        </p>
      )}
    </div>
  );
}