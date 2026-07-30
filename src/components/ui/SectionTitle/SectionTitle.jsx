export default function SectionTitle({
  subtitle,
  title,
  center = false,
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="text-sm font-semibold uppercase tracking-[3px] text-[var(--primary)]">
        {subtitle}
      </span>

      <h2 className="mt-3 text-4xl font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}