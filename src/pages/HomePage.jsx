import Navbar from '../components/Navbar'
import SubNav from '../components/SubNav'
import HeroBanner from '../components/HeroBanner'
import FeaturedThemes from '../components/FeaturedThemes'
import FeaturedCategories from '../components/FeaturedCategories'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SubNav/>
      <main className="flex-grow">
        <HeroBanner />
        <FeaturedThemes />
        <FeaturedCategories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage