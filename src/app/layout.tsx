import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/print.css';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Singapore Presentation | Interactive Educational Website',
  description: 'Explore Singapore - a comprehensive interactive presentation covering history, economy, culture, tourism, and more. Bilingual content in English and Vietnamese.',
  keywords: 'Singapore, presentation, education, interactive, bilingual, history, economy, culture, tourism, Asia',
  authors: [{ name: 'Singapore Presentation Team' }],
  creator: 'Singapore Presentation',
  publisher: 'Singapore Presentation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Singapore Presentation - Interactive Educational Website',
    description: 'Comprehensive interactive presentation about Singapore with bilingual content',
    url: '/',
    siteName: 'Singapore Presentation',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Singapore Presentation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Singapore Presentation',
    description: 'Interactive educational presentation about Singapore',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Singapore',
              url: 'https://www.gov.sg',
              logo: '/images/singapore-logo.png',
              description: 'Official information about Singapore',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'SG',
                addressLocality: 'Singapore',
              },
              sameAs: [
                'https://www.facebook.com/gov.sg',
                'https://twitter.com/govsingapore',
                'https://www.instagram.com/govsingapore/',
              ],
            }),
          }}
        />
        {/* Preconnect to improve font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Leaflet CSS for maps */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="main-content" role="main">
          {children}
        </div>

        {/* Accessibility announcement region for screen readers */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          id="aria-announcements"
        />
      </body>
    </html>
  );
}
