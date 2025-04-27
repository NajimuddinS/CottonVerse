import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function FeaturedCategories() {
  const [startIndex, setStartIndex] = useState(0)
  
  const categories = [
    {
      id: 1,
      name: 'T-SHIRTS',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/t-shirts-for-men-featured-480x480.jpg?m=1709881172',
      link: '/categories/t-shirts',
      bgColor: 'bg-red-500'
    },
    {
      id: 2,
      name: 'OVERSIZED',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/oversized-t-shirts-india-featured-480x480.jpg?m=1709881172',
      link: '/categories/oversized',
      bgColor: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'SOCKS',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-category-socks-23-480x480.jpg?m=1706184531',
      link: '/categories/socks',
      bgColor: 'bg-orange-500'
    },
    {
      id: 4,
      name: 'COASTERS',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-category-coasters-23-480x480.jpg?m=1706184531',
      link: '/categories/coasters',
      bgColor: 'bg-pink-500'
    },
    {
      id: 5,
      name: 'CAPS',
      image: 'https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/categories/caps',
      bgColor: 'bg-gray-500'
    },
    {
      id: 6,
      name: 'FACE MASKS',
      image: 'https://images.pexels.com/photos/3951356/pexels-photo-3951356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/categories/face-masks',
      bgColor: 'bg-green-500'
    },
    {
      id: 7,
      name: 'JACKETS',
      image: 'https://images.pexels.com/photos/7147642/pexels-photo-7147642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/categories/jackets',
      bgColor: 'bg-indigo-500'
    },
    {
      id: 8,
      name: 'HOODIES',
      image: 'https://images.pexels.com/photos/7873248/pexels-photo-7873248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/categories/hoodies',
      bgColor: 'bg-yellow-500'
    }
  ]

  const visibleCategories = categories.slice(startIndex, startIndex + 4)
  
  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 4))
  }
  
  const handleNext = () => {
    setStartIndex(Math.min(categories.length - 4, startIndex + 4))
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title mb-0">FEATURED CATEGORIES</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-2 rounded-full ${startIndex === 0 ? 'text-gray-300 bg-gray-100' : 'text-gray-700 bg-white shadow hover:bg-gray-100'}`}
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              disabled={startIndex >= categories.length - 4}
              className={`p-2 rounded-full ${startIndex >= categories.length - 4 ? 'text-gray-300 bg-gray-100' : 'text-gray-700 bg-white shadow hover:bg-gray-100'}`}
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="text-gray-600 text-center mb-8">Discover amazing designs by artists from all over the globe!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCategories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-md">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className={`${category.bgColor} text-white text-center py-2 font-semibold`}>
                      {category.name}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-2 mt-8 sm:hidden">
          <button 
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-2 rounded-full ${startIndex === 0 ? 'text-gray-300 bg-gray-100' : 'text-gray-700 bg-white shadow hover:bg-gray-100'}`}
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={handleNext}
            disabled={startIndex >= categories.length - 4}
            className={`p-2 rounded-full ${startIndex >= categories.length - 4 ? 'text-gray-300 bg-gray-100' : 'text-gray-700 bg-white shadow hover:bg-gray-100'}`}
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories