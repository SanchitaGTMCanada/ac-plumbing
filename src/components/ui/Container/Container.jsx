export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[1400px] ${className}`}>
      {children}
    </div>
  );
}