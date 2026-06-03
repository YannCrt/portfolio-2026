'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Préparation de l'objet à envoyer à l'API de Web3Forms
    const payload = {
      ...formData,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
      subject: "Nouveau message depuis ton Portfolio !",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset du formulaire
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32">
      {/* En-tête de section */}
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-[var(--color-border-glow)] pb-8">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl">
          03. Prendre Contact
        </h2>
        <p className="mt-2 text-sm text-indigo-400 font-mono md:mt-0">
          // get_in_touch
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Infos de contact à gauche */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-lg font-semibold text-neutral-200">Discutons de votre projet</h3>
          <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
            Je suis activement à la recherche d'une alternance pour septembre 2026. Si mon profil hybride en développement et administration système correspond à vos besoins, envoyez-moi un message.
          </p>
          <div className="pt-4 space-y-2 text-xs font-mono text-neutral-400">
            <p>📍 Paris 12ème, France</p>
            <p>✉️ Cretinyann@gmail.com</p>
            <p>📞 +33 6 72 39 71 27</p>
            <a
  href="https://github.com/YannCrt"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-white transition-colors"
>
  <FaGithub size={16} />
  <span>GitHub</span>
</a>

<a
  href="https://www.linkedin.com/in/yann-cretin-8a7492302/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-white transition-colors"
>
  <FaLinkedin size={16} />
  <span>LinkedIn</span>
</a>
          </div>
        </div>

        {/* Formulaire à droite */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-neutral-400 mb-2">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full h-11 px-4 rounded-lg border border-[var(--color-border-glow)] bg-[var(--color-card)]/30 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                placeholder="Ex: Jean Dupont"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-neutral-400 mb-2">Adresse email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full h-11 px-4 rounded-lg border border-[var(--color-border-glow)] bg-[var(--color-card)]/30 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                placeholder="jean.dupont@entreprise.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-neutral-400 mb-2">Votre message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-[var(--color-border-glow)] bg-[var(--color-card)]/30 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              placeholder="Bonjour Yann, j'aimerais échanger avec vous concernant..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 h-11 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-[var(--color-background)] text-sm font-semibold transition-all disabled:opacity-50 active:scale-95 flex items-center justify-center cursor-pointer"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>

          {/* États de retour utilisateur (Feedback) */}
          {submitStatus === 'success' && (
            <p className="text-xs text-emerald-400 font-mono mt-2">✓ Message envoyé avec succès. Merci !</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-xs text-rose-400 font-mono mt-2">✕ Une erreur est survenue, veuillez réessayer.</p>
          )}
        </form>
      </div>
    </section>
  );
}