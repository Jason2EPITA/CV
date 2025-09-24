// App.jsx
import { useEffect, useState, useRef } from "react";
import AvatarRoom from "./components/AvatarRoom";
import AvatarCV from "./components/AvatarCV";
import ScrollDownArrow from "./components/ScrollDownArrow";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [cvVisible, setCvVisible] = useState(false);

  const cvSectionRef = useRef(null);

  useEffect(() => {
    if (ready) {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [ready]);

  // Observer pour déclencher AvatarCV uniquement quand on scrolle
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCvVisible(true); // Monte la scène AvatarCV
        }
      },
      { threshold: 0.4 }
    );

    if (cvSectionRef.current) {
      observer.observe(cvSectionRef.current);
    }

    return () => {
      if (cvSectionRef.current) observer.unobserve(cvSectionRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a] text-white text-4xl font-bold">
          <div className="text-center space-y-4">
            <div className="text-5xl font-extrabold">Jason’s Portfolio</div>
            <div className="flex justify-center space-x-2 text-lg font-medium opacity-80">
              <span className="animate-bounce">L</span>
              <span className="animate-bounce delay-100">o</span>
              <span className="animate-bounce delay-200">a</span>
              <span className="animate-bounce delay-300">d</span>
              <span className="animate-bounce delay-400">i</span>
              <span className="animate-bounce delay-500">n</span>
              <span className="animate-bounce delay-600">g</span>
              <span className="animate-bounce delay-700">…</span>
            </div>
          </div>
        </div>
      )}

    {/* Section 1 */}
    <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-center items-start p-10 bg-[#dcdcff]">
        <p className="text-lg text-slate-700">Hello, my name is</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Jason Perez
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mt-2">
          I am a Software Engineer.
        </h2>
        <p className="mt-4 text-slate-600">AI & Data • EPITA (SCIA)</p>
      </div>

      <div className="w-full h-screen">
        <AvatarRoom onReady={() => setReady(true)} />
      </div>

      {/* Flèche réutilisable */}
      <ScrollDownArrow
        onClick={() =>
          cvSectionRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
    </div>

      {/* Section 2 → la nouvelle "scène" */}
      <div
        ref={cvSectionRef}
        className="relative min-h-screen flex items-center justify-center bg-white"
      >
        {cvVisible && <AvatarCV />} {/* ne monte AvatarCV qu’à ce moment */}
      </div>

      {/* Section 3 → Contact */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
        <ContactSection/>
      </div>
    </div>
  );
}