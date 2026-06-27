"use client"

import { Briefcase, Code2, Users, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  {
    icon: Briefcase,
    number: "01",
    title: "Fédérer & coordonner",
    text: "+12 ans à piloter des équipes, clarifier les objectifs, créer les bonnes conditions et aligner des profils variés vers un but commun.",
  },
  {
    icon: Users,
    number: "02",
    title: "Comprendre le terrain",
    text: "Partir des besoins et des contraintes réelles avant de proposer une solution. Identifier les bonnes personnes, distinguer symptômes et causes profondes, valider les hypothèses.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Mesurer l'impact",
    text: "Chaque initiative doit répondre à un besoin réel et générer un gain mesurable : adoption, performance, temps économisé ou impact business. Pas d'initiative sans indicateur, pas d'indicateur sans décision.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Orchestrer humains & agents IA",
    text: "Je conçois les objectifs, les contextes, les workflows, les validations et les boucles d'amélioration permettant à humains, équipes tech et agents IA de collaborer efficacement autour d'un objectif produit commun.",
  },
]

const visionItems = [
  "d'un objectif clair",
  "d'un contexte partagé",
  "d'un rôle précis",
  "d'outils adaptés",
  "de garde-fous",
  "d'indicateurs de réussite",
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as number[] }
  },
}

export default function WhoAmI() {
  return (
    <section id="about" className="py-16 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase text-primary mb-3"
        >
          Ma vision
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance"
        >
          Du management d&apos;équipes{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            à l&apos;orchestration produit & IA
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          La valeur naît lorsque les bonnes personnes, les bons outils et le bon contexte travaillent ensemble.
        </motion.p>

        {/* MA VISION — pièce maîtresse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-xl p-6 sm:p-8 mb-10 border-2"
          style={{
            background: "color-mix(in oklch, var(--teal) 6%, var(--background))",
            borderColor: "var(--teal)",
          }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-widest mb-5 flex items-center gap-2"
            style={{ color: "var(--teal)" }}
          >
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--teal)" }} />
            Ma vision
          </p>

          <p className="text-base sm:text-lg font-semibold text-foreground mb-3 leading-snug">
            Je n&apos;utilise pas simplement l&apos;IA.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Je conçois et j&apos;orchestre des systèmes où humains, équipes techniques et agents IA collaborent autour d&apos;un objectif produit commun.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-foreground mb-4">
                Comme une équipe humaine, un agent IA a besoin :
              </p>
              <ul className="space-y-2.5">
                {visionItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--teal)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-lg p-5 flex flex-col justify-center"
              style={{ background: "color-mix(in oklch, var(--teal) 9%, var(--background))" }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Mon rôle reste identique à celui que j&apos;exerçais en management opérationnel :
              </p>
              <p className="text-base font-semibold text-foreground leading-snug">
                clarifier, fédérer, coordonner et créer les conditions de la réussite collective.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cartes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.number}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-xl p-5 sm:p-7 hover:border-primary/40 transition-colors duration-300 relative overflow-hidden"
            >
              <span
                className="absolute top-4 right-5 font-serif text-5xl font-bold opacity-5 select-none"
                style={{ color: "var(--teal)" }}
              >
                {card.number}
              </span>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "var(--teal-dim)" }}
              >
                <card.icon size={18} style={{ color: "var(--teal)" }} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
