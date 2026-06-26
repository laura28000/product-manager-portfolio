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
    text: "Partir des besoins et des contraintes réelles avant de proposer une solution. Identifier les bonnes personnes à interroger, distinguer symptômes et causes profondes, valider les hypothèses.",
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
    text: "J'utilise l'IA comme copilote produit : discovery assistée, prototypage accéléré, exploration de codebase, implémentation de fonctionnalités et génération de Pull Requests avec Claude Code.",
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
          Un profil terrain, humain et curieux, tourné vers le{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            produit.
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
            Je suis un profil hybride : 12 ans de management opérationnel, une forte culture
            terrain, une formation Product Manager, une formation Full Stack et une vraie
            appétence pour l&apos;IA et l&apos;automatisation.
          </p>
          <p>
            Ce qui me motive le plus, c&apos;est l&apos;humain : créer du lien, fédérer des
            profils différents, accompagner les équipes et transformer une idée en solution
            concrète.
          </p>
          <p>
            J&apos;aime comprendre les problèmes en profondeur, poser les bonnes questions,
            tester, itérer et faire avancer les sujets avec énergie, clarté et exigence.
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
          <p className="text-sm text-muted-foreground leading-relaxed">
            Mon approche reste pragmatique : l&apos;IA n&apos;est pertinente que si elle répond à un
            besoin réel, crée un gain mesurable et apporte plus de valeur qu&apos;elle ne génère de
            complexité ou de coût.
          </p>
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
            un bon produit, c&apos;est celui que les utilisateurs adoptent parce qu&apos;il résout un
            vrai problème. Le construire exige de relier les équipes, de comprendre les contraintes du
            terrain et de ne jamais perdre de vue la valeur créée.{" "}
            <span className="text-foreground font-medium">Avec méthode, énergie collective et sens de l&apos;impact.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
