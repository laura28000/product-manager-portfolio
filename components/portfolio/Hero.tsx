"use client"

import { ArrowDown, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20"
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              Disponible — ouverte aux opportunités
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
              className="text-xl font-semibold mb-1"
              style={{ color: "var(--teal)" }}
            >
              Product Manager hybride | Terrain · Business · IA · Delivery
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
                Mobilité hybride — Île-de-France & Centre-Val de Loire
              </span>
            </motion.div>

            {/* Tagline / sous-titre hero */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-base text-muted-foreground max-w-xl leading-relaxed mb-5 text-pretty"
            >
              J&apos;aide les organisations à transformer des problématiques complexes en solutions
              concrètes en créant des ponts entre les{" "}
              <strong className="text-foreground font-medium">métiers</strong>,{" "}
              les <strong className="text-foreground font-medium">utilisateurs</strong> et{" "}
              la <strong className="text-foreground font-medium">technologie</strong>.
            </motion.p>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm text-muted-foreground max-w-xl leading-relaxed text-pretty"
            >
              Après plus de 12 ans à piloter des équipes, coordonner des parties prenantes et conduire
              l&apos;amélioration continue dans des environnements industriels exigeants, j&apos;ai
              orienté mon parcours vers le Product Management avec une conviction forte : faire avancer
              les sujets, aligner les acteurs et générer un impact business mesurable.
            </motion.p>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-88 rounded-2xl overflow-hidden border border-border shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Laura Caprara — Product Manager"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* CTAs - Below the grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200"
            style={{ background: "var(--teal)", color: "white" }}
          >
            Pourquoi moi ?
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
            style={{ background: "var(--teal)", color: "white" }}
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            <span className="relative z-10">Me contacter pour échanger</span>
            <span className="relative z-10 w-2 h-2 rounded-full bg-white animate-pulse" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll vers le bas"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  )
}
