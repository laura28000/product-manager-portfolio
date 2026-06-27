"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start px-6 overflow-hidden overflow-x-hidden pt-24 pb-4"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(to right, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft glowing accent */}
      <div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px] pointer-events-none"
        style={{ background: "var(--teal)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground text-xs font-medium tracking-widest uppercase mb-8"
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--teal)" }}
              />
              Disponible, ouverte aux opportunités
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl sm:text-6xl font-bold text-foreground leading-tight mb-3 text-balance"
            >
              Laura Caprara
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--teal)" }}
            >
              Product Manager · Workflows IA & <span className="whitespace-nowrap">Transformation digitale</span>
            </motion.p>

            {/* WHY */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm text-muted-foreground mb-10 leading-relaxed"
            >
              Faire collaborer les bonnes expertises pour créer de la valeur.
            </motion.p>

            {/* HOW — Signature */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm font-semibold text-foreground mb-8 leading-loose"
            >
              Fédérer les bonnes expertises.<br />
              Orchestrer la collaboration.<br />
              Créer des produits utiles.
            </motion.p>

            {/* Sub-badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span className="text-sm font-medium text-muted-foreground bg-secondary border border-border px-2.5 py-1 rounded">
                +12 ans de leadership opérationnel
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin size={12} />
                Chartres, France
              </span>
              <span className="text-xs text-muted-foreground bg-secondary border border-border px-2.5 py-1 rounded">
                Mobilité hybride : Île-de-France & Centre-Val de Loire
              </span>
              <span className="text-xs text-muted-foreground bg-secondary border border-border px-2.5 py-1 rounded">
                Anglais : outils professionnels
              </span>
            </motion.div>

          </div>

          {/* Right: Profile image + CTAs */}
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center w-full"
            >
              <div className="relative w-52 h-64 sm:w-64 sm:h-80 md:w-72 md:h-88 rounded-2xl overflow-hidden border border-border shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Laura Caprara — Product Manager"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 w-full max-w-[288px]"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 w-full"
                style={{ background: "var(--teal)", color: "white" }}
              >
                Voir mes projets
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 hover:shadow-lg w-full"
                style={{ background: "transparent", color: "var(--teal)", border: "1.5px solid var(--teal)" }}
              >
                Me contacter pour échanger
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}
