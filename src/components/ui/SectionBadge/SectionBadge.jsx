export default function SectionBadge({ children }) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[#D9E5F3]
        bg-white
        px-5
        py-2
        text-sm
        font-semibold
        text-[var(--primary)]
        shadow-sm
      "
    >
      <span className="h-2 w-2 rounded-full bg-[var(--accent)]"></span>

      {children}
    </div>
  );
}