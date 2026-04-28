import { useEffect } from "react";

export default function PolitiqueConfidentialiteGbesoin() {
  useEffect(() => {
    document.title = "Politique de confidentialité – Gbesoin";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-2 text-center">Politique de confidentialité</h1>
        <p className="text-center text-sm text-gray-500 mb-8"><strong>Dernière mise à jour : jeudi 28 avril 2026</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Qui sommes-nous</h2>
        <p className="mb-4">
          L'application <strong>Gbesoin</strong> (« l'application », « nous ») est éditée par <strong>Jason Perez</strong>, auto-entrepreneur. L'adresse postale peut être communiquée sur demande à <a href="mailto:support@gbesoin.app" className="text-blue-600 underline">support@gbesoin.app</a>.
        </p>
        <p className="mb-4">
          Pour toute question relative à cette politique, vous pouvez nous contacter à :{" "}
          <strong>
            <a href="mailto:support@gbesoin.app" className="text-blue-600 underline">
              support@gbesoin.app
            </a>
          </strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Notre engagement</h2>
        <p className="mb-4">
          Gbesoin est conçue selon le principe du <strong>« privacy-first »</strong> : <strong>aucune donnée personnelle ne quitte votre iPhone</strong>. Nous ne collectons pas, ne stockons pas et ne transmettons aucune information vers des serveurs externes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Données traitées</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">3.1 Localisation</h3>
        <p className="mb-2">
          L'application utilise votre <strong>position géographique précise</strong> uniquement pour :
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Détecter les magasins pertinents à proximité.</li>
          <li>Vous notifier lorsque vous passez près d'un magasin correspondant à un article de vos listes.</li>
        </ul>
        <p className="mb-4">
          La localisation est traitée <strong>localement</strong> sur votre iPhone par les frameworks d'Apple (CoreLocation). Elle n'est <strong>jamais envoyée vers nos serveurs ni à des tiers</strong>.
        </p>
        <p className="mb-4">
          Vous pouvez à tout moment révoquer cette autorisation dans <strong>Réglages iOS → Confidentialité et sécurité → Localisation → Gbesoin</strong>.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">3.2 Listes et articles</h3>
        <p className="mb-4">
          Les listes de courses et articles que vous saisissez sont <strong>stockés uniquement sur votre iPhone</strong> dans la base de données locale de l'application (SwiftData). Si vous avez activé la synchronisation iCloud, ces données sont également chiffrées et stockées dans <strong>votre compte iCloud privé</strong>, sans que nous y ayons accès.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">3.3 Apple Intelligence</h3>
        <p className="mb-4">
          Si votre appareil est compatible et que vous avez activé Apple Intelligence, l'application peut utiliser les modèles d'intelligence artificielle locaux d'Apple pour mieux classer vos articles. Ce traitement a lieu <strong>entièrement sur votre appareil</strong> et <strong>aucune donnée n'est envoyée à Apple ou à des tiers</strong> dans ce cadre.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Données NON collectées</h2>
        <p className="mb-2">Nous ne collectons pas :</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>d'identifiants publicitaires,</li>
          <li>d'analyses comportementales,</li>
          <li>d'historique de navigation,</li>
          <li>d'informations de contact,</li>
          <li>de données personnelles transmises à des serveurs tiers.</li>
        </ul>
        <p className="mb-4">
          Aucun outil de tracking, d'analytics ou de publicité n'est intégré à l'application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Notifications</h2>
        <p className="mb-4">
          L'application envoie des <strong>notifications locales</strong> générées par votre iPhone, déclenchées par votre proximité avec un magasin pertinent. Aucun serveur externe n'envoie ces notifications.
        </p>
        <p className="mb-4">
          Vous pouvez désactiver les notifications à tout moment dans <strong>Réglages iOS → Notifications → Gbesoin</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. MapKit (Apple Plans)</h2>
        <p className="mb-4">
          Lors de la recherche de magasins, l'application interroge les services de cartographie d'Apple (MapKit). Apple peut traiter ces requêtes selon <strong>sa propre politique de confidentialité</strong> :{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://www.apple.com/legal/privacy/
          </a>.
        </p>
        <p className="mb-4">
          Aucune donnée personnelle de votre part n'est transmise à Apple dans ce cadre, uniquement la zone géographique recherchée.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Conservation des données</h2>
        <p className="mb-4">
          Toutes les données restent stockées sur votre iPhone aussi longtemps que l'application est installée. Désinstaller l'application supprime instantanément toutes les données locales.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Vos droits (RGPD)</h2>
        <p className="mb-2">
          En vertu du Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li><strong>Droit d'accès</strong> : toutes vos données sont visibles directement dans l'application.</li>
          <li><strong>Droit de rectification</strong> : vous pouvez modifier vos articles directement.</li>
          <li><strong>Droit d'effacement</strong> : désinstallez l'application pour supprimer toutes les données locales.</li>
          <li><strong>Droit à la portabilité</strong> : vos données étant locales, vous gardez le contrôle total.</li>
        </ul>
        <p className="mb-4">
          Comme nous ne traitons aucune donnée à distance, ces droits s'exercent directement par vous, sur votre appareil.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Sécurité</h2>
        <p className="mb-4">
          Vos données sont protégées par les mécanismes de sécurité natifs d'iOS : chiffrement de l'appareil, sandbox applicatif, isolation des données entre applications.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Enfants</h2>
        <p className="mb-4">
          L'application n'est pas destinée spécifiquement aux enfants de moins de 13 ans, mais ne collecte aucune donnée susceptible de les concerner.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">11. Modifications de cette politique</h2>
        <p className="mb-4">
          Nous pouvons être amenés à mettre à jour cette politique. Toute modification sera publiée sur cette page avec la date de mise à jour. En cas de changement significatif, vous serez informé via une notification dans l'application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">12. Contact</h2>
        <p className="mb-4">
          Pour toute question :{" "}
          <strong>
            <a href="mailto:support@gbesoin.app" className="text-blue-600 underline">
              support@gbesoin.app
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
}
