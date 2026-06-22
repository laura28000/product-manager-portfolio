"use client"

import { motion } from "framer-motion"

const formations = [
  {
    period: "nov. 2025 – mars 2026",
    title: "Product Manager",
    school: "Join Maestro",
    badge: "RS6808 — Concevoir et mettre en œuvre une stratégie d'activation digitale",
    description:
      "Formation basée à 80 % sur la pratique avec des cas produits concrets issus d'entreprises comme BlaBlaCar, Doctolib, Netflix, Spotify, Nickel et d'autres. Intervenants issus du terrain. Apprentissage orienté résolution de problèmes. Projet de certification : problématique réelle proposée par Welcome to the Jungle.",
    skills: [
      "Product Discovery",
      "Analyse utilisateur",
      "Priorisation produit",
      "Roadmap",
      "Backlog management",
      "Méthodes agiles",
      "Scrum",
      "Stratégie digitale",
    ],
  },
  {
    period: "juil. 2025 – sept. 2025",
    title: "Titre professionnel Développeur Web et Web Mobile",
    school: "Le Reacteur",
    badge: "RNCP37674 — Bac+3/4",
    description:
      "Formation orientée pratique, centrée sur l'écosystème JavaScript : React, Node.js, Express, MongoDB. Réalisation de projets concrets inspirés de Vinted, Deliveroo et Airbnb. Projet final : MVP back-end et application mobile pour Baume, communauté destinée aux femmes vivant une rupture sentimentale. Contribution en tant que Product Owner et développeuse.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Native",
      "Expo",
      "API REST",
      "GitHub",
    ],
  },
]

const certifications = [
  { name: "Notion Academy", badge: "Badge officiel" },
  { name: "Claude AI / Anthropic", badge: "Badge officiel" },
  { name: "Marketing Digital / HubSpot Academy", badge: "Badge officiel" },
]

const experiences = [
  {
    period: "juil. 2022 – juil. 2025",
    title: "Chef d'équipe production",
    company: "Aptiv — Épernon",
    description:
      "Management d'équipes internes et intérimaires dans un environnement industriel automobile exigeant, avec des enjeux forts de qualité, performance, sécurité et continuité opérationnelle.",
    project: {
      label: "Projet de transformation digitale",
      title: "Programme de Transformation Digitale des Processus Opérationnels",
      text: "Transformation de plusieurs processus papier en solution digitale orientée utilisateurs afin d'améliorer la traçabilité, la fiabilité des données et l'expérience terrain. Pilotage opérationnel du projet, implication de tous les métiers, test utilisateur en production, mise en œuvre progressive et mesure de l'adoption.",
    },
    results: null,
    skills: [
      "Management d'équipe",
      "QRQC / 5 pourquoi",
      "Amélioration continue",
      "Coordination RH & qualité",
      "Gestion des imprévus",
      "Prévention RPS",
    ],
  },
  {
    period: "mai 2017 – juil. 2022",
    title: "Coordinatrice de production / Team Leader",
    company: "Novo Nordisk, Chartres",
    description:
      "Management opérationnel et coordination d'une équipe de 16 personnes dans un environnement pharmaceutique exigeant, avec des enjeux forts de qualité, sécurité, conformité et performance opérationnelle.",
    project: null,
    results: {
      label: "Résultats",
      points: [
        "Contribution à la réduction du lead time de production grâce à l'optimisation des flux et du pilotage opérationnel",
        "Contribution à la diminution des erreurs dossiers de lots grâce à la standardisation, au suivi qualité et à l'amélioration continue",
      ],
    },
    skills: [
      "Coordination d'équipe (16 pers.)",
      "Planning de production",
      "Tableaux de bord performance",
      "A3 / Long Stop Boards",
      "Décisions qualité",
      "Team Development Plan",
      "Zone aseptique",
      "Dossiers de lots qualité",
    ],
  },
]

function FormationCard({ f, index }: { f: (typeof formations)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300"
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <p className="text-xs text-muted-foreground font-mono mb-1">{f.period}</p>
          <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
          <p className="text-sm font-medium" style={{ color: "var(--teal)" }}>{f.school}</p>
        </div>
        <span
          className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded shrink-0"
          style={{ color: "var(--teal)", background: "var(--teal-dim)" }}
        >
          {f.badge}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.description}</p>
      <div className="flex flex-wrap gap-2">
        {f.skills.map((s) => (
          <span
            key={s}
            className="px-2.5 py-1 rounded text-xs text-muted-foreground bg-secondary border border-border"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300"
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <p className="text-xs text-muted-foreground font-mono mb-1">{exp.period}</p>
          <h3 className="text-base font-semibold text-foreground">{exp.title}</h3>
          <p className="text-sm text-muted-foreground">{exp.company}</p>
        </div>
        <span
          className="text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded shrink-0"
          style={{ color: "var(--gold)", background: `var(--gold)18` }}
        >
          Expérience
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

      {exp.project && (
        <div
          className="rounded-lg p-4 mb-4 border-2 text-sm"
          style={{ background: "var(--teal-dim)", borderColor: "var(--teal)" }}
        >
          <p className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2" style={{ color: "var(--teal)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--teal)" }} />
            {exp.project.label}
          </p>
          <p className="text-sm font-semibold text-foreground mb-1">{exp.project.title}</p>
          <p className="text-muted-foreground leading-relaxed">{exp.project.text}</p>
        </div>
      )}

      {exp.results && (
        <div
          className="rounded-lg p-4 mb-4 border"
          style={{ background: "var(--gold)08", borderColor: "var(--gold)40" }}
        >
          <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--gold)" }}>
            {exp.results.label}
          </p>
          <ul className="space-y-2">
            {exp.results.points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {exp.skills.map((s) => (
          <span
            key={s}
            className="px-2.5 py-1 rounded text-xs text-muted-foreground bg-secondary border border-border"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase text-primary mb-3"
        >
          Parcours
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance"
        >
          +12 ans d&apos;expérience terrain{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            au service du produit
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-xl mb-16 leading-relaxed text-sm"
        >
          Avant ma spécialisation en Product Management, j&apos;ai construit une solide expérience
          en management d&apos;équipe, coordination opérationnelle, résolution de problèmes,
          amélioration continue et pilotage de performance dans des environnements industriels
          exigeants. Cette expérience me donne une maturité professionnelle forte : comprendre les
          réalités du terrain, arbitrer sous contrainte, coordonner les parties prenantes et
          transformer les problèmes en plans d&apos;action concrets.
        </motion.p>

        {/* Formations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3
            className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: "var(--teal)" }}
          >
            Formations
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {formations.map((f, index) => (
              <FormationCard key={f.title} f={f} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Certifications complémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3
            className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: "var(--teal)" }}
          >
            Certifications complémentaires — 2026
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c, index) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border"
              >
                <span className="text-sm font-medium text-foreground">{c.name}</span>
                <span className="text-xs text-muted-foreground">— {c.badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experiences */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3
            className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            Expériences professionnelles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.title} exp={exp} index={index} />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-muted-foreground mt-6 text-center"
          >
            Expériences précédentes chez Guerlain, Paco Rabanne (PUIG) et GT Logistics Chartres, qui ont contribué à construire une solide culture terrain, une forte exigence opérationnelle et une approche pragmatique de la résolution de problèmes, au contact direct des enjeux de qualité, de performance et d'amélioration continue.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
