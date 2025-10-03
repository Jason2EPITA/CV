import { useEffect } from "react";

export default function PolitiqueConfidentialiteCleanSnap() {
  useEffect(() => {
    document.title = "Politique de confidentialité – CleanSnap";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Politique de confidentialité – CleanSnap
        </h1>

        <p className="mb-6">
          L'application <strong>CleanSnap</strong> respecte la vie privée de ses utilisateurs. Nous ne collectons aucune donnée personnelle. Toutes vos photos et vidéos restent uniquement sur votre appareil. Aucun transfert de données n'est effectué vers des serveurs ou des tiers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Données collectées</h2>
        <p className="mb-4">
          Aucune donnée personnelle n'est collectée par l'application. CleanSnap fonctionne entièrement hors ligne.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Accès à vos fichiers</h2>
        <p className="mb-4">
          L'application accède temporairement à vos photos et vidéos dans le seul but de vous permettre de les visualiser et de les supprimer plus rapidement. Ces fichiers ne sont ni copiés, ni stockés en dehors de votre appareil.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Publicités et tiers</h2>
        <p className="mb-4">
          CleanSnap n'affiche pas de publicités et ne partage aucune information avec des services tiers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Mises à jour</h2>
        <p className="mb-4">
          Toute modification de cette politique sera publiée sur cette page. Nous vous invitons à la consulter régulièrement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Contact</h2>
        <p className="mb-4">
          Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à l'adresse suivante :
          <br />
          <a
            href="mailto:contact@jasonperez.fr"
            className="text-blue-600 underline"
          >
            contact@jasonperez.fr
          </a>
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Dernière mise à jour : 27 septembre 2025
        </p>
      </div>
    </div>
  );
}