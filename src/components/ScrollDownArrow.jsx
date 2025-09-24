// components/ScrollDownArrow.jsx
export default function ScrollDownArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-700 hover:text-slate-900 transition-colors"
      aria-label="Scroll down"
    >
      <svg
        className="w-8 h-8 animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}