import { MenuTrigger, Button, Popover, Menu, Item } from 'react-aria-components'

export function ModeToogle() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu">☰</Button>
      <Popover></Popover>
    </MenuTrigger>
  )
}
