'use client'

import React from 'react'
import Link from 'next/link'

import { metadata } from '~/config'
import { Icons } from '~/components/icons'

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-10 w-10 fill-[#06b6d4]" />
        <span className="hidden font-bold sm:inline-block">
          {metadata.name}
        </span>
      </Link>
    </div>
  )
}
