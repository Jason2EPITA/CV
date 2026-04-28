import { useEffect } from "react";

export default function PolitiqueConfidentialiteGbesoin() {
  useEffect(() => {
    document.title = "Politique de confidentialité – Gbesoin";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Politique de confidentialité – Gbesoin
        </h1>

        <p className="mb-6">
          L'application <strong>Gbesoin</strong> respecte la vie privée de ses utilisateurs. Gbesoin est une application de liste de courses qui peut utiliser votre position pour vous rappeler vos articles à proximité de magasins pertinents. Aucune donnée personnelle n'est transmise à des serveurs externes : tout reste sur votre appareil.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Données collectées</h2>
        <p className="mb-4">
          Gbesoin ne collecte aucune donnée personnelle identifiable. Les listes de courses, catégories d'articles et préférences sont stockées localement sur votre appareil.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Localisation</h2>
        <p className="mb-4">
          Gbesoin utilise votre position uniquement pour détecter les magasins utiles à proximité et déclencher des rappels pertinents. Ces données de localisation sont traitées localement sur votre appareil et ne sont jamais envoyées à un serveur tiers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Notifications</h2>
        <p className="mb-4">
          L'application envoie des notifications locales pour vous rappeler des articles à acheter lorsque vous êtes à proximité d'un magasin pertinent. Vous pouvez désactiver les notifications à tout moment dans les réglages de votre appareil.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Services tiers</h2>
        <p className="mb-4">
          Gbesoin peut proposer d'ouvrir un itinéraire dans Apple Plans, Google Maps ou Waze. Aucune information personnelle n'est partagée avec ces services au-delà des coordonnées du magasin sélectionné.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Publicités</h2>
        <p className="mb-4">
          Gbesoin n'affiche aucune publicité et n'utilise pas de traceurs publicitaires.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Sécurité</h2>
        <p className="mb-4">
          Toutes les données de l'application restent stockées localement sur votre appareil et bénéficient des protections natives offertes par iOS.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Mises à jour</h2>
        <p className="mb-4">
          Toute modification de cette politique sera publiée sur cette page. Nous vous invitons à la consulter régulièrement.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact</h2>
        <p className="mb-4">
          Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à l'adresse suivante :
          <br />
          <a
            href="mailto:info.shoppexpress@gmail.com"
            className="text-blue-600 underline"
          >
            info.shoppexpress@gmail.com
          </a>
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Dernière mise à jour : 28 avril 2026
        </p>
      </div>
    </div>
  );
}
