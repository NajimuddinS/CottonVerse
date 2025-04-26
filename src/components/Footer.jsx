import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      {/* Main footer */}
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CottonVerse</h3>
            <p className="text-gray-300 mb-4">
              Premium quality cotton apparel with unique designs by artists from around the world.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/men" className="text-gray-300 hover:text-white transition-colors">Men</Link>
              </li>
              <li>
                <Link to="/women" className="text-gray-300 hover:text-white transition-colors">Women</Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-300 hover:text-white transition-colors">Sale</Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-300 hover:text-white transition-colors">New Arrivals</Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/delivery-information" className="text-gray-300 hover:text-white transition-colors">Delivery Information</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary" />
                <span className="text-gray-300">123 Cotton Ave, Fashion District, 12345</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-primary" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-primary" />
                <span className="text-gray-300">support@cottonverse.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment methods */}
      <div className="border-t border-gray-700 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              Our site uses secure payment gateways. All major credit & debit cards accepted.
            </p>
            <div className="flex space-x-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" alt="Visa" className="h-8 bg-white rounded p-1" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mastercard/mastercard-original.svg" alt="Mastercard" className="h-8 bg-white rounded p-1" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple Pay" className="h-8 bg-white rounded p-1" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg" alt="PayPal" className="h-8 bg-white rounded p-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-secondary-dark py-4">
        <div className="container-custom">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} CottonVerse. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer