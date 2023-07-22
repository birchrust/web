import React from 'react'
import Head from 'next/head'
import { metadata } from '~/config'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content={metadata.author} />
        <meta name="description" content={metadata.description} />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={'null'} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={'null'} />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
      </Head>
      <main className="relative flex min-h-screen justify-center">
        {children}
      </main>
    </>
  )
}
