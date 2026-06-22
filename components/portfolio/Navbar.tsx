"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Qui suis-je ?", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#pm-skills" },
  { label: "Outils", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-border"
      style={{ background: "color-mix(in oklch, var(--teal) 15%, var(--background) 85%)" }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-serif text-lg font-bold tracking-wide text-foreground"
        >
          LC<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.a
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-sm text-foreground font-medium hover:text-primary transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const link = document.createElement("a")
            link.href = "/cv.pdf"
            link.download = "CV_Laura_Caprara.pdf"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer"
          style={{ background: "var(--teal)", color: "white" }}
        >
          Télécharger mon CV
        </motion.button>

        {/* Mobile burger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-4 overflow-hidden"
            style={{ background: "color-mix(in oklch, var(--teal) 15%, var(--background) 85%)" }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-sm text-foreground font-medium hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/cv.pdf"
                link.download = "CV_Laura_Caprara.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                setOpen(false)
              }}
              className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer"
              style={{ background: "var(--teal)", color: "white" }}
            >
              Télécharger mon CV
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
