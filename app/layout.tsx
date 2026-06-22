import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Laura Caprara — Product Management & Tech | IA & Automatisation',
  description:
    'Portfolio de Laura Caprara, Product Manager. Profil hybride Product, Tech et IA avec +10 ans de management. Formation Join Maestro, projet certifiant Welcome to the Jungle.',
  keywords: [
    'Product Manager France',
    'Product Manager',
    'Laura Caprara',
    'Product Discovery',
    'User Research',
    'IA Automatisation',
    'Join Maestro',
    'Welcome to the Jungle',
  ],
  authors: [{ name: 'Laura Caprara' }],
  openGraph: {
    title: 'Laura Caprara — Product Management & Tech | IA & Automatisation',
    description:
      'Portfolio de Laura Caprara, Product Manager. Profil hybride mêlant gestion de produit, compréhension technique, IA appliquée et structuration de projets digitaux.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
