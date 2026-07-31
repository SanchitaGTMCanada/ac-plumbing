export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}) {
  return (
    <div
      className={align === "center" ? "text-center" : ""}
    >
      {subtitle && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-[var(--primary)]">
          {subtitle}
        </p>
      )}

      <h2 className="text-[38px] leading-tight font-bold text-[var(--heading)] md:text-[52px]">
        {title}
      </h2>
    </div>
  );
}