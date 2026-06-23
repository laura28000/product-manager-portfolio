"use client"

import { Briefcase, Code2, Users, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  {
    icon: Briefcase,
    number: "01",
    title: "Leadership & coordination multi-métiers",
    text: "+12 ans à piloter des équipes, coordonner des parties prenantes aux profils variés et faire avancer des sujets complexes dans des environnements exigeants.",
  },
  {
    icon: Users,
    number: "02",
    title: "Écoute & compréhension des utilisateurs",
    text: "Partir des utilisateurs, de leurs besoins réels et de leurs contraintes avant de proposer une solution. Structurer une démarche de discovery rigoureuse : distinguer symptômes et causes profondes, valider les hypothèses, interroger les bonnes personnes.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Culture KPI & impact business",
    text: "Chaque initiative doit répondre à un besoin réel et générer un gain mesurable : adoption, performance, temps économisé, qualité ou impact business. Pas d'initiative sans indicateur, pas d'indicateur sans décision.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Product Building & IA",
    text: "J'utilise l'IA comme copilote de Product Building : Product Discovery assistée, prototypage accéléré, exploration de codebase avec Claude Code, diagnostic et correction de bugs, implémentation de fonctionnalités et génération de Pull Requests GitHub.",
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
          className="max-w-3xl mb-8 sm:mb-14 space-y-4 text-muted-foreground leading-relaxed text-sm"
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
          className="grid sm:grid-cols-2 gap-6 mb-6"
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

        {/* Ma vision de l'IA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-5 sm:p-6 mb-8 border"
          style={{
            background: "color-mix(in oklch, var(--teal) 5%, var(--background))",
            borderColor: "color-mix(in srgb, var(--teal) 25%, transparent)",
          }}
        >
          <p
            className="text-[10px] font-semibold uppercase tracking-widest mb-3 flex items-center gap-2"
            style={{ color: "var(--teal)" }}
          >
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--teal)" }} />
            Ma vision de l&apos;IA
          </p>
          <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <p>
              L&apos;IA n&apos;est pas une case à cocher ni une solution à ajouter partout par effet de mode.
              Avant de l&apos;intégrer, je questionne le besoin réel, le coût, l&apos;usage, l&apos;impact
              attendu et la valeur créée.
            </p>
            <p>
              L&apos;objectif n&apos;est pas de produire toujours plus de fonctionnalités, mais de construire
              les bonnes solutions : utiles, adoptées, rentables et mesurables.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl px-5 sm:px-8 py-5 sm:py-6 max-w-3xl mx-auto text-center"
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
