import { useEffect } from "react";

export default function ConditionsUtilisationGbesoin() {
  useEffect(() => {
    document.title = "Conditions d'utilisation – Gbesoin";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Conditions d'utilisation – Gbesoin
        </h1>

        <p className="mb-6">
          Les présentes conditions générales d'utilisation (ci-après « CGU ») encadrent l'utilisation de l'application <strong>Gbesoin</strong>. En téléchargeant ou en utilisant l'application, vous acceptez sans réserve les présentes CGU.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Objet de l'application</h2>
        <p className="mb-4">
          Gbesoin est une application mobile permettant de gérer une liste de courses, de classer les articles par catégories et de recevoir des rappels lorsque vous vous trouvez à proximité d'un magasin pertinent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Accès au service</h2>
        <p className="mb-4">
          L'application est mise à disposition gratuitement. L'utilisateur reste responsable du matériel, de la connexion Internet et des coûts éventuels liés à son opérateur.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Utilisation correcte</h2>
        <p className="mb-4">
          L'utilisateur s'engage à utiliser Gbesoin conformément à sa finalité, à ne pas tenter de la décompiler, modifier ou détourner, et à ne pas l'utiliser à des fins illégales.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Propriété intellectuelle</h2>
        <p className="mb-4">
          L'application, son code, son design, ses logos et l'ensemble de ses contenus sont la propriété exclusive de leur auteur. Toute reproduction, totale ou partielle, est interdite sans autorisation écrite préalable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Responsabilité</h2>
        <p className="mb-4">
          Gbesoin est fournie « telle quelle ». L'éditeur ne saurait être tenu responsable d'éventuels dysfonctionnements, pertes de données, ou conséquences résultant de l'utilisation de rappels de localisation. Les rappels et suggestions sont donnés à titre indicatif.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Disponibilité</h2>
        <p className="mb-4">
          L'éditeur s'efforce de maintenir l'application accessible mais ne garantit pas une disponibilité continue. Le service peut être interrompu pour maintenance ou mise à jour.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Données personnelles</h2>
        <p className="mb-4">
          Le traitement des données personnelles est détaillé dans la <a href="#/politiqueconfidentialitegbesoin" className="text-blue-600 underline">politique de confidentialité</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Évolution des CGU</h2>
        <p className="mb-4">
          Les présentes CGU peuvent être modifiées à tout moment. La version applicable est celle en vigueur lors de votre utilisation de l'application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Droit applicable</h2>
        <p className="mb-4">
          Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation ou exécution relèvera des tribunaux compétents.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact</h2>
        <p className="mb-4">
          Pour toute question relative aux présentes conditions, vous pouvez nous contacter à l'adresse :
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
