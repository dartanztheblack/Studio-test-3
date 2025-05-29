import './globals.css'

export const metadata = {
  title: 'Studio 404 - Art Digital NFT',
  description: 'Découvrez l\'art numérique d\'exception, une œuvre à la fois, accessible à tous.',
  keywords: 'NFT, art digital, blockchain, Studio 404',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B9AAF" />
      </head>
      <body>{children}</body>
    </html>
  )
}