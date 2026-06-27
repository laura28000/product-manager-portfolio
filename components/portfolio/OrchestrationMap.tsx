"use client"

import type { LucideIcon } from "lucide-react"
import { Users, Cog, Bot, TrendingUp, Target, Sparkles, Heart } from "lucide-react"
import { motion } from "framer-motion"

function NodeCard({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon
  title: string
  items: string[]
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
      className="bg-card border border-border rounded-xl p-4 h-full hover:border-primary/40 transition-colors duration-300"
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
          style={{ background: "var(--teal-dim)" }}
        >
          <Icon size={13} style={{ color: "var(--teal)" }} />
        </div>
        <p className="text-xs font-semibold text-foreground">{title}</p>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--teal)" }} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function CenterCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
      className="rounded-xl p-5 h-full border-2 flex flex-col items-center justify-center text-center"
      style={{
        background: "color-mix(in oklch, var(--teal) 10%, var(--background))",
        borderColor: "var(--teal)",
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
        style={{ background: "var(--teal-dim)" }}
      >
        <Target size={20} style={{ color: "var(--teal)" }} />
      </div>
      <p className="text-sm font-bold text-foreground mb-2">Orchestration Produit</p>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Aligner les bonnes expertises autour d&apos;un objectif commun.
      </p>
    </motion.div>
  )
}

function OutputCard({
  icon: Icon,
  title,
  text,
  delay = 0,
}: {
  icon: LucideIcon
  title: string
  text: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
      className="bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 transition-colors duration-300"
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: "var(--teal-dim)" }}
      >
        <Icon size={15} style={{ color: "var(--teal)" }} />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{text}</p>
      </div>
    </motion.div>
  )
}

const connectorStyle = {
  background: "color-mix(in oklch, var(--teal) 40%, var(--border))",
}

export default function OrchestrationMap() {
  return (
    <div className="mt-10 mb-2">
      {/* Titre de la carte */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-[10px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2"
        style={{ color: "var(--teal)" }}
      >
        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--teal)" }} />
        Comment je conçois un produit
      </motion.p>

      {/* ── DESKTOP : disposition en croix ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="hidden md:block relative mb-3"
      >
        {/* Ligne horizontale (rangée centrale) */}
        <div
          className="absolute top-1/2 -translate-y-px h-px pointer-events-none z-0"
          style={{ left: "calc(100% / 6)", right: "calc(100% / 6)", ...connectorStyle }}
        />
        {/* Ligne verticale (colonne centrale) */}
        <div
          className="absolute left-1/2 -translate-x-px w-px pointer-events-none z-0"
          style={{ top: "16%", bottom: "16%", ...connectorStyle }}
        />

        {/* Grille 3×3 */}
        <div className="grid grid-cols-3 gap-3 relative z-10">
          {/* Rangée 1 */}
          <div />
          <NodeCard icon={Users} title="Utilisateurs" items={["Besoins", "Irritants", "Usages"]} />
          <div />

          {/* Rangée 2 */}
          <NodeCard icon={Cog} title="Équipe Tech" items={["Concevoir", "Construire", "Livrer"]} />
          <CenterCard />
          <NodeCard icon={Bot} title="Agents IA" items={["Contexte", "Workflows", "Automatisation"]} />

          {/* Rangée 3 */}
          <div />
          <NodeCard icon={TrendingUp} title="Business" items={["Valeur", "Impact", "Priorités"]} />
          <div />
        </div>
      </motion.div>

      {/* ── MOBILE : pile verticale ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="md:hidden mb-3 space-y-3"
      >
        <CenterCard />
        <div className="grid grid-cols-2 gap-3">
          <NodeCard icon={Users} title="Utilisateurs" items={["Besoins", "Irritants", "Usages"]} />
          <NodeCard icon={Bot} title="Agents IA" items={["Contexte", "Workflows", "Automatisation"]} />
          <NodeCard icon={Cog} title="Équipe Tech" items={["Concevoir", "Construire", "Livrer"]} />
          <NodeCard icon={TrendingUp} title="Business" items={["Valeur", "Impact", "Priorités"]} />
        </div>
      </motion.div>

      {/* Flèche vers les sorties */}
      <div className="flex justify-center my-3 select-none text-sm" style={{ color: "var(--teal)", opacity: 0.5 }}>
        ↓
      </div>

      {/* Sorties */}
      <div className="max-w-sm mx-auto space-y-2">
        <OutputCard
          icon={Sparkles}
          title="Produit utile"
          text="Une solution simple, adoptée et mesurable."
          delay={0.2}
        />
        <div className="flex justify-center select-none text-sm" style={{ color: "var(--teal)", opacity: 0.5 }}>
          ↓
        </div>
        <OutputCard
          icon={Heart}
          title="Valeur utilisateur"
          text="Un impact concret sur le quotidien."
          delay={0.3}
        />
      </div>

      {/* Citation signature */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xs text-muted-foreground leading-relaxed mt-8 text-center max-w-2xl mx-auto italic pt-5"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        &ldquo;Je considère le Product Management comme un métier d&apos;orchestration : aligner les utilisateurs, les équipes, le business et les agents IA autour d&apos;un objectif commun pour créer des produits utiles, adoptés et mesurables.&rdquo;
      </motion.p>
    </div>
  )
}
