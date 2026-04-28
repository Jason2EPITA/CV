import { useEffect } from "react";

export default function ConditionsUtilisationGbesoin() {
  useEffect(() => {
    document.title = "Conditions d'utilisation – Gbesoin";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-2 text-center">Conditions d'utilisation</h1>
        <p className="text-center text-sm text-gray-500 mb-8"><strong>Dernière mise à jour : jeudi 28 avril 2026</strong></p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Acceptation</h2>
        <p className="mb-4">
          En téléchargeant et en utilisant l'application <strong>Gbesoin</strong>, vous acceptez les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, n'utilisez pas l'application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Description du service</h2>
        <p className="mb-4">
          Gbesoin est une application de liste de courses qui détecte automatiquement la catégorie de vos articles et vous envoie des rappels lorsque vous passez à proximité de magasins pertinents.
        </p>
        <p className="mb-4">
          L'application fonctionne <strong>entièrement en local</strong> sur votre iPhone et ne nécessite pas de compte utilisateur.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Licence</h2>
        <p className="mb-4">
          Nous vous accordons une licence personnelle, non-exclusive, non-transférable, révocable, pour utiliser l'application sur les appareils que vous possédez ou contrôlez, conformément aux règles d'utilisation de l'App Store d'Apple.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Utilisation acceptable</h2>
        <p className="mb-2">Vous vous engagez à ne pas :</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Tenter de désassembler, décompiler ou rétro-concevoir l'application.</li>
          <li>Utiliser l'application à des fins illégales.</li>
          <li>Distribuer, vendre ou louer l'application.</li>
          <li>Contourner les mesures de sécurité de l'application ou de votre appareil.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Propriété intellectuelle</h2>
        <p className="mb-4">
          L'application, son code, son design, ses textes et ses ressources graphiques sont la propriété exclusive de <strong>Jason Perez (auto-entrepreneur)</strong>. Toute reproduction non autorisée est interdite.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Limitations de responsabilité</h2>
        <p className="mb-2">L'application est fournie « telle quelle », sans garantie d'aucune sorte. Nous ne garantissons pas :</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Que les rappels seront envoyés en toutes circonstances (dépend de la disponibilité de la localisation, de la batterie, du système iOS).</li>
          <li>Que les magasins détectés seront toujours ouverts ou disponibles.</li>
          <li>Que la classification automatique des articles sera toujours exacte.</li>
        </ul>
        <p className="mb-4">
          Vous restez responsable de la vérification finale de vos achats. Nous ne pourrons être tenus responsables d'oublis, d'erreurs de catégorisation ou d'éventuelles conséquences liées à l'utilisation de l'application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Données de localisation et batterie</h2>
        <p className="mb-4">
          L'utilisation continue de la localisation peut consommer davantage de batterie. Vous pouvez ajuster ou désactiver cette fonctionnalité dans les Réglages iOS à tout moment.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Mises à jour</h2>
        <p className="mb-4">
          Nous nous réservons le droit de modifier ou de mettre à jour l'application à tout moment. Certaines mises à jour peuvent être nécessaires pour la sécurité ou la compatibilité.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Résiliation</h2>
        <p className="mb-4">
          Vous pouvez cesser d'utiliser l'application à tout moment en la désinstallant. Nous nous réservons le droit de retirer l'application de l'App Store sans préavis.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Droit applicable</h2>
        <p className="mb-4">
          Les présentes conditions sont régies par le <strong>droit français</strong>. Tout litige sera soumis aux <strong>tribunaux français compétents</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">11. Contact</h2>
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
