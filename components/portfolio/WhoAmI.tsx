"use client"

import { Briefcase, Compass, Code2, GitMerge, TrendingUp, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  {
    icon: Briefcase,
    number: "01",
    title: "Leadership & coordination multi-métiers",
    text: "+12 ans à piloter des équipes, coordonner des parties prenantes aux profils variés et faire avancer des sujets complexes dans des environnements exigeants.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Communication & alignement",
    text: "Créer des ponts entre les métiers, les équipes techniques et les décideurs afin d'aligner les objectifs, fluidifier la collaboration et accélérer l'exécution. Capacité à adapter ma communication aux interlocuteurs, créer de l'adhésion et fédérer autour d'un objectif commun, auprès d'opérateurs, d'ingénieurs, de responsables qualité, de fonctions support ou de directions.",
  },
  {
    icon: Compass,
    number: "03",
    title: "Résolution de problèmes & amélioration continue",
    text: "Identifier les irritants, analyser les causes profondes, structurer les priorités et construire des solutions adaptées au contexte humain, opérationnel et business. Chaque problème possède plusieurs solutions. Mon rôle consiste à comprendre ce qui bloque et à construire le chemin le plus pertinent pour avancer.",
  },
  {
    icon: GitMerge,
    number: "04",
    title: "Leadership & exécution",
    text: "Transformer les idées en actions concrètes grâce à une coordination efficace des équipes, une gestion claire des priorités et une forte capacité d'exécution.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Culture KPI & impact business",
    text: "Chaque initiative doit répondre à un besoin réel et générer un gain mesurable : adoption, performance, temps économisé, qualité ou impact business. J'accorde une attention particulière à l'impact business, à la création de valeur et au retour sur investissement avant d'introduire de nouveaux outils ou processus.",
  },
  {
    icon: Code2,
    number: "06",
    title: "IA appliquée & automatisation pragmatique",
    text: "Je considère l'IA et l'automatisation comme des moyens, jamais comme une finalité. Mon approche consiste à identifier les cas d'usage pertinents, simplifier les tâches répétitives et améliorer la performance lorsque le gain est réel et mesurable.",
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
          Un profil Product ancré dans le terrain,{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            l&apos;humain et l&apos;impact.
          </span>
        </motion.h2>

        {/* Sous-titre */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-semibold text-foreground mb-6"
        >
          Ce que j&apos;apporte à votre organisation
        </motion.h3>

        {/* Texte d'introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mb-16 space-y-4 text-muted-foreground leading-relaxed text-sm"
        >
          <p>
            Une maturité opérationnelle forte, une intelligence relationnelle éprouvée, une culture
            produit structurée et une capacité à conduire le changement de manière concrète et mesurable.
          </p>
          <p>
            Reconnue pour ma capacité à adapter ma communication aux interlocuteurs, créer de
            l&apos;adhésion et fédérer autour d&apos;un objectif commun, j&apos;évolue avec la
            même aisance auprès d&apos;opérateurs, d&apos;ingénieurs, de responsables qualité,
            de fonctions support ou de directions.
          </p>
          <p>
            J&apos;aime comprendre ce qui bloque, identifier les goulots d&apos;étranglement,
            structurer les priorités et construire des solutions adaptées au contexte humain,
            opérationnel et business.
          </p>
          <p>
            Ma valeur ajoutée réside autant dans ma compréhension des personnes et des
            organisations que dans ma capacité à mobiliser les bons outils pour résoudre les
            problèmes.
          </p>
        </motion.div>

        {/* Cards grid: 3 top + 3 bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        >
          {cards.slice(0, 3).map((card) => (
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {cards.slice(3).map((card) => (
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

        {/* Bloc conviction */}
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
            faire avancer un projet consiste avant tout à aligner les personnes qui permettront sa réussite.
            Comprendre les humains, les contraintes opérationnelles et les objectifs business permet de
            transformer des problématiques complexes en solutions concrètes, adoptées et créatrices de valeur.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
