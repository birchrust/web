import React from 'react'
import { cn } from '~/utils/util'
import { useTheme } from "next-themes"
import { Button } from '~/components/ui/button'

export function CommandMenu() {

  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])
  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'relative w-full justify-start pl-6 text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-52'
        )}
        size={'lg'}
      >
        <span className="hidden lg:inline-flex">Search content...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    </>
  )
}
