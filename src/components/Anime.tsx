import React, { CSSProperties } from "react";

// --- 1. Définition de l'Animation CSS pour le défilement fluide ---
// Le motif a une taille de 50px (background-size: '50px 100%').
// Nous décalons l'arrière-plan de 50px pour un défilement en boucle parfaite.
const globalStyles = `
  @keyframes stripeAnimation {
    from {
      background-position: 0 0; /* Démarre */
    }
    to {
      background-position: -50px 0; /* Décale exactement d'une taille de motif */
    }
  }
`;

const AnimatedDivider: React.FC = () => {
  // Styles pour le conteneur principal (masque le débordement)
  const dividerStyle: CSSProperties = {
    width: "100%",
    height: "25px", // Hauteur de la bande
    overflow: "hidden",
    position: "relative",
    // La bande doit être contiguë au Hero, pas de marge ici.
  };

  // --- 2. Création des Rayures Fines et Obliques via repeating-linear-gradient ---
  // Angle: 45 degrés pour l'oblique
  // Motif: 2px noir, 2px blanc -> 4px taille totale du motif
  const stripeGradient = `repeating-linear-gradient(
    45deg,
    #000, 
    #000 2px, 
    #fff 2px, 
    #fff 4px 
  )`;

  // Styles pour l'élément animé
  const animatedElementStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,

    // Application du dégradé de rayures obliques
    backgroundImage: stripeGradient,
    backgroundRepeat: "repeat",

    // Taille du fond : 50px est un bon compromis pour le défilement en boucle
    backgroundSize: "50px 100%",

    // Application de l'animation CSS
    // Durée très courte (0.5s) pour un effet de défilement très rapide, comme sur la vidéo.
    animation: "stripeAnimation 0.5s linear infinite",
  };

  return (
    <div style={dividerStyle}>
      {/* ⚠️ Mettez les @keyframes dans un fichier CSS global en production ! */}
      <style>{globalStyles}</style>

      {/* L'élément qui porte les rayures et l'animation */}
      <div style={animatedElementStyle} />
    </div>
  );
};

export default AnimatedDivider;
