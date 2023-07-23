'use client'

import { MainNav } from '~/components/header/main-nav'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-transparent py-4">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center"></nav>
        </div>
      </div>
    </header>
  )
}
