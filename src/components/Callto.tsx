import React from "react";

// --- Définition des Icônes Placeholders (Pas de changement ici, elles restent des composants) ---
const IconBuilding = () => (
  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-1V9h1v8zm3 0h-1V9h1v8z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 18.29c-3.17-.96-5.5-4.52-5.5-9.2V6.31l5.5-2.06 5.5 2.06v4.78c0 4.68-2.33 8.24-5.5 9.2z" />
  </svg>
);

const IconSafety = () => (
  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 10h-4V6h-4v4H6v4h4v4h4v-4h4v-4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

const IconQuality = () => (
  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM17 18c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.42 15h11.16c.79 0 1.42-.64 1.42-1.42L21 8H4.21L3 2H1v2h2l3.6 7.59L5.25 14H19.7c.92 0 1.57-.84 1.34-1.7l-1.47-5.87c-.24-.96-1.11-1.63-2.09-1.63H6.38l-.66-3H21v2H7.42l-.58 3h13.92l-1.47 5.87c-.24.96-1.11 1.63-2.09 1.63H7.42z" />
  </svg>
);
// --- Fin des Définitions d'Icônes ---

interface FeatureCardProps {
  title: string;
  description: string;
  IconComponent: React.FC;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  IconComponent,
}) => {
  return (
    // Note: Le sélecteur d'icône est maintenant bg-amber-700
    <div className="flex flex-col items-start p-8 bg-black">
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-amber-700">
        <IconComponent />
      </div>
      <h3 className="mb-4 text-xl font-bold text-white uppercase">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-300">{description}</p>
    </div>
  );
};

// Composant principal (avec contenu traduit)
const CommitmentSection: React.FC = () => {
  return (
    <section className="bg-white p-4 sm:p-8 md:py-16 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-800 bg-black shadow-lg">
        <FeatureCard
          title="CONSTRUIRE AVEC CONFIANCE"
          description="Notre équipe polyvalente fournit des solutions innovantes et avant-gardistes adaptées aux objectifs et défis uniques de chaque projet."
          IconComponent={IconBuilding}
        />
        <FeatureCard
          title="EXPÉRIENCE & QUALITÉ"
          description="Notre équipe garantit des résultats de haute qualité par une exécution précise, des normes strictes et la passion de bien faire les choses dès le départ."
          IconComponent={IconShield}
        />
        <FeatureCard
          title="SANTÉ & SÉCURITÉ"
          description="Nous priorisons des normes de sécurité rigoureuses pour protéger notre personnel, nos clients et les communautés — assurant que chaque site est sécurisé et conforme."
          IconComponent={IconSafety}
        />
        <FeatureCard
          title="ENGAGEMENT ENVERS LA QUALITÉ"
          description="Nous maintenons des normes de qualité élevées des matériaux à la livraison — garantissant la durabilité, la performance et la satisfaction totale du client."
          IconComponent={IconQuality}
        />
      </div>
    </section>
  );
};

export default CommitmentSection;
