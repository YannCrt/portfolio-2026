import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Yann Cretin | Développeur Full Stack & Admin Système (L3 Informatique)",
  description: "Portfolio professionnel de Yann Cretin, développeur Full Stack (Next.js, TS) et administrateur systèmes (Active Directory, Linux, AWS). À la recherche d'une alternance pour septembre 2026.",
  keywords: ["Yann Cretin", "Développeur Full Stack", "Next.js", "TypeScript", "Tailwind CSS", "Active Directory", "Alternance Informatique 2026", "Paris"],
  authors: [{ name: "Yann Cretin" }],
  creator: "Yann Cretin",
  // L'objet OpenGraph configure l'aperçu pour LinkedIn, Twitter, etc.
  openGraph: {
    title: "Yann Cretin | Portfolio Professionnel 2026",
    description: "Découvrez mes projets de développement web modernes et mes réalisations en administration systèmes.",
    url: "https://votre-futur-nom-de-domaine.com", // On le mettra à jour à l'étape finale Vercel
    siteName: "Yann Cretin Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}