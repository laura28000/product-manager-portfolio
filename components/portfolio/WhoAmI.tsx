"use client"

import { Compass, Users, Target, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  {
    icon: Compass,
    number: "01",
    title: "Comprendre le terrain",
    text: "Partir des utilisateurs, des irritants réels et des contraintes opérationnelles pour identifier les bons problèmes avant de proposer une solution.",
  },
  {
    icon: Users,
    number: "02",
    title: "Connecter les équipes",
    text: "Créer du lien entre les métiers, la tech, les utilisateurs et les parties prenantes pour construire une vision commune et avancer dans la même direction.",
  },
  {
    icon: Target,
    number: "03",
    title: "Embarquer avec clarté",
    text: "Faire collaborer des profils différents avec écoute, structure et énergie, même dans des contextes flous ou exigeants.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Transformer en solutions utiles",
    text: "Prioriser ce qui crée de la valeur, construire des solutions simples et mesurables, et garder le cap sur l'adoption, l'impact et les résultats.",
  },
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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
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
          Qui suis-je ?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance"
        >
          Comprendre, connecter, embarquer,{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            transformer.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mb-14 space-y-4 text-muted-foreground leading-relaxed text-sm"
        >
          <p>
            Après plus de 12 ans dans des environnements opérationnels exigeants, j&apos;ai développé
            une conviction forte : les meilleurs produits naissent quand on prend le temps de
            comprendre le terrain, les utilisateurs, les irritants du quotidien et les personnes
            derrière les besoins.
          </p>
          <p>
            Curieuse, persévérante et orientée collectif, j&apos;aime créer du lien entre les équipes,
            faciliter la collaboration et faire avancer les sujets avec clarté, énergie et exigence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-6 mb-12"
        >
          {cards.map((card) => (
            <motion.div
              key={card.number}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-xl p-7 hover:border-primary/40 transition-colors duration-300 relative overflow-hidden"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl px-8 py-6 max-w-3xl mx-auto text-center"
          style={{ background: "var(--teal-dim)", border: "1px solid color-mix(in srgb, var(--teal) 20%, transparent)" }}
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Ma conviction :</span>{" "}
            construire des produits utiles, c&apos;est d&apos;abord comprendre les personnes et les
            organisations, créer les conditions pour que les équipes avancent ensemble, et transformer
            des problèmes réels en solutions simples, adoptées et créatrices de valeur.{" "}
            <span className="text-foreground font-medium">Avec méthode, énergie collective et sens de l&apos;impact.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
