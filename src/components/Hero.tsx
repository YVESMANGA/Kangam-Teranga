"use client";
import React, { useState, useEffect, useCallback } from "react";

// --- 1. Définition des Données du Carrousel (TRADUITES) ---
interface SlideData {
  imagePath: string;
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  description: string;
}

const SLIDES_DATA: SlideData[] = [
  {
    imagePath: "/h1.jpg",
    subtitle: "CONSTRUIRE AVEC INTÉGRITÉ ET EXCELLENCE",
    titleLine1: "VOTRE RÊVE",
    titleLine2: "NOTRE CONCEPTION",
    titleLine3: "DEVIENT RÉALITÉ.",
    description:
      "Reconnus comme un chef de file de l'industrie, nous réalisons des projets qui résistent à l'épreuve du temps, alliant innovation, précision et un profond respect pour les communautés que nous servons.",
  },
  {
    imagePath: "/h2.jpg",
    subtitle: "L'INNOVATION AU SERVICE DE LA PRÉCISION",
    titleLine1: "CONSTRUCTION",
    titleLine2: "DE NOUVELLE",
    titleLine3: "GÉNÉRATION.",
    description:
      "Nous utilisons une technologie de pointe et des pratiques durables pour garantir que chaque projet est durable, efficace et tourné vers l'avenir.",
  },
  {
    imagePath: "/h3.jpg",
    subtitle: "UN PARTENARIAT POUR L'AVENIR",
    titleLine1: "FORCE,",
    titleLine2: "STRUCTURE,",
    titleLine3: "STABILITÉ.",
    description:
      "Notre engagement va au-delà de la construction ; nous bâtissons des relations durables et des fondations solides pour le développement des communautés.",
  },
];

// Durée en millisecondes pour le défilement automatique
const AUTOSLIDE_INTERVAL = 7000;

// -----------------------------------------------------------------
// --- 2. Composant HeroSlider (Code inchangé, utilise les données TRADUITES) ---
// -----------------------------------------------------------------

const HeroSlider: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = SLIDES_DATA[currentSlideIndex];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % SLIDES_DATA.length);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, AUTOSLIDE_INTERVAL);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${currentSlide.imagePath})`,
  };

  return (
    // Conteneur Principal
    <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden">
      {/* 1. Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 brightness-75 z-0 transition-all duration-1000"
        style={backgroundStyle}
      />

      {/* 2. Superposition de contenu (Dégradé et Texte) */}
      <div
        className="absolute inset-0 flex items-center z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)",
          paddingLeft: "5%",
        }}
      >
        <div className="max-w-xl p-5 md:p-0 opacity-100 transition duration-500">
          {/* Le bandeau marron clair/ambre (bg-amber-700) */}
          <div className="bg-[#3dcac4] text-black py-2 px-4 text-xs font-bold tracking-widest uppercase inline-block mb-4 md:mb-5">
            {currentSlide.subtitle}
          </div>

          {/* Le titre principal (Responsive) */}
          <h1 className="text-white font-extrabold mb-4 md:mb-6 leading-tight">
            <span className="text-3xl md:text-5xl lg:text-7xl block">
              {currentSlide.titleLine1}
            </span>
            <span className="text-3xl md:text-5xl lg:text-7xl block">
              {currentSlide.titleLine2}
            </span>
            <span className="text-3xl md:text-5xl lg:text-7xl block">
              {currentSlide.titleLine3}
            </span>
          </h1>

          {/* Le paragraphe descriptif (Responsive) */}
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            {currentSlide.description}
          </p>

          {/* Bouton CTA (TRADUIT) */}
          <button className="mt-8 bg-[#3dcac4] text-black font-bold py-3 px-6 hover:bg-amber-600 transition duration-300">
            DÉCOUVREZ-EN PLUS
          </button>
        </div>
      </div>

      {/* 3. Les indicateurs de position (points) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {SLIDES_DATA.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
              index === currentSlideIndex
                ? "bg-[#3dcac4]"
                : "bg-gray-400 opacity-70 hover:bg-white"
            }`}
            onClick={() => setCurrentSlideIndex(index)}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
