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
      "L'audience du jobboard est majoritairement orientée profils juniors, alors que les recruteurs cherchent de l'expérience : écart de conversion identifié, enjeu business direct sur la valeur perçue de la plateforme.",
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
    skills: ["User Research", "Analyse SQL", "Priorisation RICE", "Roadmap", "KPIs"],
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
    tag: "Conception produit · Besoins utilisateurs sensibles",
    title: "Baume : Concevoir un espace communautaire sécurisé autour d'un besoin utilisateur sensible",
    subtitle: "Product Owner · Empathie · Cadrage · Coordination produit/tech · Livraison",
    description:
      "Rôle Product Owner & développeuse dans une équipe de 3 (Lead Tech + développeur). Objectif : concevoir un espace communautaire sécurisé pour accompagner les femmes en rupture sentimentale.",
    problem:
      "Des femmes traversant une rupture cherchent soutien et communauté, mais aucun espace existant ne répond à la sensibilité et à la sécurité qu'exige ce contexte.",
    approach:
      "Ma contribution : cadrage produit, définition du besoin utilisateur, structuration des parcours, priorisation des fonctionnalités, coordination avec l'équipe technique et participation au développement du MVP. Ce projet illustre ma capacité à travailler à l'interface produit / tech : comprendre un problème utilisateur, le traduire en solution concrète et livrer avec une équipe dans un temps court.",
    solution:
      "MVP mobile livré de bout en bout : onboarding personnalisé et rassurant, fil communautaire modéré, ressources d'accompagnement et ateliers virtuels. Un produit cohérent entre vision, besoins utilisateurs, faisabilité technique et exécution.",
    results: [
      "MVP mobile livré en production en 2 semaines",
      "Parcours empathique conçu avec soin et cohérence",
      "Coordination produit/tech efficace du cadrage à la livraison",
      "Communauté sécurisée et espace de confiance opérationnel",
    ],
    skills: ["Product Owner", "Empathie utilisateur", "Cadrage MVP", "Coordination produit/tech", "Développement", "Livraison"],
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
    number: "03",
    tag: "Outil IA · Recherche de poste Product",
    title: "ProductSignal : piloter sa recherche de poste Product Manager avec méthode",
    subtitle: "Cadrage MVP · Analyse des offres · Priorisation",
    description:
      "ProductSignal est un outil personnel pour structurer une recherche de poste Product Manager : centralisation des candidatures, analyse des offres, priorisation et suivi des relances.",
    problem:
      "Sans méthode, une recherche de poste Product Manager devient vite chronophage et dispersée : trop d'offres à analyser, trop peu de visibilité sur les priorités et les relances.",
    approach:
      "Partir du problème vécu, le valider, définir un périmètre minimal utile. Cadrage du MVP, identification des fonctionnalités prioritaires, structuration du parcours et prototypage avec Claude Code pour intégrer IA et automatisation au service de la prise de décision.",
    solution:
      "Outil personnel conçu et prototypé : analyse des fiches de poste, évaluation de l'adéquation profil / offre, priorisation des opportunités selon des critères concrets (compétences attendues, niveau d'expérience, localisation, rythme de travail, potentiel d'évolution), préparation des relances et recommandations par candidature.",
    results: [
      "Besoin réel formulé, validé et cadré en MVP",
      "Fonctionnalités prioritaires définies, parcours structuré",
      "Prototype développé avec Claude Code : IA et automatisation appliquées",
      "Démarche Product démontrée en autonomie : du problème à la solution",
      "Candidatures mieux ciblées, relances mieux organisées",
    ],
    realProject: {
      label: "PROJET PERSONNEL · EN COURS D'ITÉRATION",
      points: [
        "Besoin réel identifié",
        "MVP cadré",
        "Analyse des offres",
        "IA appliquée",
        "Claude Code",
        "Itérations actives",
      ],
    },
    skills: ["Cadrage MVP", "IA appliquée", "Analyse des offres", "Claude Code", "Priorisation"],
    color: "oklch(0.55 0.2 260)",
    images: [] as ProjectImage[],
    link: "https://stitch.withgoogle.com/preview/1191489258350450361?node-id=3c006e9634c34977b7eb2bd608b1ef58",
    linkLabel: "Voir le prototype",
  },
  {
    number: "04",
    tag: "Démarche Product · Acquisition locale",
    title: "TVB Jardins : Transformer un besoin terrain en levier d'acquisition local",
    subtitle: "Diagnostic business · Priorisation des leviers · Confiance · ROI",
    description:
      "Diagnostic business et démarche Product pour une TPE artisanale : identification d'un besoin non adressé, priorisation des leviers d'acquisition, mise en œuvre et mesure d'impact. Résultat : top 10 Google et 25 avis clients obtenus en 1 mois.",
    problem:
      "Un artisan reconnu localement, mais invisible en ligne : sans présence digitale ni levier de réassurance, le bouche-à-oreille seul ne suffit plus à soutenir la croissance.",
    approach:
      "Diagnostic du problème business : artisan reconnu localement, mais sans visibilité digitale ni levier de réassurance. Compréhension des attentes clients, audit de la concurrence locale, priorisation des actions dans le bon ordre : visibilité d'abord, preuve sociale ensuite, conversion en dernier. Chaque décision justifiée par son impact business attendu.",
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
          Cas produits{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            & enjeux business
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-xl mb-12 leading-relaxed text-sm"
        >
          Product Management, IA appliquée et performance business : chaque cas produit illustre
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
                  Compréhension des stacks front/back, API, bases de données et déploiement pour mieux cadrer les besoins, dialoguer avec les développeurs et suivre la livraison produit.
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
