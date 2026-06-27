"use client"

import { Search, Target, BarChart3, Cog, Rocket, Bot } from "lucide-react"
import { motion } from "framer-motion"

const skillGroups = [
  {
    icon: Search,
    title: "Découverte produit & recherche utilisateur",
    description:
      "Mener une phase de découverte rigoureuse : interviews terrain, analyse SQL, benchmark concurrentiel. Assistée par l'IA pour la synthèse et la formalisation des besoins, avant de construire quoi que ce soit.",
    skills: ["Product Discovery", "User Research", "Interviews utilisateurs", "Benchmark", "Problem framing"],
  },
  {
    icon: Target,
    title: "Stratégie & Priorisation",
    description:
      "Arbitrer avec méthode : RICE, OKR, Story Mapping. Chaque décision de roadmap justifiée par la donnée, la compréhension utilisateur et l'impact business attendu.",
    skills: ["RICE", "OKR", "Roadmap", "Story Mapping", "Backlog & User Stories"],
  },
  {
    icon: BarChart3,
    title: "Mesure & ROI",
    description:
      "Définir les KPIs avant de lancer, mesurer l'impact réel et ajuster. Une culture data construite sur le terrain : pas d'initiative sans indicateur, pas d'indicateur sans décision.",
    skills: ["KPIs", "ROI", "Funnel d'Acquisition"],
  },
  {
    icon: Cog,
    title: "Exécution & Organisation",
    description:
      "Conduire des projets du cadrage à la livraison en mode Agile, avec une capacité à arbitrer sous contrainte, aligner les équipes transverses et garder le cap sur la valeur livrée.",
    skills: ["Agile/Scrum", "Product Ops", "Gestion du Changement", "Amélioration Continue"],
  },
  {
    icon: Rocket,
    title: "Lancement & acquisition",
    description:
      "Structurer le lancement, aligner les parties prenantes et piloter l'adoption. L'adoption ne se décrète pas : elle se prépare, se mesure et s'ajuste.",
    skills: ["Go-to-Market", "Growth", "Stakeholder Management"],
  },
  {
    icon: Bot,
    title: "Orchestration IA & Workflows Produit",
    description:
      "J'utilise Claude Code, Claude, MCP, GitHub, Vercel et Notion comme environnement de travail quotidien pour explorer une codebase, construire le bon contexte, orchestrer plusieurs agents et accélérer la livraison produit.",
    skills: ["Context Engineering", "Workflow Design", "Human in the Loop", "Agent Design", "Product Automation", "Claude Code"],
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

export default function PMSkills() {
  return (
    <section id="pm-skills" className="py-16 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-widest uppercase text-primary mb-3"
          >
            Compétences Produit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance"
          >
            Méthodes & compétences Product
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Les compétences clés que je mobilise pour piloter des produits, structurer la stratégie et générer de la valeur.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl px-5 sm:px-8 py-5 sm:py-6 mb-8 sm:mb-12 max-w-3xl mx-auto text-center"
          style={{ background: "var(--teal-dim)", border: "1px solid color-mix(in srgb, var(--teal) 20%, transparent)" }}
        >
          <p className="font-serif text-xl sm:text-2xl font-bold text-foreground leading-snug mb-4 text-balance">
            &ldquo;Le meilleur Product Manager n&apos;est pas celui qui a le plus d&apos;idées,
            c&apos;est celui qui sait lesquelles construire, dans quel ordre, et pourquoi.&rdquo;
          </p>
          <cite className="text-sm text-muted-foreground not-italic">— Ma conviction de PM</cite>
        </motion.div>

        {/* Skill Groups Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--teal-dim)" }}
                >
                  <group.icon size={20} style={{ color: "var(--teal)" }} />
                </div>
                <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {group.description}
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded text-xs font-medium"
                    style={{ background: "var(--teal-dim)", color: "var(--teal)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
