"use client";
import React from "react";

const carouselImages = ["a1.webp", "a3.webp", "a4.webp"];

const leftImage = "logo.png";

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* 1. Carrousel d'images : Défilement uniquement sur mobile */}
      {/* Utilisation de overflow-x-auto/scroll pour activer le défilement horizontal sur les petits écrans */}
      <div className="mb-8 overflow-x-scroll md:overflow-hidden rounded-lg shadow-md">
        {/* Le conteneur Flexbox qui contient les images */}
        <div className="flex w-full space-x-4">
          {carouselImages.map((image, index) => (
            // Sur mobile, chaque image prend la largeur complète (ou presque) pour le défilement.
            // Sur desktop (md:), nous les forçons à prendre 1/3 de la largeur du conteneur parent (w-full).
            <div
              key={index}
              className="flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-1/3" // w-[80vw] est souvent une bonne taille pour un défilement mobile
            >
              <img
                src={image}
                alt={`Carousel ${index + 1}`}
                // La hauteur fixe (h-64) est conservée.
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. Layout principal: Image à gauche et Contenu à droite (Flexbox) */}
      {/* items-stretch est crucial pour que les enfants s'étirent sur la même hauteur */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-8 bg-white shadow-lg rounded-lg p-4 md:p-6">
        {/* Image à gauche */}
        <div className="md:w-1/2 lg:w-2/5 flex-shrink-0">
          <img
            src={leftImage}
            alt="Descriptive Left Image"
            // h-full force l'image à prendre toute la hauteur disponible dans sa colonne (grâce à items-stretch du parent)
            // object-cover peut déformer légèrement l'image si les proportions ne correspondent pas.
            // Utilisez object-contain ou ajustez la classe h-full si l'image doit conserver ses proportions.
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Contenu "Qui Sommes-Nous" à droite */}
        <div className="md:w-1/2 lg:w-3/5">
          {/* Le reste du contenu reste inchangé */}
          <div className="flex border-b border-gray-200 mb-4">
            <button className="px-4 py-2 text-sm font-semibold border-b-2 border-green-500 text-green-700 bg-gray-50 focus:outline-none transition duration-150">
              Qui Sommes-Nous
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-gray-600 border-b-2 border-transparent hover:border-gray-300 focus:outline-none transition duration-150">
              Notre Mission
            </button>
          </div>

          <div className="py-4 text-gray-700 space-y-4">
            <p>
              Nos projets sont dirigés par des{" "}
              <strong className="font-bold">professionnels chevronnés</strong>,
              garantissant <strong className="font-bold">précision</strong>,{" "}
              <strong className="font-bold">qualité</strong> et{" "}
              <strong className="font-bold">responsabilité</strong> du début à
              la fin, avec confiance à chaque étape.
            </p>
            <p>
              <strong className="font-bold">TERANGA Ressources</strong> se
              positionne. Son ambition est de contribuer activement à la
              promotion de la{" "}
              <strong className="font-bold">
                valorisation des ressources naturelles locales
              </strong>{" "}
              en proposant des solutions{" "}
              <strong className="font-bold">
                techniques, logistiques et environnementales
              </strong>{" "}
              adaptées aux besoins des exploitations artisanales et
              industrielles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
