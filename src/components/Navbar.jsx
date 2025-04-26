import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart, FiHeart, FiChevronDown, FiChevronRight } from 'react-icons/fi'
import logo from '../assets/logo.jpg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const searchInputRef = useRef(null)
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
        setSearchExpanded(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && 
          !event.target.closest('.menu-button')) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])
  
  // Focus search input when expanded
  useEffect(() => {
    if (searchExpanded && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchExpanded])

  const menuItems = {
    shop: {
      title: 'SHOP',
      items: [
        { name: 'Clothing', link: '/clothing' },
        { name: 'T-Shirts', link: '/t-shirts' },
        { name: 'Fullsleeve T-Shirts', link: '/fullsleeve-t-shirts' },
        { name: 'Drop Cut T-Shirts', link: '/drop-cut-t-shirts' },
        { name: 'Oversized T-Shirts', link: '/oversized-t-shirts' },
        { name: 'Hoodies', link: '/hoodies' },
        { name: 'Jackets', link: '/jackets' },
      ]
    },
    men: {
      title: 'MEN',
      items: [
        { name: 'All Products', link: '/men' },
        { name: 'T-Shirts', link: '/men/t-shirts' },
        { name: 'Hoodies', link: '/men/hoodies' },
        { name: 'Jackets', link: '/men/jackets' },
      ]
    },
    women: {
      title: 'WOMEN',
      items: [
        { name: 'All Products', link: '/women' },
        { name: 'T-Shirts', link: '/women/t-shirts' },
        { name: 'Crop Tops', link: '/women/crop-tops' },
        { name: 'Hoodies', link: '/women/hoodies' },
      ]
    },
    accessories: {
      title: 'ACCESSORIES',
      items: [
        { name: 'All Accessories', link: '/accessories' },
        { name: 'Phone Cases', link: '/accessories/phone-cases' },
        { name: 'Stickers', link: '/accessories/stickers' },
        { name: 'Badges', link: '/accessories/badges' },
      ]
    },
    newArrivals: {
      title: 'NEW ARRIVALS',
      items: [
        { name: 'All Accessories', link: '/accessories' },
        { name: 'Phone Cases', link: '/accessories/phone-cases' },
        { name: 'Stickers', link: '/accessories/stickers' },
        { name: 'Badges', link: '/accessories/badges' },
      ]
    }
  }

  // Additional mega menu content categories - based on screenshot
  const megaMenuCategories = {
    byProduct: {
      title: 'BY PRODUCT',
      items: [
        { name: 'Clothing', link: '/clothing' },
        { name: 'View All', link: '/all' },
        { name: 'T-Shirts', link: '/t-shirts' },
        { name: 'Fullsleeve T-Shirts', link: '/fullsleeve-t-shirts' },
        { name: 'Drop Cut T-Shirts', link: '/drop-cut-t-shirts' },
        { name: 'Oversized T-Shirts', link: '/oversized-t-shirts' },
        { name: 'Hoodies', link: '/hoodies' },
        { name: 'Jackets', link: '/jackets' },
        { name: 'Sweatshirts', link: '/sweatshirts' },
        { name: 'Oversized Hoodies', link: '/oversized-hoodies' },
        { name: 'Basics', link: '/basics' },
        { name: 'Kids T-Shirts', link: '/kids-t-shirts' },
        { name: 'Sleeveless T-Shirts & Tank Tops', link: '/sleeveless-t-shirts' },
        { name: 'Women\'s Cropped T-Shirts', link: '/womens-cropped-t-shirts' },
        { name: 'Accessories', link: '/accessories' },
      ]
    },
    collections: {
      title: 'BY POPULAR THEMES',
      items: [
        { name: 'All Products', link: '/all-products' },
        { name: 'Superheroes', link: '/superheroes' },
        { name: 'Anime', link: '/anime' },
        { name: 'Cartoons', link: '/cartoons' },
        { name: 'Comics', link: '/comics' },
        { name: 'Glow In The Dark', link: '/glow-in-the-dark' },
        { name: 'Horror', link: '/horror' },
        { name: 'Halloween', link: '/halloween' },
        { name: 'Film', link: '/film' },
        { name: 'TV', link: '/tv' },
        { name: 'Slogan', link: '/slogan' },
        { name: 'Funny', link: '/funny' },
        { name: 'Band T-Shirts', link: '/band-t-shirts' },
        { name: 'Music', link: '/music' },
      ]
    },
    themes: {
      title: 'COLLECTIONS',
      items: [
        { name: 'Cute', link: '/cute' },
        { name: 'Geek', link: '/geek' },
        { name: 'Animals', link: '/animals' },
        { name: 'Funky', link: '/funky' },
        { name: 'Foodie', link: '/foodie' },
        { name: 'Stoner & Alcohol', link: '/stoner-alcohol' },
        { name: 'Pattern T-Shirts', link: '/pattern-t-shirts' },
        { name: 'Camouflage', link: '/camouflage' },
        { name: 'Gym', link: '/gym' },
        { name: 'Rick And Morty', link: '/rick-and-morty' },
        { name: 'Avengers T-Shirts', link: '/avengers-t-shirts' },
        { name: 'Marvel T-Shirts', link: '/marvel-t-shirts' },
        { name: 'Iron Man T-Shirts', link: '/iron-man-t-shirts' },
        { name: 'Gaming', link: '/gaming' },
      ]
    },
    specialCollections: {
      title: 'FEATURED',
      items: [
        { name: 'WINTER WEAR', link: '/winter-wear' },
        { name: 'CLEARANCE SALE', link: '/clearance-sale' },
        { name: 'GIFT VOUCHERS', link: '/gift-vouchers' },
        { name: 'OFFICIAL MERCHANDISE', link: '/official-merchandise' },
        { name: 'UGLY CHRISTMAS SWEATERS', link: '/ugly-christmas-sweaters' },
        { name: 'MINIONS', link: '/minions' },
        { name: 'PRE-ORDERS', link: '/pre-orders' },
        { name: 'BULK & CUSTOM ORDERS', link: '/bulk-custom-orders' },
        { name: 'ARCHIVE', link: '/archive' },
      ]
    }
  }

  const toggleCategory = (key) => {
    setExpandedCategory(expandedCategory === key ? null : key)
  }

  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 h-full flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="CottonVerse Logo" className="h-12 md:h-16 lg:h-20 w-auto" />
            </Link>
          </div>

          {/* Mobile search toggle */}
          <div className="flex md:hidden">
            <button 
              className="text-gray-700 hover:text-primary p-2 mr-2"
              onClick={toggleSearch}
            >
              <FiSearch className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 text-black">
            {Object.entries(menuItems).map(([key, category]) => (
              <div key={key} className="static group">
                <Link 
                  to={`/${key}`} 
                  className="nav-link flex items-center font-bold text-sm lg:text-base font-sans"
                >
                  {category.title}
                  <FiChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                
                {/* Mega menu dropdown */}
                <div className="absolute left-0 right-0 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 mt-0">
                  <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                      {/* BY PRODUCT Column */}
                      <div>
                        <h3 className="text-sm lg:text-base font-semibold mb-2 lg:mb-3 text-gray-800">{megaMenuCategories.byProduct.title}</h3>
                        <div className="grid grid-cols-1 gap-1 lg:gap-2">
                          {megaMenuCategories.byProduct.items.slice(0, windowWidth < 1024 ? 6 : undefined).map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="text-xs lg:text-sm text-gray-700 hover:text-primary hover:underline"
                            >
                              {item.name}
                            </Link>
                          ))}
                          {windowWidth < 1024 && megaMenuCategories.byProduct.items.length > 6 && (
                            <Link to="/all" className="text-xs lg:text-sm text-primary font-medium hover:underline">
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* BY POPULAR THEMES Column */}
                      <div>
                        <h3 className="text-sm lg:text-base font-semibold mb-2 lg:mb-3 text-gray-800">{megaMenuCategories.collections.title}</h3>
                        <div className="grid grid-cols-1 gap-1 lg:gap-2">
                          {megaMenuCategories.collections.items.slice(0, windowWidth < 1024 ? 6 : undefined).map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="text-xs lg:text-sm text-gray-700 hover:text-primary hover:underline"
                            >
                              {item.name}
                            </Link>
                          ))}
                          {windowWidth < 1024 && megaMenuCategories.collections.items.length > 6 && (
                            <Link to="/all-products" className="text-xs lg:text-sm text-primary font-medium hover:underline">
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* COLLECTIONS Column */}
                      <div>
                        <h3 className="text-sm lg:text-base font-semibold mb-2 lg:mb-3 text-gray-800">{megaMenuCategories.themes.title}</h3>
                        <div className="grid grid-cols-1 gap-1 lg:gap-2">
                          {megaMenuCategories.themes.items.slice(0, windowWidth < 1024 ? 6 : undefined).map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="text-xs lg:text-sm text-gray-700 hover:text-primary hover:underline"
                            >
                              {item.name}
                            </Link>
                          ))}
                          {windowWidth < 1024 && megaMenuCategories.themes.items.length > 6 && (
                            <Link to="/collections" className="text-xs lg:text-sm text-primary font-medium hover:underline">
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* SPECIAL COLLECTIONS Column */}
                      <div>
                        <h3 className="text-sm lg:text-base font-semibold mb-2 lg:mb-3 text-gray-800">{megaMenuCategories.specialCollections.title}</h3>
                        <div className="grid grid-cols-1 gap-1 lg:gap-2">
                          {megaMenuCategories.specialCollections.items.slice(0, windowWidth < 1024 ? 6 : undefined).map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="text-xs lg:text-sm text-gray-700 hover:text-primary hover:underline"
                            >
                              {item.name}
                            </Link>
                          ))}
                          {windowWidth < 1024 && megaMenuCategories.specialCollections.items.length > 6 && (
                            <Link to="/featured" className="text-xs lg:text-sm text-primary font-medium hover:underline">
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Category links at bottom */}
                    <div className="hidden lg:grid grid-cols-4 md:grid-cols-8 gap-2 lg:gap-4 mt-4 lg:mt-8 border-t pt-4 lg:pt-6">
                      <Link to="/anime" className="text-center hover:text-primary text-xs lg:text-sm font-medium">ANIME</Link>
                      <Link to="/superhero" className="text-center hover:text-primary text-xs lg:text-sm font-medium">SUPERHERO</Link>
                      <Link to="/glow-in-dark" className="text-center hover:text-primary text-xs lg:text-sm font-medium">GLOW IN DARK</Link>
                      <Link to="/cartoon" className="text-center hover:text-primary text-xs lg:text-sm font-medium">CARTOON</Link>
                      <Link to="/slogan" className="text-center hover:text-primary text-xs lg:text-sm font-medium">SLOGAN</Link>
                      <Link to="/funny" className="text-center hover:text-primary text-xs lg:text-sm font-medium">FUNNY</Link>
                      <Link to="/geek" className="text-center hover:text-primary text-xs lg:text-sm font-medium">GEEK</Link>
                      <Link to="/funky" className="text-center hover:text-primary text-xs lg:text-sm font-medium">FUNKY</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="py-1 bg-white text-black px-3 pr-8 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm w-32 lg:w-48"
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            </div>
            <button className="text-gray-700 hover:text-primary p-1">
              <FiUser className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-primary p-1">
              <FiHeart className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-primary p-1 relative">
              <FiShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button and icons */}
          <div className="flex items-center space-x-2 md:hidden">
            <button className="text-gray-700 hover:text-primary p-1 relative">
              <FiUser className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-primary p-1 relative">
              <FiHeart className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-primary p-1 relative">
              <FiShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              type="button"
              className="menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="block h-5 w-5" />
              ) : (
                <FiMenu className="block h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search overlay */}
      {searchExpanded && (
        <div className="absolute z-50 top-16 left-0 right-0 bg-white shadow-md md:hidden px-4 py-3">
          <div className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search products..."
              className="w-full py-2 bg-white text-black px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black shadow-lg mobile-menu fixed inset-0 top-16 overflow-y-auto z-40">
          <div className="px-4 py-2 space-y-1 divide-y divide-gray-200">
            {Object.entries(menuItems).map(([key, category]) => (
              <div key={key} className="py-2">
                <button 
                  className="flex items-center justify-between w-full px-2 py-3 font-medium text-gray-800"
                  onClick={() => toggleCategory(key)}
                >
                  {category.title}
                  {expandedCategory === key ? 
                    <FiChevronDown className="h-5 w-5" /> : 
                    <FiChevronRight className="h-5 w-5" />
                  }
                </button>
                {expandedCategory === key && (
                  <div className="pl-4 mt-2 space-y-2">
                    {category.items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className="block px-2 py-2 text-sm text-gray-700 hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="py-4 space-y-3">
              <h3 className="font-medium text-gray-800 px-2 py-2">FEATURED</h3>
              <Link to="/winter-wear" className="block px-2 py-2 text-sm text-gray-700 hover:text-primary">
                Winter Wear
              </Link>
              <Link to="/new-arrivals" className="block px-2 py-2 text-sm text-gray-700 hover:text-primary">
                New Arrivals
              </Link>
              <Link to="/clearance-sale" className="block px-2 py-2 text-sm text-gray-700 hover:text-primary">
                Clearance Sale
              </Link>
              <Link to="/contact" className="block px-2 py-2 text-sm text-gray-700 hover:text-primary">
                Contact Us
              </Link>
            </div>
            
            {/* Popular categories */}
            <div className="py-4">
              <h3 className="font-medium text-gray-800 px-2 py-2">POPULAR CATEGORIES</h3>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Link to="/anime" className="px-2 py-2 text-sm text-gray-700 hover:text-primary">ANIME</Link>
                <Link to="/superhero" className="px-2 py-2 text-sm text-gray-700 hover:text-primary">SUPERHERO</Link>
                <Link to="/glow-in-dark" className="px-2 py-2 text-sm text-gray-700 hover:text-primary">GLOW IN DARK</Link>
                <Link to="/cartoon" className="px-2 py-2 text-sm text-gray-700 hover:text-primary">CARTOON</Link>
                <Link to="/gaming" className="px-2 py-2 text-sm text-gray-700 hover:text-primary">GAMING</Link>
                <Link to="/funny" className="px-2 py-2 text-sm text-gray-700 hover:text-primary">FUNNY</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar