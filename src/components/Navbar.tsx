"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  // État pour gérer l'ouverture/fermeture du menu mobile (Hamburger)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Acceuil", href: "#" },
    { label: "A propos", href: "#" },
    { label: "Services", href: "#" },
    { label: "Produits", href: "#" },
    { label: "Partenaires", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Barre de navigation principale (FIXE)
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-1000 h-20 flex items-center">
      <div className="container mx-auto flex justify-between items-center h-full px-4 lg:px-0">
        {/* Section Logo (fond noir - Reste à gauche) */}
        <div className="flex items-center bg-black h-full px-4 sm:px-6 flex-shrink-0">
          {/* Le rectangle marron clair (maintenant bg-amber-500) */}
          <div className="bg-amber-700 w-8 h-8 flex items-center justify-center mr-2">
            <span className="text-black font-bold text-xl">T</span>
          </div>

          {/* Texte du Logo */}
          <div className="hidden sm:block">
            <div className="text-white text-xl font-bold">
              Teranga Ressources solutions
            </div>
            <div className="text-gray-400 text-xs mt-1">
              Strength. Structure. Stability.
            </div>
          </div>
        </div>

        {/* Liens de Navigation (Bureau) */}
        <ul className="hidden lg:flex items-center space-x-8 ml-auto">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                // hover:text-amber-500 pour l'effet de survol
                className="text-black font-semibold text-sm uppercase hover:text-amber-500 transition duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton Hamburger (Mobile) */}
        <button
          className="lg:hidden text-black focus:outline-none ml-4"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {/* Icône Hamburger ou Croix (pas de changement de couleur ici) */}
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile Déroulant */}
      <div
        className={`absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 text-black font-semibold text-base uppercase hover:bg-gray-100 transition duration-200 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
