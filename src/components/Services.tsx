"use client";
import React, { useState } from "react";

// --- 1. Interfaces et Données (Traduites et Mises à Jour) ---

interface ServiceData {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  features: string[];
}

interface ServiceTab {
  id: "sous_traitance" | "terrassement" | "projet"; // IDs simples pour la logique d'état
  label: string;
  data: ServiceData;
}

const services: ServiceTab[] = [
  {
    id: "sous_traitance",
    label: "SOUS-TRAITANCE & LOGISTIQUE",
    data: {
      title: "Gestion Précise Des Ressources et des Chantiers",
      description:
        "Nous optimisons la chaîne d'approvisionnement et la coordination des équipes. Notre service de sous-traitance assure une exécution efficace, sécurisée et conforme aux délais, garantissant la fluidité de vos opérations.",
      imageAlt: "Équipe de construction révisant les plans sur un chantier.",
      imageSrc: "/s1.webp",
      features: [
        "Coordination des Sous-Traitants",
        "Logistique et Approvisionnement",
        "Gestion des Équipements Lourds",
        "Contrôle Qualité Rigoureux",
        "Planification et Ordonnancement",
        "Conformité Réglementaire",
      ],
    },
  },
  {
    id: "terrassement",
    label: "TERRASSEMENT ET EXCAVATION",
    data: {
      title: "Préparer Le Terrain Pour Des Fondations Solides",
      description:
        "Nous assurons tous les travaux préparatoires essentiels à la réussite de votre construction, y compris le terrassement, l'excavation et la gestion des sols. Notre expertise garantit des fondations stables et une préparation optimale du site.",
      imageAlt: "Pelle mécanique travaillant sur un chantier d'excavation.",
      imageSrc: "/s2.webp",
      features: [
        "Excavation Profonde et Déblaiement",
        "Mise à Niveau et Compactage",
        "Drainage et Gestion des Eaux",
        "Préparation des Fondations",
        "Démolition et Nettoyage de Site",
        "Stabilisation des Sols",
      ],
    },
  },
  {
    id: "projet",
    label: "TRANSPORT ET ÉTUDE DE PROJET",
    data: {
      title: "De la Conception à la Réalisation, Sans Accroc",
      description:
        "De l'étude de faisabilité initiale au transport des matériaux miniers, nous vous accompagnons. Notre service d'étude de projet garantit une planification financière et technique solide, tandis que notre transport sécurisé soutient vos opérations minières.",
      imageAlt: "Ingénieur examinant un plan sur un écran.",
      imageSrc: "/s3.jpg",
      features: [
        "Étude de Faisabilité Technique",
        "Analyse de Rentabilité",
        "Transport de Matériaux Minier",
        "Gestion des Permis et Licences",
        "Optimisation des Coûts",
        "Évaluation des Risques de Projet",
      ],
    },
  },
];

// ----------------------------------------------------------------------
// Composant 1: Titre de la Section (Harmonisé)
const ServicesTitle: React.FC = () => {
  return (
    <div className="bg-white pt-16 pb-8 px-4 md:px-12 lg:px-24 text-center">
      {/* Étiquette d'accentuation avec décalage - Utilisation de bg-amber-700 */}
      <div className="inline-block bg-black py-2 px-6 relative z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-amber-700 transform translate-x-1 translate-y-1 -z-10"></div>
        <p className="text-sm font-semibold text-white tracking-widest uppercase relative z-10">
          NOS SERVICES
        </p>
      </div>

      {/* Titre Principal (Traduit) */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-black mt-10">
        Ce Que Nous Bâtissons, Nous Le Bâtissons Bien
      </h1>

      {/* Description (Traduite) */}
      <p className="mt-4 text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
        De la sous-traitance spécialisée au transport minier — notre équipe
        d'experts fournit des solutions de construction sur mesure, adaptées à
        votre vision.
      </p>
    </div>
  );
};

// ----------------------------------------------------------------------
// Composant 2: Services Interactifs (Harmonisé)
const InteractiveServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "sous_traitance" | "terrassement" | "projet"
  >("sous_traitance");

  const currentTab = services.find((s) => s.id === activeTab) || services[0];
  const currentServiceData = currentTab.data;

  const renderTab = (tab: ServiceTab) => {
    const isActive = activeTab === tab.id;
    // Couleurs d'accentuation mises à jour avec l'ambre
    const activeClasses = "bg-black text-white border-b-2 border-amber-700";
    const inactiveClasses =
      "bg-white text-gray-800 border-b-2 border-gray-200 hover:bg-gray-50 transition duration-150";

    return (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`px-8 py-4 font-semibold text-sm tracking-wide focus:outline-none uppercase ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        {tab.label}
      </button>
    );
  };

  const renderFeature = (feature: string) => (
    <div key={feature} className="flex items-start lg:w-1/2 mb-4">
      {/* Couleur du point mise à jour avec l'ambre */}
      <span className="text-amber-700 mr-2 text-xl font-bold">›</span>
      <p className="text-sm text-gray-700">{feature}</p>
    </div>
  );

  return (
    <section className="bg-white px-4 md:px-12 lg:px-24 pb-16">
      {/* Onglets de Navigation */}
      <div className="flex justify-start border-b border-gray-200 overflow-x-auto whitespace-nowrap">
        {services.map(renderTab)}
      </div>

      {/* Contenu Dynamique */}
      <div className="flex flex-col lg:flex-row mt-12">
        {/* Colonne de Gauche : Image */}
        <div className="lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
          <img
            key={activeTab}
            src={currentServiceData.imageSrc}
            alt={currentServiceData.imageAlt}
            // Utilisation de h-96 pour une hauteur fixe sur les petits écrans, ou h-full sur large
            className="w-full h-96 lg:h-full object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Colonne de Droite : Texte et Fonctionnalités */}
        <div className="lg:w-1/2 pl-0 lg:pl-12 pt-0 lg:pt-8">
          {/* Décoration et Titre (Décoration en ambre) */}
          <div className="flex items-start">
            <div className="w-1 bg-amber-700 h-16 inline-block mr-4 flex-shrink-0"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-black align-top leading-tight">
              {currentServiceData.title}
            </h2>
          </div>

          {/* Description */}
          <p className="mt-6 text-base text-gray-700 leading-relaxed border-b border-gray-200 pb-6">
            {currentServiceData.description}
          </p>

          {/* Liste des Fonctionnalités */}
          <div className="mt-6 flex flex-wrap">
            {currentServiceData.features.map(renderFeature)}
          </div>

          {/* Bouton "DÉTAIL DU SERVICE" (Couleur Ambre) */}
          <button className="flex items-center bg-amber-700 text-black font-bold py-3 px-6 mt-8 hover:bg-amber-600 transition duration-300 focus:outline-none">
            DÉTAIL DU SERVICE
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
    </section>
  );
};

// ----------------------------------------------------------------------
// Composant 3: Wrapper (Combine les deux sections)
const FullServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <ServicesTitle />
      <InteractiveServicesSection />
    </div>
  );
};

export default FullServicesPage;
