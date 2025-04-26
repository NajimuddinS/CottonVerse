import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function HeroBanner() {
  const banners = [
    {
      id: 1,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/hompage_1.jpg?format=webp&w=1366&dpr=1.0',
      title: 'SUMMER COLLECTIONS',
      subtitle: 'NEW ARRIVALS',
      description: 'Discover our latest cotton collection with up to 50% off',
      buttonText: 'SHOP NOW',
      buttonLink: '/collections/summer',
      textColor: 'text-white'
    },
    {
      id: 2,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Slytherin_Backpack_Home_Page_Now_Live.jpg?format=webp&w=1366&dpr=1.0',
      title: 'CLOSING SALE',
      subtitle: "IT'S THE END OF AN ERA",
      description: 'Get your favorite designs at NEVER BEFORE SEEN PRICES',
      buttonText: 'EXPLORE',
      buttonLink: '/sale',
      textColor: 'text-white'
    },
    {
      id: 3,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_2_QAuIMIR.jpg?format=webp&w=1366&dpr=1.0',
      title: 'PREMIUM COLLECTION',
      subtitle: 'LUXURY COTTON',
      description: 'Experience the comfort of premium cotton apparels',
      buttonText: 'DISCOVER',
      buttonLink: '/premium',
      textColor: 'text-white'
    },
    {
      id: 4,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_copy_i1SVB7N.jpg?format=webp&w=1366&dpr=1.0',
      title: 'SUMMER COLLECTIONS',
      subtitle: 'NEW ARRIVALS',
      description: 'Discover our latest cotton collection with up to 50% off',
      buttonText: 'SHOP NOW',
      buttonLink: '/collections/summer',
      textColor: 'text-white'
    },
    {
      id: 5,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/polo_homepage.jpg?format=webp&w=1366&dpr=1.0',
      title: 'CLOSING SALE',
      subtitle: "IT'S THE END OF AN ERA",
      description: 'Get your favorite designs at NEVER BEFORE SEEN PRICES',
      buttonText: 'EXPLORE',
      buttonLink: '/sale',
      textColor: 'text-white'
    }
  ]

  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        emulateTouch={true}
        className="carousel-container"
      >
        {banners.map(banner => (
          <div key={banner.id} className="relative">
            <div className="h-[60vh] sm:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${banner.image})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4 text-center">
                {/* <h3 className={`text-lg md:text-xl font-semibold mb-2 ${banner.textColor}`}>{banner.subtitle}</h3>
                <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${banner.textColor}`}>{banner.title}</h2>
                <p className={`text-base md:text-lg mb-6 max-w-xl ${banner.textColor}`}>{banner.description}</p>
                <a 
                  href={banner.buttonLink} 
                  className="btn btn-primary px-6 py-3 text-sm md:text-base"
                >
                  {banner.buttonText}
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default HeroBanner