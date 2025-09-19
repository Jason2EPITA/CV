import { useEffect, useState } from "react";

export default function App() {
  const [pdfReady, setPdfReady] = useState(false);
  useEffect(() => {
    // petit delay pour éviter un flash vide sur certains navigateurs
    const t = setTimeout(() => setPdfReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
             style={{
               background:
                 "radial-gradient(60rem 30rem at 20% -10%, #1d4ed8 10%, transparent 50%), radial-gradient(50rem 25rem at 120% 10%, #0ea5e9 10%, transparent 50%)"
             }} />
        <div className="mx-auto max-w-6xl px-6 py-16 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-sky-400/80">
                Diplômé EPITA — majeure SCIA
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-semibold">
                Jason Perez
              </h1>
              <p className="mt-3 text-lg md:text-xl text-slate-300">
                Software Engineer — AI &amp; Data
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="rounded-xl px-4 py-2 bg-sky-500 hover:bg-sky-400 transition"
                  href="/JasonPerezCV.pdf" target="_blank" rel="noreferrer"
                >
                  Ouvrir le CV (PDF)
                </a>
                <a
                  className="rounded-xl px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-white/10"
                  href="https://github.com/Jason2EPITA" target="_blank" rel="noreferrer"
                >
                  Voir mes projets GitHub
                </a>
                <a
                  className="rounded-xl px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-white/10"
                  href="mailto:perezjason@live.fr"
                >
                  Me contacter
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              {/* badge simple style EPITA */}
              <div className="px-4 py-2 rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-200">
                EPITA • SCIA
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Aperçu PDF */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-xl font-medium mb-4">Aperçu rapide du CV</h2>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
          {pdfReady ? (
            <object
              data="/JasonPerezCV.pdf#view=FitH"
              type="application/pdf"
              className="w-full h-[80vh]"
            >
              <div className="p-6 text-slate-300">
                Votre navigateur ne peut pas afficher l’aperçu PDF.
                <a className="text-sky-400 underline ml-2" href="/JasonPerezCV.pdf" target="_blank" rel="noreferrer">
                  Ouvrir le CV dans un nouvel onglet
                </a>
              </div>
            </object>
          ) : (
            <div className="h-[80vh] grid place-items-center text-slate-400">
              Chargement de l’aperçu…
            </div>
          )}
        </div>

        {/* Liens utiles */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <a className="rounded-xl p-4 bg-slate-900 border border-white/10 hover:border-sky-500/40 transition"
             href="/JasonPerezCV.pdf" download>
            Télécharger le CV
          </a>
          <a className="rounded-xl p-4 bg-slate-900 border border-white/10 hover:border-sky-500/40 transition"
             href="https://www.linkedin.com/in/jason-perez-68182725a/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="rounded-xl p-4 bg-slate-900 border border-white/10 hover:border-sky-500/40 transition"
             href="https://github.com/Jason2EPITA" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400">
        © {new Date().getFullYear()} Jason Perez — Portfolio
      </footer>
    </div>
  );
}