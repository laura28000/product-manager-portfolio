"use client"

import { motion } from "framer-motion"

export default function Manifesto() {
  return (
    <section className="py-24 px-6 section-divider">
      <div className="max-w-3xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-foreground leading-relaxed text-balance">
            &ldquo;Je ne me définis pas par les outils que j&apos;utilise, mais par ma capacité à créer les bonnes conditions pour que les bonnes expertises collaborent efficacement autour d&apos;un objectif produit commun.&rdquo;
          </p>
          <cite className="mt-8 block text-sm text-muted-foreground not-italic tracking-widest uppercase">
            Laura Caprara
          </cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
