// AvatarCV.jsx
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function AvatarCV() {
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCV(true), 5000); // petite attente
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#ebe9ff] overflow-hidden">
      {/* Spline scene en arrière-plan */}
      <Spline
        scene="https://prod.spline.design/Ae8ggUiDCrVA9x9s/scene.splinecode"
        className="absolute inset-0"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          showCV
            ? "opacity-100 bg-gradient-to-tr from-white/40 via-white/20 to-white/10 backdrop-blur-md"
            : "opacity-0"
        }`}
      />

      {/* Carte CV */}
      <div
        className={`relative z-10 transition-all duration-1000 ease-out ${
          showCV ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="mx-auto w-[min(92vw,900px)] rounded-3xl shadow-2xl bg-white/95 backdrop-blur-xl ring-1 ring-slate-200 transform transition-transform duration-300 hover:scale-[1.02]">
          <div className="px-8 pt-6 pb-4 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">Mon CV</h2>
            <p className="mt-2 text-slate-500 text-sm">
              Aperçu PDF intégré • zoom via navigateur
            </p>
          </div>

          <div className="px-4 pb-6">
            <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
              <iframe
                src="/JasonPerezCV.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="CV Jason Perez"
                className="w-full h-[72vh]"
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href="/JasonPerezCV.pdf"
                download
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow"
              >
                Télécharger le PDF
              </a>
              <a
                href="/JasonPerezCV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 ring-1 ring-indigo-200"
              >
                Ouvrir dans un nouvel onglet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}