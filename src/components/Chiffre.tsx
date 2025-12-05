import React from "react";

// Interface pour les propriétés de chaque carte de statistiques
interface CounterCardProps {
  label: string;
  value: string;
  isBlackBackground: boolean;
}

// Composant pour une seule carte de statistiques (MIS À JOUR pour la couleur ambre)
const CounterCard: React.FC<CounterCardProps> = ({
  label,
  value,
  isBlackBackground,
}) => {
  const bgColor = isBlackBackground ? "bg-black" : "bg-white";
  const textColor = isBlackBackground ? "text-white" : "text-black";

  return (
    <div className={`flex flex-col p-10 md:p-16 ${bgColor} h-full`}>
      <p
        className={`text-sm font-semibold tracking-widest uppercase mb-2 ${textColor}`}
      >
        {label}
      </p>
      {/* Ligne de séparation en ambre */}
      <div className="w-12 h-1 bg-[#3dcac4] mb-6"></div>
      <p
        className={`text-6xl md:text-7xl font-extrabold leading-none ${textColor}`}
      >
        {value}
      </p>
    </div>
  );
};

// Composant principal (MIS À JOUR avec le contenu traduit)
const CounterSection: React.FC = () => {
  return (
    // Conteneur principal avec marges
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      {/* La grille des statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-xl">
        {/* Carte 1: CLIENTS SATISFAITS (Fond Noir) */}
        <CounterCard
          label="CLIENTS SATISFAITS"
          value="86%"
          isBlackBackground={true}
        />

        {/* Carte 2: PROJETS RÉALISÉS (Fond Blanc) */}
        <CounterCard
          label="PROJETS RÉALISÉS"
          value="325+"
          isBlackBackground={false}
        />

        {/* Carte 3: VALEUR DE L'ENTREPRISE (Fond Noir) */}
        <CounterCard
          label="VALEUR DE L'ENTREPRISE"
          value="138M"
          isBlackBackground={true}
        />

        {/* Carte 4: RESSOURCES HUMAINES (Fond Blanc) */}
        <CounterCard
          label="RESSOURCES HUMAINES"
          value="686+"
          isBlackBackground={false}
        />
      </div>
    </section>
  );
};

export default CounterSection;
