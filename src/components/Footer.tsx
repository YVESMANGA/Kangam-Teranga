"use client";
import React from "react";

// --- Définitions de Données Statiques ---
const quickLinksFr = [
  { label: "Acceuil", href: "/" },
  { label: "À Propos", href: "/contact" },
  { label: "Services", href: "/services" },
  { label: "Produits", href: "/produits" },
  { label: "Nous Contacter", href: "/contact" },
];

const ourServicesFr = [
  { label: "Construction Résidentielle", href: "#" },
  { label: "Construction Commerciale", href: "#" },
  { label: "Rénovation & Réaménagement", href: "#" },
  { label: "Ingénierie Structurelle", href: "#" },
  { label: "Gestion de Projet", href: "#" },
  { label: "Conception & Réalisation", href: "#" },
];

// Composant pour un lien avec le décorateur ambre
const FooterLink: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => (
  <a
    href={href}
    // Changement ici: hover:text-amber-700
    className="flex items-center text-gray-400 hover:text-[#3dcac4] transition mb-2 text-sm"
  >
    {/* Décorateur ambre: text-amber-700 */}
    <span className="text-[#3dcac4] mr-2 text-lg font-bold">›</span>
    {label}
  </a>
);

// --- Composant Principal du Footer (Français) ---
const FooterFr: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 px-4 md:px-12 lg:px-24">
      {/* Ligne 1: Informations de Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-800">
        {/* Colonne 1: Logo et Slogan */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center">
            {/* Logo BuildNest: bg-amber-700 */}
            <div className=" w-15 h-15 flex items-center justify-center mr-2">
              <img src="/logo.png" alt="" />
            </div>
            <h3 className="text-xl font-bold">Teranga Ressource Sevices</h3>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            Force. Structure. Stabilité.
          </p>
        </div>

        {/* Colonne 2 & 3: Adresse & Contact */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Bloc Adresse: border-amber-700 */}
          <div className="flex items-center bg-gray-900 p-4 border-l-4 border-[#3dcac4]">
            {/* Icône: text-amber-700 */}
            <span className="text-amber-700 text-2xl mr-4"></span>
            <div>
              <p className="font-semibold text-white">
                Adresse de la Compagnie
              </p>
              <p className="text-sm text-gray-400">Senegal</p>
            </div>
          </div>

          {/* Bloc Contact: border-amber-700 */}
          <div className="flex items-center bg-gray-900 p-4 border-l-4 border-[#3dcac4]">
            {/* Icône: text-amber-700 */}
            <span className="text-amber-700 text-2xl mr-4"></span>
            <div>
              <p className="font-semibold text-white">+221 77 571 19 04</p>
              <p className="text-sm text-gray-400">support.teranga@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ligne 2: Navigation et Newsletter */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 pb-12 border-b border-gray-800">
        {/* Colonne 1: Description et Bouton */}
        <div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Avec des décennies d'expérience et une passion pour l'excellence,
            nous nous engageons à fournir des solutions de construction qui
            résistent à l'épreuve du temps.
          </p>

          {/* Bouton "BÂTISSONS ENSEMBLE" */}
          <button className="flex items-center bg-white text-black font-bold py-3 px-6 hover:bg-gray-100 transition duration-300 focus:outline-none">
            BÂTISSONS ENSEMBLE
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

          {/* Icônes Sociales: hover:bg-amber-700 */}
          <div className="flex space-x-3 mt-6">
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-[#3dcac4] transition">
              <span className="text-white text-sm">f</span>
            </div>
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-[#3dcac4] transition">
              <span className="text-white text-sm">t</span>
            </div>
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-[#3dcac4] transition">
              <span className="text-white text-sm">in</span>
            </div>
          </div>
        </div>

        {/* Colonne 2: Liens Rapides */}
        <div>
          <h4 className="text-lg font-bold mb-4 uppercase">Liens Rapides</h4>
          {quickLinksFr.map((link) => (
            <FooterLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>

        {/* Colonne 3: Nos Services */}
        <div>
          <h4 className="text-lg font-bold mb-4 uppercase">Nos Services</h4>
          {ourServicesFr.map((link) => (
            <FooterLink key={link.label} label={link.label} href={link.href} />
          ))}
        </div>

        {/* Colonne 4: S'abonner aux Nouvelles */}
        <div>
          <h4 className="text-lg font-bold mb-4 uppercase">
            S'abonner aux Nouvelles
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Recevez des mises à jour de projets et des aperçus de l'industrie —
            pas de spam, juste de la valeur.
          </p>

          {/* Champ d'email et bouton */}
          <div className="flex">
            <input
              type="email"
              placeholder="Votre courriel*"
              className="py-3 px-4 bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none w-full"
            />
            {/* Bouton Newsletter: bg-amber-700 */}
            <button className="bg-[#3dcac4] text-black w-12 h-12 flex items-center justify-center hover:bg-amber-600 transition">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Ligne 3: Copyright et Mentions Légales */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 text-xs text-gray-500">
        <p>Copyright © 2025 Kangam. Conçu et Développé par Kangam .</p>
        <div className="space-x-3 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Politique de confidentialité.
          </a>
          <a href="#" className="hover:text-white transition">
            Conditions d'utilisation.
          </a>
          <a href="#" className="hover:text-white transition">
            Plan du site.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterFr;
