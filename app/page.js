import Category from '@/components/Category'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PopularHero from '@/components/PopularHero'
import ProductCard from '@/components/ProductCard'
import Topbar from '@/components/Topbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Topbar/>
      <Category/>
      <Navigation/>
      <PopularHero/>
      {/* <ProductCard/> */}
      <Footer />
    </>
  )
}
