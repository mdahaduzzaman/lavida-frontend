import Category from '@/components/Category'
import Navigation from '@/components/Navigation'
import PopularHero from '@/components/PopularHero'
import Topbar from '@/components/Topbar'

export default function Home() {
  return (
    <>
      <Topbar/>
      <Category/>
      <Navigation/>
      <PopularHero/>
    </>
  )
}
