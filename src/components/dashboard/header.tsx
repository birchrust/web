interface HeaderProps {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">{children}</header>
}
