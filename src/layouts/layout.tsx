import React from 'react'
import Head from 'next/head'
import { metadata } from '~/config'
import { motion } from 'framer-motion'
import { Header } from '~/components/header/header'
import { Footer } from '~/components/footer/footer'
import { GridPattern } from '~/components/landing/grid-pattern'

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
        <motion.div
          layout
          className="relative isolate flex flex-auto overflow-hidden bg-background"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-1/4 w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-16}
            interactive
          />
          <section className="flex w-full flex-auto flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </section>
        </motion.div>
      </main>
    </>
  )
}
