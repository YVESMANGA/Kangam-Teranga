"use client";
import React from "react";

// Définition des types pour garantir la cohérence des données (réutilisées du code précédent)
interface ServiceData {
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  features: string[];
}

interface ServiceTab {
  id: string;
  label: string;
  data: ServiceData;
}

// Les données de service fournies
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
      imageSrc: "/a3.webp",
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

// **********************************************
// NOTE: Utilisez le chemin réel de votre logo ici
// **********************************************
const logoImage = "/logo.png";

// Composant pour afficher la liste des caractéristiques en deux colonnes
const renderFeatures = (list: string[]) => {
  const midIndex = Math.ceil(list.length / 2);
  const col1 = list.slice(0, midIndex);
  const col2 = list.slice(midIndex);

  const featureItem = (text: string, index: number) => (
    <li key={index} className="flex items-start">
      <span className="text-teal-500 mr-2 font-bold text-lg">&rsaquo;</span>
      {text}
    </li>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
      <ul className="space-y-3">{col1.map(featureItem)}</ul>
      <ul className="space-y-3">{col2.map(featureItem)}</ul>
    </div>
  );
};

// Composant principal qui affiche tous les services
const AllServicesSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 space-y-20">
      {/* NOUVEAU: Logo Centré */}
      <div className="flex justify-center mb-4">
        <img
          src={logoImage}
          alt="Logo de l'entreprise"
          // Définir une taille raisonnable pour un logo en haut de page
          className="h-30 w-auto object-contain"
        />
      </div>

      {/* Titre de la section */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
        Nos Domaines d'Expertise
      </h1>

      <hr className="mb-16 border-gray-200" />

      {services.map((service, index) => {
        const { id, label, data } = service;
        const isImageFirst = index % 2 === 0;

        return (
          <article
            key={id}
            className="bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 ${
                isImageFirst ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Colonne de l'Image */}
              <div className="relative h-80 lg:h-auto min-h-[400px]">
                <img
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Colonne du Contenu Textuel */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-teal-500 mb-2">
                  {label}
                </p>

                {/* Titre */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 border-b-2 border-teal-500 pb-2">
                  {data.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-lg mb-8">{data.description}</p>

                {/* Liste des Caractéristiques */}
                <div className="mb-8">{renderFeatures(data.features)}</div>

                {/* Bouton d'Action */}
                <a
                  href={`/services/${id}`}
                  className="w-fit inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 transition duration-300 ease-in-out"
                >
                  DÉCOUVRIR LE SERVICE
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default AllServicesSection;
