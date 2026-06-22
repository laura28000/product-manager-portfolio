import { Users, TrendingUp, Cpu, Lightbulb } from "lucide-react"

const pillars = [
  {
    icon: Users,
    title: "Partir du problème, pas de la solution",
    text: "Je pars des utilisateurs, de la data et des enjeux business avant de proposer quoi que ce soit. Le problème bien posé vaut mieux que dix features mal ciblées.",
  },
  {
    icon: TrendingUp,
    title: "Impact mesurable avant tout",
    text: "Un bon produit résout un vrai problème, crée de la valeur pour l'utilisateur et génère un impact business mesurable. Sans ces trois piliers, ce n'est pas un produit, c'est un prototype.",
  },
  {
    icon: Cpu,
    title: "L'IA comme levier, pas comme fin",
    text: "J'utilise l'IA lorsqu'elle apporte un gain réel : temps, qualité, structuration ou performance. Pas pour suivre une tendance, mais pour résoudre un problème concret.",
  },
  {
    icon: Lightbulb,
    title: "L'exécution, c'est le vrai différenciateur",
    text: "Les meilleures idées ne valent rien sans exécution. Mon background terrain m'a appris que la capacité à arbitrer, décider et avancer sous contrainte est un vrai avantage compétitif.",
  },
]

export default function Vision() {
  return (
    <section id="vision" className="py-24 px-6 section-divider">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-primary mb-3">
          Vision & Philosophie
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4 text-balance">
          Ma philosophie{" "}
          <span className="italic" style={{ color: "var(--teal)" }}>
            produit
          </span>
        </h2>
        <p className="text-muted-foreground max-w-xl mb-16 leading-relaxed text-sm">
          Une vision ancrée dans l&apos;exécution terrain, une culture produit moderne et une
          utilisation pragmatique de l&apos;IA.
        </p>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "var(--teal-dim)" }}
              >
                <p.icon size={18} style={{ color: "var(--teal)" }} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="relative bg-card border border-border rounded-xl p-10 text-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at 50% 0%, var(--teal), transparent 70%)`,
            }}
          />
          <blockquote className="relative z-10">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-foreground leading-snug mb-6 text-balance max-w-3xl mx-auto">
              &ldquo;Le meilleur Product Manager n&apos;est pas celui qui a le plus d&apos;idées,
              c&apos;est celui qui sait lesquelles construire, dans quel ordre, et pourquoi.&rdquo;
            </p>
            <cite className="text-sm text-muted-foreground not-italic">
              — Ma conviction de PM
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
