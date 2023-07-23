import HomeLayout from '~/layouts/home-layout'
import { Header } from '~/components/dashboard/header'
import { MainNav } from '~/components/dashboard/main-nav'


export default function Home() {
  return (
    <HomeLayout>
      <Header>
        <div className="container flex h-14 items-center">
          <MainNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              
            </div>
            <nav className="flex items-center">

            </nav>
          </div>
        </div>
      </Header>
    </HomeLayout>
  )
}
