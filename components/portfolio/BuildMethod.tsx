"use client"

import { Fragment } from "react"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Comprendre les utilisateurs, leurs contraintes et leurs vrais problèmes.",
  },
  {
    number: "02",
    title: "Structurer",
    description: "Transformer un besoin en objectif produit clair et partagé.",
  },
  {
    number: "03",
    title: "Orchestrer",
    description:
      "Faire collaborer utilisateurs, métiers, développeurs et agents IA autour d'un workflow commun.",
  },
  {
    number: "04",
    title: "Livrer",
    description:
      "Transformer rapidement une idée en solution testable grâce aux outils modernes et à l'IA.",
  },
  {
    number: "05",
    title: "Mesurer",
    description:
      "Observer les résultats, apprendre et améliorer continuellement le produit.",
  },
]

export default function BuildMethod() {
  return (
    <section id="method" className="py-16 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase text-primary mb-3"
        >
          Démarche produit
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance"
        >
          Ma façon de{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            penser un produit
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-xl mb-12 leading-relaxed text-sm"
        >
          Cinq piliers qui guident chaque décision produit, de la compréhension du problème à l&apos;amélioration continue.
        </motion.p>

        {/* Desktop : flux horizontal */}
        <div className="hidden md:flex items-stretch gap-3 mb-10">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex-1 bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors duration-300"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "var(--teal-dim)" }}
                >
                  <span className="text-xs font-bold" style={{ color: "var(--teal)" }}>
                    {step.number}
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground mb-2">{step.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="flex items-center text-muted-foreground/30 text-base shrink-0 select-none">
                  →
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Mobile : flux vertical */}
        <div className="md:hidden space-y-2 mb-10">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--teal-dim)" }}
                  >
                    <span className="text-xs font-bold" style={{ color: "var(--teal)" }}>
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{step.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="flex justify-center text-muted-foreground/30 select-none text-sm">
                  ↓
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Citation de clôture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl px-5 sm:px-8 py-5 sm:py-6 max-w-3xl mx-auto text-center"
          style={{
            background: "var(--teal-dim)",
            border: "1px solid color-mix(in srgb, var(--teal) 20%, transparent)",
          }}
        >
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">
            &ldquo;Je ne commence jamais par une fonctionnalité. Je commence toujours par comprendre le problème, structurer le contexte, orchestrer les bonnes expertises et mesurer la valeur créée.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
