import { useEffect } from "react";

export default function MentionsLegalesGbesoin() {
  useEffect(() => {
    document.title = "Mentions légales – Gbesoin";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Mentions légales – Gbesoin
        </h1>

        <p className="mb-6">
          Conformément aux dispositions légales en vigueur, les présentes mentions légales sont portées à la connaissance des utilisateurs de l'application <strong>Gbesoin</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Éditeur de l'application</h2>
        <p className="mb-4">
          L'application Gbesoin est éditée par Jason Perez, développeur indépendant.
          <br />
          Contact :{" "}
          <a
            href="mailto:info.shoppexpress@gmail.com"
            className="text-blue-600 underline"
          >
            info.shoppexpress@gmail.com
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Directeur de la publication</h2>
        <p className="mb-4">
          Jason Perez, en qualité d'éditeur de l'application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Hébergement</h2>
        <p className="mb-4">
          L'application Gbesoin est distribuée via l'App Store d'Apple Inc., One Apple Park Way, Cupertino, California, U.S.A. Les pages d'information liées à Gbesoin sont hébergées par GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Propriété intellectuelle</h2>
        <p className="mb-4">
          L'ensemble des éléments composant l'application Gbesoin (code, interface, graphismes, textes, logos, icônes) est protégé par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est strictement interdite.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Données personnelles</h2>
        <p className="mb-4">
          Le traitement des données personnelles est décrit dans la{" "}
          <a href="#/politiqueconfidentialitegbesoin" className="text-blue-600 underline">
            politique de confidentialité
          </a>{" "}
          de l'application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Conditions d'utilisation</h2>
        <p className="mb-4">
          L'utilisation de Gbesoin est soumise au respect des{" "}
          <a href="#/conditionsutilisationgbesoin" className="text-blue-600 underline">
            conditions d'utilisation
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Limitation de responsabilité</h2>
        <p className="mb-4">
          L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de l'application, notamment d'éventuelles erreurs de localisation, retards de notifications ou indisponibilités du service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Droit applicable</h2>
        <p className="mb-4">
          Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Dernière mise à jour : 28 avril 2026
        </p>
      </div>
    </div>
  );
}
