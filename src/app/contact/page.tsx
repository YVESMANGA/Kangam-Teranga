"use client";
import React, { useState, FormEvent } from "react";

// **********************************************
// NOTE: Utilisez le chemin réel de votre logo ici
// **********************************************
const logoImage = "/logo.png";

// **********************************************
// NOTE: Informations de contact de l'entreprise
// **********************************************
const contactInfo = {
  address: "123 Rue de l'Industrie, Zone Industrielle, Dakar, Sénégal",
  phone: "+221 77 571 19 04",
  email: "support.teranga@gmail.com",
  openingHours: "Du Lundi au Vendredi : 8h00 - 17h00",
};

// **********************************************
// Composant du Formulaire de Contact
// **********************************************
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // --- Logique d'envoi du formulaire ---
    // (Intégrez ici votre appel API ou votre service de formulaire)
    console.log("Formulaire soumis avec les données:", formData);
  };

  // Si le formulaire a été soumis avec succès
  if (isSubmitted) {
    return (
      <div className="bg-teal-50 p-8 rounded-lg text-center h-full flex flex-col justify-center items-center min-h-[400px]">
        <svg
          className="h-16 w-16 text-teal-600 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-teal-800 mb-2">
          Message Envoyé !
        </h3>
        <p className="text-gray-700">
          Merci de nous avoir contactés. Nous vous répondrons dans les plus
          brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nom */}
        <div className="col-span-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nom Complet *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
            value={formData.name}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        {/* Email */}
        <div className="col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Adresse Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
            value={formData.email}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      {/* Téléphone et Sujet */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Téléphone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={handleChange}
            value={formData.phone}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div className="col-span-1">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Objet / Service concerné *
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            onChange={handleChange}
            value={formData.subject}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Votre Message / Demande de Devis *
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          onChange={handleChange}
          value={formData.message}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-teal-500 focus:border-teal-500"
        />
      </div>

      {/* Bouton d'envoi */}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150"
        >
          Envoyer le Message
        </button>
      </div>
    </form>
  );
};

// **********************************************
// Composant de la Section Contact principale
// **********************************************
const ContactSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      {/* 1. Logo Centré en Haut de Page */}
      <div className="flex justify-center mb-8">
        <img
          src={logoImage}
          alt="Logo TERANGA Ressources Services"
          className="h-30 w-auto object-contain"
        />
      </div>

      {/* 2. En-tête de la Page */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Nous Contacter
        </h1>
        <p className="text-xl text-gray-600">
          Pour toute question, demande de devis ou de partenariat, veuillez
          utiliser le formulaire ou nos coordonnées directes.
        </p>
      </header>

      {/* Contenu principal (Formulaire + Infos) */}
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Colonne des Coordonnées (1/3) */}
          <div className="lg:col-span-1 space-y-8 p-6 bg-gray-50 rounded-lg h-full">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 border-teal-500">
              Coordonnées Directes
            </h2>

            {/* Adresse */}
            <div className="flex items-start space-x-4">
              <svg
                className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.707A2 2 0 0117 18v2h-4v-2c0-.523-.113-1.018-.343-1.465m-2.434 2.434a2 2 0 01-.166 1.843l.534.534a2 2 0 01-.166 1.843L6 21m0 0v-1h4v1m4 0v-1h4v1m-4 0h-4"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Adresse</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-start space-x-4">
              <svg
                className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.158l-2.25 1.5a1 1 0 00-.37.962l.024.148a1 1 0 001.272.766l2.126-.708a1 1 0 011.137.288l2.973 2.973a1 1 0 01.288 1.137l-.708 2.126a1 1 0 00.766 1.272l.148.024a1 1 0 00.962-.37l1.5-2.25a1 1 0 011.158-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-4c-6.627 0-12-5.373-12-12v-4a2 2 0 012-2z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Téléphone
                </h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-teal-600 hover:text-teal-800"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <svg
                className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-4 12H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-teal-600 hover:text-teal-800"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Horaires */}
            <div className="flex items-start space-x-4">
              <svg
                className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Horaires
                </h3>
                <p className="text-gray-600">{contactInfo.openingHours}</p>
              </div>
            </div>
          </div>

          {/* Colonne du Formulaire (2/3) */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200">
              Envoyez-nous un message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
