import React from "react";

// Composant pour le contenu de la section "À Propos"
const AboutSection: React.FC = () => {
  return (
    // Conteneur principal
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* --- Colonne de Gauche : Titre et Image --- */}
        <div className="lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
          {/* Étiquette "À PROPOS DE TERANGA RESSOURCES" */}
          <div className="bg-[#3dcac4] inline-block py-1 px-3 mb-4">
            <p className="text-xs font-semibold text-black tracking-widest uppercase">
              À PROPOS DE TERANGA RESSOURCES
            </p>
          </div>

          {/* Titre Principal (TRADUIT) */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Plus Que Des Extracteurs —             <br />
            Nous Sommes Les Fondations Du Développement Durable          {" "}
          </h1>

          {/* Image (Placeholder) */}
          <div className="mt-8">
            <img
              src="/a.jpg"
              alt="Chantier de construction avec de grandes poutres en béton et des grues jaunes"
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* --- Colonne de Droite : Onglets et Texte --- */}
        <div className="lg:w-1/2 pl-0 lg:pl-12 pt-8 lg:pt-0">
          {/* Conteneur du contenu */}
          <div className="bg-white border border-gray-100 p-6 md:p-8 shadow-xl">
            {/* Onglets */}
            <div className="flex mb-6">
              {/* Onglet Actif (Marron Clair/Ambre) */}
              <button className="bg-[#3dcac4] font-semibold py-2 px-6 text-black mr-2 focus:outline-none">
                Qui Sommes-Nous
              </button>
              {/* Onglet Inactif (Gris Clair) */}
              <button className="bg-gray-100 font-semibold py-2 px-6 text-gray-700 focus:outline-none">
                Notre Mission
              </button>
            </div>

            {/* Contenu du texte 1 (TRADUIT) */}
            <div className="pb-4 border-b border-gray-200 mb-4">
              <p className="text-gray-700 leading-relaxed">
                Nos projets sont dirigés par des professionnels chevronnés,
                garantissant précision, qualité et responsabilité du début à la
                fin, avec confiance à chaque étape.
              </p>
            </div>

            {/* Contenu du texte 2 (TRADUIT) */}
            <p className="text-gray-700 leading-relaxed mb-8">
              TERANGA Ressources se positionne. Son ambition est de contribuer
              activement à la promotion de la valorisations des ressources
              naturelles locales en proposant des solutions techniques,
              logistiques et environnementales adaptées aux besoins des
              exploitations artisanales et industrielles.
            </p>

            {/* Bouton "EN SAVOIR PLUS SUR NOUS" (Couleur Marron Clair/Ambre) */}
            <button className="flex items-center bg-[#3dcac4] text-black font-bold py-3 px-6 hover:bg-amber-600 transition duration-300 focus:outline-none">
              EN SAVOIR PLUS SUR NOUS
              {/* Icône de flèche */}
              <div className="bg-black w-8 h-8 flex items-center justify-center ml-3">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
