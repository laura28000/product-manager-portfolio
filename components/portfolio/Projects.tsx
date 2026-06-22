"use client"

import { useState, useCallback } from "react"
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn, Code2, GitBranch } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

type ProjectImage = { src: string; alt: string }

// ─── Data ─────────────────────────────────────────────────────────────────────

const caseStudies = [
  {
    number: "01",
    tag: "Résolution de problème business · Product Management",
    title: "Welcome to the Jungle : Résoudre un problème de conversion des candidats seniors",
    subtitle: "Compréhension du problème · Recherche · Analyse · Priorisation · KPIs",
    description:
      "Résolution d'un problème business réel : comprendre pourquoi les candidats seniors ne convertissent pas, identifier les bons leviers, prioriser les opportunités et structurer un plan d'action orienté impact.",
    problem:
      "Les recruteurs recherchent des profils expérimentés, mais l'audience du jobboard reste majoritairement orientée profils juniors. Écart de conversion significatif identifié entre les deux segments : enjeu business direct sur la valeur perçue de la plateforme.",
    approach:
      "Immersion dans le problème : analyse SQL des données de conversion, 5 interviews utilisateurs, benchmark concurrentiel. Identification des freins réels (filtres incomplets, faible visibilité full remote, manque de personnalisation). Priorisation RICE pour arbitrer les opportunités à fort impact et aligner les décisions sur des données tangibles.",
    solution:
      "Roadmap structurée autour des leviers à plus fort ROI, story maps candidat & recruteur, backlog priorisé et KPIs définis par phase. Chaque décision justifiée par la compréhension du problème, l'analyse des données et l'impact business attendu.",
    results: [
      "18/20, Certification Product Management",
      "Problème business compris, causes profondes identifiées",
      "Leviers de conversion priorisés sur la base des données",
      "Roadmap, KPIs et go-to-market structurés et actionnables",
    ],
    skills: ["Compréhension du problème", "User Research", "Analyse SQL", "Priorisation RICE", "Roadmap", "KPIs", "Prise de décision"],
    color: "var(--teal)",
    images: [
      { src: "/projects/wttj-title.png", alt: "Welcome to the Jungle — Projet Join Maestro" },
      { src: "/projects/wttj-roadmap.png", alt: "Roadmap NOW / NEXT / LATER" },
      { src: "/projects/wttj-prioritization.png", alt: "Priorisation Valeur / Complexité" },
    ],
    confidential: true,
  },
  {
    number: "02",
    tag: "Projet portfolio · Product IA · Candidatures · Positionnement PM",
    title: "ProductSignal : Analyser les offres PM, scorer la compatibilité et affiner son positionnement",
    subtitle: "Problem framing · IA appliquée · Score automatisé · Itération",
    description:
      "Conception d'un outil IA personnel en cours de développement : analyse d'offres Product Manager, score de compatibilité, identification des gaps et aide au positionnement pour chaque candidature. Projet portfolio, en cours d'itération.",
    problem:
      "En reconversion vers le Product Management, trouver les offres vraiment pertinentes et formuler un positionnement précis pour chaque candidature demande un effort cognitif élevé. Lire des dizaines d'offres, identifier les exigences implicites, évaluer ses forces et ses gaps en temps réel : aucun outil existant ne permettait ce niveau d'analyse personnalisée et contextuelle.",
    approach:
      "Partir du problème vécu, le valider, définir le périmètre minimal utile. Identifier les bons leviers IA : analyse sémantique d'offres, scoring personnalisé, génération de conseils de positionnement. Prototypage rapide, usage quotidien comme boucle de feedback, itérations orientées valeur réelle.",
    solution:
      "Outil IA conçu et prototypé : analyse des offres PM, score de compatibilité personnalisé, identification des forces et des gaps, recommandations de positionnement pour chaque candidature et suivi de pipeline. Conçu autour d'un besoin réel, itéré en autonomie produit complète.",
    results: [
      "Besoin réel identifié et validé, outil conçu et prototypé",
      "Approche structurée : problem framing → design → prototype → itération",
      "Meilleure clarté sur le positionnement PM pour chaque candidature",
      "Démonstration de la boucle problem → solution en autonomie",
      "Technical fluency appliquée : cadrage, IA, prototypage end-to-end",
    ],
    realProject: {
      label: "CASE STUDY PRODUIT PERSONNEL",
      points: [
        "Besoin réel identifié",
        "Outil conçu & prototypé",
        "IA appliquée",
        "Itérations actives",
        "Autonomie produit complète",
        "Boucle problem → solution",
      ],
    },
    skills: ["Problem framing", "IA appliquée", "Product thinking", "Score de compatibilité", "Delivery autonome", "User-centricity"],
    color: "oklch(0.55 0.2 260)",
    images: [] as ProjectImage[],
  },
  {
    number: "03",
    tag: "Conception produit · Besoins utilisateurs sensibles",
    title: "Baume : Concevoir un espace communautaire sécurisé autour d'un besoin utilisateur sensible",
    subtitle: "Empathie · Cadrage · Coordination produit/tech · Delivery",
    description:
      "Conception et livraison en 2 semaines d'un espace communautaire autour d'un besoin utilisateur sensible : accompagner les femmes en rupture sentimentale dans un environnement rassurant, sécurisé et bienveillant.",
    problem:
      "Un besoin réel, fort et sous-adressé : des femmes traversant une rupture cherchent soutien, ressources et communauté, mais les espaces existants ne répondent pas à la sensibilité et à la sécurité que ce contexte exige. Comment créer une expérience digitale à la hauteur de ce besoin ?",
    approach:
      "Écoute et compréhension des besoins utilisateurs, définition d'un parcours empathique, cadrage du scope MVP, structuration des user flows et coordination produit/tech à chaque étape : onboarding, logique communautaire, modération et sécurité.",
    solution:
      "MVP mobile livré de bout en bout : onboarding personnalisé et rassurant, fil communautaire modéré, ressources d'accompagnement et ateliers virtuels. Un produit cohérent entre vision, besoins utilisateurs, faisabilité technique et exécution.",
    results: [
      "MVP mobile livré en production en 2 semaines",
      "Parcours empathique conçu avec soin et cohérence",
      "Coordination produit/tech efficace du cadrage au delivery",
      "Communauté sécurisée et espace de confiance opérationnel",
    ],
    skills: ["Empathie utilisateur", "Cadrage MVP", "Coordination produit/tech", "UX sensible", "Delivery", "Communauté"],
    color: "oklch(0.58 0.14 300)",
    images: [
      { src: "/projects/baume-signup.png", alt: "Baume — Création de compte" },
      { src: "/projects/baume-onboarding.png", alt: "Baume — Onboarding" },
      { src: "/projects/baume-screens.png", alt: "Baume — Accueil" },
      { src: "/projects/baume-club.png", alt: "Baume — Club communautaire" },
      { src: "/projects/baume-resources.png", alt: "Baume — Ressources & outils" },
      { src: "/projects/baume-profile.png", alt: "Baume — Profil utilisateur" },
      { src: "/projects/baume-charter.png", alt: "Baume — Charte de bienveillance" },
    ],
    link: "https://www.baume.app/",
    linkLabel: "Voir Baume",
  },
  {
    number: "04",
    tag: "Transformation digitale · Acquisition locale",
    title: "TVB Jardins : Transformer un besoin terrain en levier d'acquisition local",
    subtitle: "Compréhension du besoin · Stratégie locale · Confiance · ROI",
    description:
      "Diagnostic business et stratégie d'acquisition locale pour une TPE : analyse du manque à gagner lié à l'absence de visibilité digitale, création d'un site WordPress de zéro, fiche Google Business Profile, stratégie SEO/conversion à ROI rapide. Résultat : top 10 Google et 25 avis récoltés en 1 mois.",
    problem:
      "Un artisan reconnu localement pour la qualité de son travail, mais absent du digital. Aucune présence en ligne, aucune visibilité locale structurée, un bouche-à-oreille insuffisant pour soutenir la croissance. Comment construire une présence crédible, génératrice de confiance et d'acquisition, avec un budget maîtrisé ?",
    approach:
      "Écoute du besoin, compréhension du contexte métier et des attentes clients, audit de la concurrence locale, définition d'une stratégie d'acquisition adaptée. Mise en place des bons leviers dans le bon ordre : visibilité, preuve sociale, confiance, conversion.",
    solution:
      "Présence digitale locale opérationnelle : site structuré autour des intentions de recherche clients, Google Business Profile actif avec activation des avis comme levier de réassurance, parcours de contact simplifié. Chaque décision orientée ROI et impact mesurable.",
    results: [
      "TOP 10 résultats Google recherche un mois après la mise en ligne",
      "25 avis Google obtenus durant le premier mois suivant la mise en ligne",
      "Visibilité locale construite de zéro, budget maîtrisé",
      "Acquisition digitale opérationnelle et autonome",
      "Site en production, référencement local actif",
    ],
    realProject: {
      label: "PROJET RÉEL LIVRÉ",
      points: [
        "Client réel",
        "Site en production",
        "Mise en ligne complète",
        "Référencement local",
        "Acquisition d'avis clients",
        "Génération de visibilité digitale",
      ],
    },
    skills: ["Compréhension du besoin", "Stratégie d'acquisition", "SEO local", "Google Business Profile", "Conversion", "ROI"],
    color: "oklch(0.55 0.13 160)",
    images: [
      { src: "/projects/seo-website.jpg", alt: "TVB Jardins — Site web" },
      { src: "/projects/seo-google.png", alt: "TVB Jardins — Google Business Profile 5 étoiles" },
    ],
    link: "https://tvb-jardins-sap-28.fr/",
    linkLabel: "Voir le site",
  },
]

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: ProjectImage[]
  startIndex: number
  onClose: () => void
}) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrent((c) => (c - 1 + images.length) % images.length)
    },
    [images.length]
  )

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrent((c) => (c + 1) % images.length)
    },
    [images.length]
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={onClose}
        aria-label="Fermer"
      >
        <X size={20} />
      </button>

      {images.length > 1 && (
        <button
          className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={prev}
          aria-label="Image précédente"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      <div
        className="relative w-full max-w-5xl max-h-[85vh] mx-16 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={1400}
          height={900}
          className="w-full h-auto max-h-[85vh] object-contain"
          priority
        />
      </div>

      {images.length > 1 && (
        <button
          className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={next}
          aria-label="Image suivante"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i === current ? "white" : "rgba(255,255,255,0.35)",
                transform: i === current ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-xs text-center px-4">
        {images[current].alt}
        {images.length > 1 && (
          <span className="ml-2 text-white/40">({current + 1} / {images.length})</span>
        )}
      </p>
    </div>
  )
}

// ─── Carousel (in-card) ───────────────────────────────────────────────────────

function ImageCarousel({
  images,
  color,
  onImageClick,
}: {
  images: ProjectImage[]
  color: string
  onImageClick: (index: number) => void
}) {
  const [current, setCurrent] = useState(0)

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }

  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((c) => (c + 1) % images.length)
  }

  return (
    <div className="relative mb-5 rounded-lg overflow-hidden border border-border bg-secondary group">
      <button
        className="relative block w-full h-52 cursor-zoom-in focus:outline-none"
        onClick={() => onImageClick(current)}
        aria-label={`Agrandir : ${images[current].alt}`}
      >
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute top-2 right-2 p-1.5 rounded bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn size={14} />
        </span>
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-[calc(50%-16px)] -translate-y-1/2 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-[calc(50%-16px)] -translate-y-1/2 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors z-10"
            aria-label="Image suivante"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "18px" : "6px",
                height: "6px",
                background: i === current ? color : "rgba(255,255,255,0.5)",
              }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {images.length > 1 && (
        <div className="flex gap-1.5 p-2 bg-background/80 backdrop-blur-sm overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className="relative shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all"
              style={{ borderColor: i === current ? color : "transparent" }}
              aria-label={`Aller à l'image ${i + 1}`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Case Study Card ──────────────────────────────────────────────────────────

function CaseStudyCard({ project }: { project: (typeof caseStudies)[0] }) {
  const [expanded, setExpanded] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const images = "images" in project ? (project.images as ProjectImage[]) : []

  return (
    <>
      {lightboxIndex !== null && images.length > 0 && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300">
        <div className="h-0.5 w-full" style={{ background: project.color }} />

        <div className="p-7">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <p
                className="text-[10px] font-semibold tracking-widest uppercase mb-1.5"
                style={{ color: project.color }}
              >
                {project.tag} · {project.subtitle}
              </p>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground leading-snug text-balance">
                {project.title}
              </h3>
            </div>
            <span
              className="shrink-0 font-serif text-3xl font-bold opacity-15 select-none"
              style={{ color: project.color }}
            >
              {project.number}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {project.description}
          </p>

          {"realProject" in project && project.realProject && (
            <div
              className="rounded-lg p-4 mb-5 border"
              style={{ background: `${project.color}08`, borderColor: `${project.color}40` }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                style={{ color: project.color }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: project.color }} />
                {(project.realProject as { label: string }).label}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {(project.realProject as { points: string[] }).points.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-xs text-foreground">
                    <span style={{ color: project.color }}>&#10003;</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          )}

          {images.length > 0 && (
            <ImageCarousel
              images={images}
              color={project.color}
              onImageClick={(i) => setLightboxIndex(i)}
            />
          )}

          {"confidential" in project && project.confidential && (
            <div className="mb-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border border-border text-[10px] text-muted-foreground font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
              Données anonymisées pour confidentialité
            </div>
          )}

          <div
            className="rounded-lg p-4 mb-5 border-l-2"
            style={{ background: `${project.color}10`, borderColor: project.color }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-wider mb-1"
              style={{ color: project.color }}
            >
              Problème
            </p>
            <p className="text-sm text-foreground leading-relaxed">{project.problem}</p>
          </div>

          {expanded && (
            <div className="space-y-5 mb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Approche
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Solution & livrables
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Résultats
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: project.color }}
                      />
                      <span className="text-foreground font-medium">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 rounded text-xs text-muted-foreground bg-secondary border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {"link" in project && project.link && (
                <a
                  href={project.link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-all hover:opacity-80"
                  style={{ color: project.color }}
                >
                  {(project as { linkLabel?: string }).linkLabel || "Voir le projet"}{" "}
                  <ExternalLink size={12} />
                </a>
              )}
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors shrink-0 ml-auto"
                style={{ color: project.color }}
              >
                {expanded ? (
                  <>Réduire <ChevronUp size={13} /></>
                ) : (
                  <>Voir le détail <ChevronDown size={13} /></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 section-divider">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-widest uppercase text-primary mb-3"
        >
          Projets phares
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance"
        >
          Case studies{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            Product & Business
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-xl mb-12 leading-relaxed text-sm"
        >
          Product Management, IA appliquée et performance business : chaque case study illustre
          ma capacité à identifier un problème réel, structurer une démarche produit rigoureuse
          et livrer une solution à impact mesurable.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <CaseStudyCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-12"
        >
          <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--teal-dim)" }}
              >
                <Code2 size={18} style={{ color: "var(--teal)" }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1.5"
                  style={{ color: "var(--teal)" }}
                >
                  Compréhension technique produit
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Compréhension des stacks front/back, API, bases de données et déploiement pour mieux cadrer les besoins, dialoguer avec les développeurs et suivre la delivery.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pl-14">
              {["React.js", "Node.js", "Express.js", "MongoDB", "React Native", "API REST", "GitHub", "Expo"].map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded text-xs text-muted-foreground bg-secondary border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--teal-dim)" }}
              >
                <GitBranch size={18} style={{ color: "var(--teal)" }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1.5"
                  style={{ color: "var(--teal)" }}
                >
                  Refonte portfolio en approche Product Builder
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Portfolio initialement créé avec v0 / Vercel, puis retravaillé dans une démarche Product Builder : récupération de la codebase, audit du positionnement, alignement avec mon CV, priorisation des améliorations, ajustements UX/UI, build local et redéploiement Vercel avec Claude Code.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pl-14">
              {["v0 / Vercel", "Codebase", "Audit produit", "Claude Code", "VS Code", "Déploiement Vercel"].map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded text-xs text-muted-foreground bg-secondary border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
