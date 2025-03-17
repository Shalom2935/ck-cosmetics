import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CK Cosmetics - Naturellement vous, intensément beau',
  description: 'Découvrez la gamme de produits cosmétiques de luxe CK Cosmetics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}