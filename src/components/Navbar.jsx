import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart, FiHeart, FiChevronDown, FiChevronRight } from 'react-icons/fi'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const searchInputRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const searchOverlayRef = useRef(null)
  
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
      if (isMenuOpen && mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.menu-button')) {
        setIsMenuOpen(false)
      }
      
      if (searchExpanded && searchOverlayRef.current && 
          !searchOverlayRef.current.contains(event.target) && 
          !event.target.closest('.search-button')) {
        setSearchExpanded(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen, searchExpanded])
  
  // Focus search input when expanded
  useEffect(() => {
    if (searchExpanded && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchExpanded])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

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
        { name: 'Latest Products', link: '/new-arrivals' },
        { name: 'Limited Editions', link: '/limited-editions' },
        { name: 'Trending Items', link: '/trending' },
      ]
    }
  }

  // Additional mega menu content categories
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

  const showMenuItems = (category, screenSize) => {
    if (screenSize === 'sm') return category.items.slice(0, 6)
    if (screenSize === 'md') return category.items.slice(0, 8)
    return category.items
  }

  // Get logo text size based on screen width
  const getLogoTextSize = () => {
    if (windowWidth < 640) return "text-lg" // small mobile
    if (windowWidth < 768) return "text-xl" // mobile
    if (windowWidth < 1024) return "text-xl" // tablet
    return "text-2xl" // desktop and above
  }

  // Get navbar height based on screen width
  const getNavbarHeight = () => {
    if (windowWidth < 640) return "h-12" // small mobile
    if (windowWidth < 768) return "h-12" // mobile
    if (windowWidth < 1024) return "h-14" // tablet
    return "h-16" // desktop and above
  }

  // Calculate mobile menu top offset based on navbar height
  const getMobileMenuTopOffset = () => {
    if (windowWidth < 640) return "top-12" // small mobile
    if (windowWidth < 768) return "top-12" // mobile
    return "top-14" // tablet
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className={`flex items-center justify-between ${getNavbarHeight()}`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className={`font-black text-black ${getLogoTextSize()} boldonse-regular`}>Cotton Verse</h1>
            </Link>
          </div>

          {/* Mobile search toggle */}
          <div className="flex md:hidden">
            <button 
              className="search-button text-gray-700 hover:text-primary p-1"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <FiSearch className="h-4 w-4" />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6 text-black">
            {Object.entries(menuItems).map(([key, category]) => (
              <div key={key} className="static group">
                <Link 
                  to={`/${key}`} 
                  className="nav-link flex items-center font-bold text-xs lg:text-base font-sans py-1"
                >
                  {category.title}
                  <FiChevronDown className="ml-1 h-3 w-3 group-hover:rotate-180 transition-transform duration-200" />
                </Link>
                
                {/* Mega menu dropdown */}
                <div className="absolute left-0 right-0 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 mt-0 z-50">
                  <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-3 lg:py-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
                      {/* BY PRODUCT Column */}
                      <div>
                        <h3 className="text-xs lg:text-sm font-semibold mb-1 lg:mb-2 text-gray-800">{megaMenuCategories.byProduct.title}</h3>
                        <div className="grid grid-cols-1 gap-1">
                          {showMenuItems(megaMenuCategories.byProduct, windowWidth < 1024 ? 'sm' : windowWidth < 1280 ? 'md' : 'lg').map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="text-xs text-gray-700 hover:text-primary hover:underline"
                            >
                              {item.name}
                            </Link>
                          ))}
                          {windowWidth < 1280 && megaMenuCategories.byProduct.items.length > (windowWidth < 1024 ? 6 : 8) && (
                            <Link to="/all" className="text-xs text-primary font-medium hover:underline">
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* BY POPULAR THEMES Column */}
                      <div>
                        <h3 className="text-xs lg:text-sm font-semibold mb-1 lg:mb-2 text-gray-800">{megaMenuCategories.collections.title}</h3>
                        <div className="grid grid-cols-1 gap-1">
                          {showMenuItems(megaMenuCategories.collections, windowWidth < 1024 ? 'sm' : windowWidth < 1280 ? 'md' : 'lg').map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="text-xs text-gray-700 hover:text-primary hover:underline"
                            >
                              {item.name}
                            </Link>
                          ))}
                          {windowWidth < 1280 && megaMenuCategories.collections.items.length > (windowWidth < 1024 ? 6 : 8) && (
                            <Link to="/all-products" className="text-xs text-primary font-medium hover:underline">
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* COLLECTIONS Column */}
                      <div>
                        <h3 className="text-xs lg:text-sm font-semibold mb-1 lg:mb-2 text-gray-800">{megaMenuCategories.themes.title}</h3>
                        <div className="grid grid-cols-1 gap-1">
                          {showMenuItems(megaMenuCategories.themes, windowWidth < 1024 ? 'sm' : windowWidth < 1280 ? 'md' : 'lg').map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="text-xs text-gray-700 hover:text-primary hover:underline"
                            >
                              {item.name}
                            </Link>
                          ))}
                          {windowWidth < 1280 && megaMenuCategories.themes.items.length > (windowWidth < 1024 ? 6 : 8) && (
                            <Link to="/collections" className="text-xs text-primary font-medium hover:underline">
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* SPECIAL COLLECTIONS Column */}
                      <div>
                        <h3 className="text-xs lg:text-sm font-semibold mb-1 lg:mb-2 text-gray-800">{megaMenuCategories.specialCollections.title}</h3>
                        <div className="grid grid-cols-1 gap-1">
                          {showMenuItems(megaMenuCategories.specialCollections, windowWidth < 1024 ? 'sm' : windowWidth < 1280 ? 'md' : 'lg').map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="text-xs text-gray-700 hover:text-primary hover:underline"
                            >
                              {item.name}
                            </Link>
                          ))}
                          {windowWidth < 1280 && megaMenuCategories.specialCollections.items.length > (windowWidth < 1024 ? 6 : 8) && (
                            <Link to="/featured" className="text-xs text-primary font-medium hover:underline">
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Category links at bottom - Hide on small screens, show progressively more on larger screens */}
                    <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 mt-3 border-t pt-3">
                      <Link to="/anime" className="text-center hover:text-primary text-xs font-medium">ANIME</Link>
                      <Link to="/superhero" className="text-center hover:text-primary text-xs font-medium">SUPERHERO</Link>
                      {windowWidth >= 1024 && (
                        <Link to="/glow-in-dark" className="text-center hover:text-primary text-xs font-medium">GLOW IN DARK</Link>
                      )}
                      <Link to="/cartoon" className="text-center hover:text-primary text-xs font-medium">CARTOON</Link>
                      <Link to="/slogan" className="text-center hover:text-primary text-xs font-medium">SLOGAN</Link>
                      <Link to="/funny" className="text-center hover:text-primary text-xs font-medium">FUNNY</Link>
                      {windowWidth >= 1024 && (
                        <Link to="/geek" className="text-center hover:text-primary text-xs font-medium">GEEK</Link>
                      )}
                      {windowWidth >= 1280 && (
                        <Link to="/funky" className="text-center hover:text-primary text-xs font-medium">FUNKY</Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="py-1 bg-white text-black px-2 pr-7 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-xs w-24 md:w-28 lg:w-32 xl:w-40 transition-all duration-200"
              />
              <FiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-3 w-3" />
            </div>
            <button className="text-gray-700 hover:text-primary p-1" aria-label="Account">
              <FiUser className="h-4 w-4" />
            </button>
            <button className="text-gray-700 hover:text-primary p-1" aria-label="Wishlist">
              <FiHeart className="h-4 w-4" />
            </button>
            <button className="text-gray-700 hover:text-primary p-1 relative" aria-label="Cart">
              <FiShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button and icons */}
          <div className="flex items-center space-x-1 md:hidden">
            <button className="text-gray-700 hover:text-primary p-1" aria-label="Account">
              <FiUser className="h-4 w-4" />
            </button>
            <button className="text-gray-700 hover:text-primary p-1" aria-label="Wishlist">
              <FiHeart className="h-4 w-4" />
            </button>
            <button className="text-gray-700 hover:text-primary p-1 relative" aria-label="Cart">
              <FiShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              type="button"
              className="menu-button inline-flex items-center justify-center p-1 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FiX className="block h-4 w-4" />
              ) : (
                <FiMenu className="block h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile search overlay */}
      {searchExpanded && (
        <div ref={searchOverlayRef} className={`fixed z-50 ${getMobileMenuTopOffset()} left-0 right-0 bg-white shadow-md md:hidden px-3 py-2`}>
          <div className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search products..."
              className="w-full py-1 bg-white text-black px-3 pr-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FiSearch className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu - With safe area considerations */}
      {isMenuOpen && (
        <div 
          ref={mobileMenuRef} 
          className={`md:hidden bg-white text-black shadow-lg mobile-menu fixed inset-0 ${getMobileMenuTopOffset()} overflow-y-auto z-40 pb-safe`}
          style={{ height: windowWidth < 640 ? 'calc(100vh - 48px)' : 'calc(100vh - 56px)' }}
        >
          <div className="px-3 py-1 space-y-1 divide-y divide-gray-200">
            {Object.entries(menuItems).map(([key, category]) => (
              <div key={key} className="py-1">
                <button 
                  className="flex items-center justify-between w-full px-2 py-2 font-medium text-gray-800"
                  onClick={() => toggleCategory(key)}
                  aria-expanded={expandedCategory === key}
                >
                  {category.title}
                  {expandedCategory === key ? 
                    <FiChevronDown className="h-4 w-4" /> : 
                    <FiChevronRight className="h-4 w-4" />
                  }
                </button>
                {expandedCategory === key && (
                  <div className="pl-4 mt-1 space-y-1 max-h-60 overflow-y-auto">
                    {category.items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        className="block px-2 py-1 text-sm text-gray-700 hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="py-2 space-y-1">
              <h3 className="font-medium text-gray-800 px-2 py-1">FEATURED</h3>
              <Link to="/winter-wear" className="block px-2 py-1 text-sm text-gray-700 hover:text-primary">
                Winter Wear
              </Link>
              <Link to="/new-arrivals" className="block px-2 py-1 text-sm text-gray-700 hover:text-primary">
                New Arrivals
              </Link>
              <Link to="/clearance-sale" className="block px-2 py-1 text-sm text-gray-700 hover:text-primary">
                Clearance Sale
              </Link>
              <Link to="/contact" className="block px-2 py-1 text-sm text-gray-700 hover:text-primary">
                Contact Us
              </Link>
            </div>
            
            {/* Popular categories */}
            <div className="py-2">
              <h3 className="font-medium text-gray-800 px-2 py-1">POPULAR CATEGORIES</h3>
              <div className="grid grid-cols-2 gap-1 mt-1">
                <Link to="/anime" className="px-2 py-1 text-sm text-gray-700 hover:text-primary">ANIME</Link>
                <Link to="/superhero" className="px-2 py-1 text-sm text-gray-700 hover:text-primary">SUPERHERO</Link>
                <Link to="/glow-in-dark" className="px-2 py-1 text-sm text-gray-700 hover:text-primary">GLOW IN DARK</Link>
                <Link to="/cartoon" className="px-2 py-1 text-sm text-gray-700 hover:text-primary">CARTOON</Link>
                <Link to="/gaming" className="px-2 py-1 text-sm text-gray-700 hover:text-primary">GAMING</Link>
                <Link to="/funny" className="px-2 py-1 text-sm text-gray-700 hover:text-primary">FUNNY</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar