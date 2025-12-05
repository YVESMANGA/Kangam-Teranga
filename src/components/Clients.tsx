"use client";
import React from "react";

// Interface pour les données du témoignage
interface TestimonialData {
  quote: string;
  clientName: string;
  clientTitle: string;
  clientLocation: string;
  avatarSrc: string; // Chemin de l'image du client
}

// Données statiques pour le témoignage (Traduites)
const clientTestimonial: TestimonialData = {
  quote:
    "Nous avons été vraiment impressionnés par le professionnalisme de l'équipe et son souci du détail. De la consultation initiale à la remise finale, tout a été livré dans les délais et avec une qualité exceptionnelle. Le projet a dépassé nos attentes. Nous planifions déjà notre prochaine collaboration.",
  clientName: "Moussa Diop",
  clientTitle: "PDG AgroShop",
  clientLocation: "Senegal",
  // L'image de l'avatar est supposée être dans le dossier 'public'
  avatarSrc: "/c.jpg",
};

// --- Composant Principal du Témoignage ---
const TestimonialsSectionFr: React.FC = () => {
  return (
    // Conteneur principal avec marges
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      {/* Conteneur Flex pour la mise en page en deux colonnes */}
      <div className="flex flex-col lg:flex-row relative">
        {/* Colonne de Gauche : Image et Décoration Ambre (Harmonisé) */}
        <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[600px] mb-8 lg:mb-0 rounded-lg shadow-xl overflow-hidden">
          {/* Le bloc image/poignée de main */}
          <div
            className="w-full h-full bg-cover bg-center"
            // Référence à l'image dans le dossier 'public'
            style={{ backgroundImage: `url('/c.jpg')` }}
          >
            {/* Vous pouvez utiliser une balise <img> si vous préférez */}
          </div>

          {/* Ligne décorative ambre à droite de l'image (Harmonisé) */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-4 bg-amber-700 transform translate-x-4 rounded-r-lg"></div>
        </div>

        {/* Colonne de Droite : Contenu Textuel */}
        <div className="lg:w-1/2 lg:pl-20 relative pt-8 lg:pt-0">
          {/* Étiquette "CE QUE NOS CLIENTS DISENT" */}
          <div className="inline-block bg-black py-2 px-4 relative z-0 mb-8 rounded">
            <div className="absolute top-0 left-0 w-full h-full bg-[#3dcac4] transform translate-x-1 translate-y-1 -z-10 rounded"></div>
            <p className="text-xs font-semibold text-white tracking-widest uppercase relative z-10">
              CE QUE NOS CLIENTS DISENT
            </p>
          </div>

          {/* Titre "Témoignages" */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-black mt-2">
            Témoignages
          </h2>

          {/* Sous-titre / Description (Traduit) */}
          <p className="mt-4 text-base text-gray-700 max-w-lg mb-12">
            Des retours sincères de vrais clients — partageant leurs
            expériences, leur satisfaction et la confiance que nous avons
            établie à travers chaque détail de chaque projet que nous avons
            livré.
          </p>

          {/* --- Carte de Témoignage --- */}
          <div className="relative p-6 bg-white rounded-lg shadow-xl border border-gray-100">
            {/* Ligne décorative ambre à gauche du texte */}
            <div className="hidden lg:block absolute left-0 top-0 h-full w-1 bg-[#3dcac4] rounded-l-lg"></div>

            {/* Conteneur pour la citation */}
            <div className="pb-6 border-b border-gray-200">
              <p className="text-lg leading-relaxed text-gray-800 italic">
                {clientTestimonial.quote}
              </p>
            </div>

            {/* Infos du Client et Navigation/Points (Footer du témoignage) */}
            <div className="flex justify-between items-center pt-6">
              <div className="flex items-center">
                {/* Avatar du client */}
                <img
                  src={clientTestimonial.avatarSrc}
                  alt={`Avatar de ${clientTestimonial.clientName}`}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-[#3dcac4]"
                />

                {/* Nom et Titre */}
                <div>
                  <p className="font-bold text-black uppercase text-sm">
                    {clientTestimonial.clientName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {clientTestimonial.clientTitle}
                  </p>
                </div>
              </div>

              {/* Points de Navigation (Navigation des témoignages) */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[#3dcac4] rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-black transition"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-black transition"></div>
              </div>
            </div>
          </div>
          {/* --- Fin Carte de Témoignage --- */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionFr;
