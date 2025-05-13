import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Anime = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <img src="https://www.redwolf.in/image/cache/catalog/banners/product-categories/anime-merchandise-page-category-banner-1920-1920x350.jpg?m=1687857164" alt="" />
      <main className="flex-grow bg-black">
        {/* Add your Anime page content here */}
        <h1>Anime Theme Products</h1>
        {/* You can add more components specific to Anime page */}
      </main>
      <Footer />
    </div>
  )
}

export default Anime