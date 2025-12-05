"use client";
import React from "react";

// Définition de la structure pour un élément de produit
interface Product {
  title: string;
  description: string;
  icon: string; // Utilisation d'un emoji comme placeholder d'icône
}

// Données statiques pour les trois catégories de produits
const products: Product[] = [
  {
    title: "Produits Miniers",
    description:
      "Fourniture d'équipements lourds, de produits chimiques spécialisés et de services de maintenance pour l'industrie minière. Nous garantissons efficacité et sécurité sur site.",
    icon: "⛏️",
  },
  {
    title: "Intrants Agricoles",
    description:
      "Distribution d'engrais, de semences de haute qualité et de produits phytosanitaires. Soutenir la productivité agricole et la durabilité des cultures.",
    icon: "🚜",
  },
  {
    title: "Matériaux de Construction",
    description:
      "Approvisionnement en ciment, acier, agrégats et autres matériaux essentiels pour les projets d'infrastructure et de bâtiment. Qualité certifiée pour la solidité.",
    icon: "🏗️",
  },
];

const ProductsSectionFr: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de la Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#3dcac4] uppercase tracking-wider mb-2">
            Notre Offre
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Nos Catégories de Produits Clés
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            De la ressource brute aux fondations de l'avenir, nous vous
            fournissons des intrants de qualité supérieure dans trois secteurs
            vitaux.
          </p>
        </div>

        {/* Grille des Produits */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {products.map((product, index) => (
            // Carte Produit
            <div
              key={index}
              className="group flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-[1.02]"
            >
              {/* Icône / Placeholder */}
              <div className="mb-6 w-16 h-16 flex items-center justify-center bg-[#3dcac4] rounded-full text-4xl shadow-md transition duration-300 group-hover:bg-black">
                {/* Utilisation d'un emoji comme icône */}
                <span role="img" aria-label={product.title}>
                  {product.icon}
                </span>
              </div>

              {/* Titre */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{product.description}</p>

              {/* Bouton d'action (Placeholder) */}
              <button className="mt-6 text-sm font-medium text-[#3dcac4] hover:text-black transition duration-300 border-b border-[#3dcac4] hover:border-black pb-1">
                Découvrir l'offre →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSectionFr;
