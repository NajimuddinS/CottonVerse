import { Link } from 'react-router-dom'

function FeaturedThemes() {
  const themes = [
    {
      id: 1,
      name: 'ANIME',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-anime-2-300x300.jpg?m=1726843592',
      link: '/themes/anime'
    },
    {
      id: 2,
      name: 'SUPERHERO',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-superhero-300x300.jpg?m=1706184531',
      link: '/themes/superhero'
    },
    {
      id: 3,
      name: 'GLOW IN DARK',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-glow-in-dark-300x300.jpg?m=1706184531',
      link: '/themes/glow-in-dark'
    },
    {
      id: 4,
      name: 'CARTOON',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-cartoon-300x300.jpg?m=1706184531',
      link: '/themes/cartoon'
    },
    {
      id: 5,
      name: 'SLOGAN',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-slogan-300x300.jpg?m=1706184531',
      link: '/themes/slogan'
    },
    {
      id: 6,
      name: 'FUNNY',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-funny-300x300.jpg?m=1706184531',
      link: '/themes/funny'
    },
    {
      id: 7,
      name: 'GEEK',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-geek-300x300.jpg?m=1706184531',
      link: '/themes/geek'
    },
    {
      id: 8,
      name: 'FUNKY',
      image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/featured-theme-funky-300x300.jpg?m=1706184531',
      link: '/themes/funky'
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-10">FEATURED THEMES</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {themes.map((theme) => (
            <Link 
              key={theme.id} 
              to={theme.link}
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-square overflow-hidden rounded-full mb-3 border-2 border-transparent group-hover:scale-110">
                <img 
                  src={theme.image} 
                  alt={theme.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120" 
                />
              </div>
              <h3 className="text-sm font-bold text-black text-center group-hover:text-red-600 transition-colors duration-200">
                {theme.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedThemes