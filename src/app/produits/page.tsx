"use client";
import React from "react";

// **********************************************
// NOTE: Utilisez le chemin réel de votre logo ici
// **********************************************
const logoImage = "/logo.png";

// Définition des types pour une catégorie de produit (mis à jour pour deux images)
interface ProductCategory {
  title: string;
  description: string;
  // imageSrcs est maintenant un tableau
  imageSrcs: string[];
  details: string[]; // Liste des produits ou sous-catégories
  color: string; // Pour les couleurs d'accentuation Tailwind
}

// Les données des catégories de produits avec DEUX images par défaut
const productCategories: ProductCategory[] = [
  {
    title: "Produits Miniers",
    description:
      "Nous fournissons des minerais bruts de haute qualité et des sous-produits pour l'industrie lourde. Fiabilité et conformité aux standards internationaux garanties.",
    // DEUX images par défaut pour les produits miniers
    imageSrcs: ["/p4.png", "/p5.png"],
    details: [
      "Or et métaux précieux",
      "Fer et métaux de base",
      "Matériaux agrégats (latérite, granite)",
      "Sous-produits miniers divers",
    ],
    color: "bg-teal-500",
  },
  {
    title: "Intrants Agricoles",
    description:
      "Soutien au secteur agricole par la fourniture d'intrants essentiels pour l'amélioration des rendements et la santé des cultures.",
    // DEUX images par défaut pour les intrants agricoles
    imageSrcs: ["/p1.jpeg", "/p2.jpeg"],
    details: [
      "Engrais et amendements",
      "Semences certifiées",
      "Produits phytosanitaires",
      "Équipements d'irrigation de base",
    ],
    color: "bg-green-500",
  },
  {
    title: "Matériaux de Construction",
    description:
      "Une gamme complète de matériaux robustes pour garantir la solidité et la durabilité de vos projets d'infrastructures et de bâtiments.",
    // DEUX images par défaut pour les matériaux de construction
    imageSrcs: ["/p7.png", "/p8.png"],
    details: [
      "Ciment et liants hydrauliques",
      "Acier et fers à béton",
      "Sable et gravier de carrière",
      "Éléments préfabriqués (blocs, pavés)",
    ],
    color: "bg-indigo-500",
  },
];

const ProductPage: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      {/* 1. Logo Centré en Haut de Page */}
      <div className="flex justify-center mb-8">
        <img
          src={logoImage}
          alt="Logo TERANGA Ressources Services"
          // Taille du logo
          className="h-20 w-auto object-contain" // Réduit légèrement la taille par rapport à h-30 qui n'est pas standard Tailwind
        />
      </div>

      {/* 2. En-tête de la Page */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Notre Gamme de Produits
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          TERANGA Ressources Services est votre partenaire pour
          l'approvisionnement en ressources essentielles à l'industrie,
          l'agriculture et la construction.
        </p>
      </header>

      {/* 3. Cartes des Catégories de Produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {productCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 group"
          >
            {/* Espace pour les DEUX Images (Mise en page Flex/Grid) */}
            <div className="h-56 relative overflow-hidden">
              <div className="flex w-full h-full">
                {category.imageSrcs.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${category.title} - Image ${i + 1}`}
                    // Chaque image prend la moitié de la largeur
                    className="w-1/2 h-full object-cover transition duration-500 group-hover:opacity-85 border-r border-white/20 last:border-r-0"
                  />
                ))}
              </div>

              {/* Bandes de couleur d'accentuation en haut de l'image */}
              <div
                className={`absolute top-0 left-0 w-full h-2 ${category.color}`}
              ></div>
            </div>

            <div className="p-6">
              {/* Titre */}
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {category.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-5 text-sm">
                {category.description}
              </p>

              {/* Liste des Produits/Détails */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-700 border-t pt-3">
                  Ce que nous fournissons :
                </h3>
                <ul className="space-y-2">
                  {category.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start text-gray-700 text-base"
                    >
                      <svg
                        className={`h-5 w-5 mr-2 flex-shrink-0 text-teal-500`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
