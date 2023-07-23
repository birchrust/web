import { motion } from 'framer-motion'
import { GridPattern } from '~/components/landing/grid-pattern'

import RootLayout from './layout'
interface HomeLayoutProps {
  children: React.ReactNode
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <RootLayout>
      <motion.div
        className=" relative flex flex-auto overflow-hidden bg-white pt-4"
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-1/2 w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />
          <section className="w-full flex-auto">{children}</section>
        </motion.div>
      </motion.div>
    </RootLayout>
  )
}

export default HomeLayout
