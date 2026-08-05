"use client";

export default function Field({
  label,
  icon: Icon,
  error,
  textarea = false,
  children,
}) {
  return (
    <div>
      {/* Label */}

      <label
        style={{
          display: "block",
          marginBottom: "10px",
          fontWeight: 600,
          fontSize: "15px",
          color: "#123B67",
        }}
      >
        {label}
      </label>

      {/* Input Wrapper */}

      <div
        className="relative"
        style={{
          marginBottom: error ? "6px" : "0",
        }}
      >
        {/* Icon */}

        <div
          style={{
            position: "absolute",
            left: "14px",
            top: textarea ? "18px" : "50%",
            transform: textarea ? "none" : "translateY(-50%)",

            width: "36px",
            height: "36px",

            borderRadius: "50%",

            background: "#F7F8FC",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            border: "1px solid #E9EEF5",

            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Icon
            size={16}
            color="#123B67"
          />
        </div>

        {children}
      </div>

      {/* Error */}

      {error && (
        <p
          style={{
            marginTop: "6px",
            color: "#DC2626",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}