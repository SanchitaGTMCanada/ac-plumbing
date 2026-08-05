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

      <label
        className="block font-semibold text-[#123B67]"
        style={{
          marginBottom: "10px",
          fontSize: "15px",
        }}
      >
        {label}
      </label>

      {/* Field */}

      <div
        className="relative"
        style={{
          marginBottom: error ? "6px" : "0",
        }}
      >
        {/* Icon */}

        <div
          className="
            absolute
            z-10
            flex
            items-center
            justify-center
            rounded-full
            border
            border-[#E9EEF5]
            bg-[#F7F8FC]
            transition-all
            duration-300
          "
          style={{
            left: "15px",
            top: textarea ? "18px" : "50%",
            transform: textarea ? "none" : "translateY(-50%)",
            width: "40px",
            height: "40px",
            pointerEvents: "none",
          }}
        >
          <Icon
            size={18}
            color="#123B67"
          />
        </div>

        {children}
      </div>

      {/* Error */}

      {error && (
        <p
          className="font-medium text-red-600"
          style={{
            marginTop: "6px",
            fontSize: "13px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}