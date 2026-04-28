import { useEffect } from "react";

export default function MentionsLegalesGbesoin() {
  useEffect(() => {
    document.title = "Mentions légales – Gbesoin";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Mentions légales</h1>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Éditeur de l'application</h2>
        <p className="mb-2"><strong>Nom / Raison sociale</strong> : Jason Perez</p>
        <p className="mb-2"><strong>Statut</strong> : Auto-entrepreneur</p>
        <p className="mb-2"><strong>Adresse</strong> : communiquée sur demande à support@gbesoin.app</p>
        <p className="mb-2">
          <strong>Email de contact</strong> :{" "}
          <a href="mailto:support@gbesoin.app" className="text-blue-600 underline">
            support@gbesoin.app
          </a>
        </p>
        <p className="mb-2"><strong>SIRET</strong> : non applicable (micro-entreprise dispensée)</p>
        <p className="mb-4"><strong>Numéro de TVA intracommunautaire</strong> : non applicable (franchise en base de TVA)</p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Directeur de la publication</h2>
        <p className="mb-4">Jason Perez</p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Hébergement du site web</h2>
        <p className="mb-2"><strong>Hébergeur</strong> : GitHub Pages – GitHub, Inc.</p>
        <p className="mb-2"><strong>Adresse</strong> : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</p>
        <p className="mb-4">
          <strong>Site web</strong> :{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://github.com
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Hébergement de l'application</h2>
        <p className="mb-4">
          L'application est distribuée via l'<strong>App Store</strong> d'Apple :
          <br />
          <strong>Apple Inc.</strong>, One Apple Park Way, Cupertino, CA 95014, USA.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Propriété intellectuelle</h2>
        <p className="mb-4">
          L'ensemble des éléments présents dans l'application Gbesoin (textes, graphismes, logos, icônes, code) est protégé par les lois en vigueur sur la propriété intellectuelle. Toute reproduction non autorisée est interdite.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Crédits</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Design et développement : Jason Perez</li>
          <li>Cartographie : Apple MapKit</li>
          <li>Détection de catégories : modèles locaux + Apple Intelligence (le cas échéant)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
        <p className="mb-4">
          Pour toute question d'ordre légal :{" "}
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
