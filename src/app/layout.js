
import Head from 'next/head'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BrainDump Studio',
  description: 'Created by uc129',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="preload" href="/fonts/Inter.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
          {/* <style>{inter.fontFace}</style> */}

        </Head>
        {children}
      </body>
    </html>
  )
}
