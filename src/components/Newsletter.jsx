import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with the backend
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get updates on new arrivals, exclusive offers, and seasonal discounts.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              SUBMIT
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md animate-fade-in">
              Thank you for subscribing! You'll receive our newsletter soon.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter