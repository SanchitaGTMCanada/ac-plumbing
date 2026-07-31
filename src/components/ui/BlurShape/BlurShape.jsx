export default function BlurShape({
  className = "",
}) {
  return (
    <div
      className={`
        absolute
        rounded-full
        blur-[120px]
        opacity-20
        ${className}
      `}
    />
  );
}








