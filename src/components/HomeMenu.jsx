import { useState } from "react";
import { Home } from "lucide-react";

export default function HomeMenu({ scrollToRefs }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 left-6 z-50">
      {/* Bouton principal */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition"
      >
        <Home className="w-6 h-6" />
      </button>

      {/* Menu flottant */}
      {open && (
        <div className="mt-3 flex flex-col space-y-2 animate-fadeInUp">
          <button
            onClick={() => {
              setOpen(false);
              scrollToRefs.presentation.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-lg bg-white/90 text-indigo-700 shadow hover:bg-indigo-100 transition text-sm font-semibold"
          >
            Présentation
          </button>
          <button
            onClick={() => {
              setOpen(false);
              scrollToRefs.cv.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-lg bg-white/90 text-indigo-700 shadow hover:bg-indigo-100 transition text-sm font-semibold"
          >
            CV
          </button>
          <button
            onClick={() => {
              setOpen(false);
              scrollToRefs.contact.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-lg bg-white/90 text-indigo-700 shadow hover:bg-indigo-100 transition text-sm font-semibold"
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
}