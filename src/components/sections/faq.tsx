"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Comment passer ma première commande chez Smile Up ?",
    answer: "Il suffit de nous contacter par email à smile.up045@gmail.com ou par téléphone au 06 60 49 79 25. Nous vous guidons pas à pas : envoi de la prescription, prise d'empreintes (physiques ou numériques via votre scanner intraoral), et suivi du dossier jusqu'à la livraison.",
  },
  {
    question: "Quels formats d'empreintes numériques acceptez-vous ?",
    answer: "Smile Up est compatible avec les principaux scanners intraoraux du marché : iTero, 3Shape, Medit, Carestream Dental et Planmeca. Vous pouvez nous envoyer vos fichiers STL directement par email ou via les plateformes partenaires.",
  },
  {
    question: "Quels sont les délais de fabrication ?",
    answer: "Les délais varient selon le type d'appareil : 3 à 5 jours pour les contentions et réparations, 7 à 10 jours pour les appareils fixes et amovibles, 10 jours pour les thermoformés, environ 15 jours pour les appareils fonctionnels, et 15 à 20 jours pour la gamme PUL. Les urgences sont traitées en priorité — contactez-nous directement.",
  },
  {
    question: "Est-ce que Smile Up sous-traite la fabrication ?",
    answer: "Non. Chaque appareil est intégralement conçu et fabriqué dans notre laboratoire à Ingré (45). Nous ne faisons appel à aucun prestataire extérieur, ce qui garantit un contrôle qualité total et une traçabilité complète.",
  },
  {
    question: "Livrez-vous partout en France ?",
    answer: "Oui. Nous livrons en France métropolitaine en J+1 via nos services de transport partenaires. Les délais de fabrication indiqués s'entendent hors délai de transport.",
  },
  {
    question: "Quels matériaux utilisez-vous pour vos appareils ?",
    answer: "Smile Up s'appuie exclusivement sur des fournisseurs reconnus : Leone, Dentaurum, Henry Schein, Scheu Dental, CAP Dentaire et Pul Concept. Tous les matériaux utilisés sont biocompatibles et certifiés conformes aux normes européennes en vigueur (CE).",
  },
  {
    question: "Vous travaillez avec quels types de praticiens ?",
    answer: "Smile Up est un laboratoire exclusivement dédié à l'orthodontie. Nous travaillons avec des orthodontistes, des chirurgiens-dentistes pratiquant l'ODF, et des pédiatres dentaires. Nous n'acceptons pas les commandes de particuliers.",
  },
  {
    question: "Pouvez-vous gérer des cas CFAO complexes ?",
    answer: "Oui. Nous disposons d'une chaîne CFAO complète pour la conception et la fabrication numérique : modélisation CAD, impression 3D haute résolution, et bagues sur mesure. Contactez-nous pour discuter de votre cas spécifique.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 md:px-12 py-14 md:py-20 bg-white w-full">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row lg:gap-20 items-start">
          <div className="lg:w-[340px] flex-shrink-0 mb-10 lg:mb-0 lg:sticky lg:top-28">
            <span className="text-xs font-medium tracking-widest uppercase text-[#E8734A] mb-4 block">
              Questions fréquentes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#1D5F75] leading-tight mb-4">
              Tout ce que vous devez savoir.
            </h2>
            <p className="text-[#3D5A6A] text-base leading-relaxed mb-6">
              Des questions sur nos gammes, délais ou modes de fonctionnement ? Vous trouverez les réponses ici.
            </p>
            <a
              href="mailto:smile.up045@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-[#1D5F75] text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-[#2A7A95]">
              Poser une question
            </a>
          </div>

          <div className="flex-1 divide-y divide-[#46aac9]/10">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                  aria-expanded={open === i}
                >
                  <span className={`text-base font-medium leading-snug transition-colors ${open === i ? 'text-[#46aac9]' : 'text-[#1D5F75] group-hover:text-[#46aac9]'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#46aac9] flex-shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                    strokeWidth={1.5}
                  />
                </button>
                {open === i && (
                  <p className="mt-3 text-sm text-[#5A7A8A] leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
