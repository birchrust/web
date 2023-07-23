'use client'

import Link from 'next/link'
import { cn } from '~/utils/util'
import { metadata } from '~/config'
import { Icons } from '~/components//icons'
import { MainNav } from '~/components/header/main-nav'
import { ModeToogle } from '~/components/header/mode-toggle'
import { CommandMenu } from '~/components/header/command-menu'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-transparent py-4">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-6 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href={metadata.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn('px-0')}>
                <Icons.twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToogle />
          </nav>
        </div>
      </div>
    </header>
  )
}
