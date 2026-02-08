import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import EvidenceWidget from '@/components/EvidenceWidget'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fast Offers - Draft Offers Faster',
  description: 'Fast Offers is the modern offer platform for real estate agents, letting you create, sign, and send offers in minutes. No more paperwork headaches—just faster',
  keywords: ['Ontario Real Estate', 'OREA Forms', 'Offer Generation', 'Fast Offers', 'Realtor Tools', 'DocuSign Integration', 'Form 100', 'Real Estate Software'],
  authors: [{ name: 'Fast Offers' }],
  themeColor: '#100EA0',
  metadataBase: new URL('https://fastoffers.ca'),
  alternates: {
    canonical: '/',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://fastoffers.ca/',
    title: 'Fast Offers - Draft Offers Faster',
    description: 'Stop wasting time on paperwork. The modern offer platform for Ontario agents. Generate, sign, and send offers in seconds.',
    images: [
      {
        url: 'https://fastoffers.ca/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fast Offers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fast Offers - Draft Offers Faster',
    description: 'Stop wasting time on paperwork. The modern offer platform for Ontario agents.',
    images: ['https://fastoffers.ca/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#100EA0',
    'msapplication-TileImage': '/ms-icon-144x144.png',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fast Offers',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  description: 'AI-powered real estate offer generation platform for Ontario agents. Automates OREA forms (Agreement of Purchase and Sale), integrates with DocuSign, and prevents errors.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CAD',
    availability: 'https://schema.org/OnlineOnly',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '350',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Real Estate Agents',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@200,300,400,500,700,800&f[]=gambetta@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#100EA0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased selection:bg-brand selection:text-white">
        <div className="noise" />
        {children}
        <EvidenceWidget />
      </body>
    </html>
  )
}

