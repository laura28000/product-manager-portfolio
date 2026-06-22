"use client"

import { Mail, Linkedin, Phone, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const links = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "06.30.59.70.72",
    href: "tel:+33630597072",
    cta: "M'appeler",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lauraca28300@gmail.com",
    href: "mailto:lauraca28300@gmail.com",
    cta: "M'envoyer un email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/caprara-laura",
    href: "https://www.linkedin.com/in/caprara-laura/",
    cta: "Voir mon LinkedIn",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-widest uppercase text-primary mb-3"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6 text-balance"
          >
            Échangeons autour de vos enjeux{" "}
            <span className="italic" style={{ color: "var(--teal)" }}>
              produit, humains et opérationnels
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed"
          >
            Product Building, transformation digitale, structuration produit ou exploitation de l&apos;IA : j&apos;aime comprendre les vrais problèmes, construire les bonnes solutions et les faire adopter par le terrain.
          </motion.p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" ? "_blank" : undefined}
              rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-card border border-border rounded-xl p-8 flex flex-col gap-4 hover:border-primary/50 transition-colors duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "var(--teal-dim)" }}
              >
                <link.icon size={18} style={{ color: "var(--teal)" }} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  {link.label}
                </p>
                <p className="text-sm text-foreground font-medium">{link.value}</p>
              </div>
              <div
                className="inline-flex items-center gap-1.5 text-xs font-medium mt-auto"
                style={{ color: "var(--teal)" }}
              >
                {link.cta} <ExternalLink size={12} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
