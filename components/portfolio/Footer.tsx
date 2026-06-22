"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Laura Caprara — Product Manager
        </p>
        <p>
          Conçu & développé avec{" "}
          <span style={{ color: "var(--teal)" }}>passion produit</span>
        </p>
      </div>
    </motion.footer>
  )
}
