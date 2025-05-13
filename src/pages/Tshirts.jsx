import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaHeart, FaRegHeart, FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Tshirts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState(["T-shirts"]); // Default to T-shirts
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Available filter options
  const categories = ["T-shirts", "Shirts", "Jeans", "Pants", "Dresses"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://cottonversebe.onrender.com/api/v1/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        // Extract products from the data property of the response
        const productsArray = data.data || [];

        setProducts(productsArray);
        setFilteredProducts(productsArray);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        setProducts([]);
        setFilteredProducts([]);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [priceRange, selectedCategories, selectedSizes, searchQuery, products]);

  const applyFilters = () => {
    let result = [...products];

    // Price filter
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter((product) =>
        product.sizes.some((size) => selectedSizes.includes(size.size))
      );
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(result);
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
  };

  const clearFilters = () => {
    setPriceRange([0, 2000]);
    setSelectedCategories(["T-shirts"]); // Reset to only T-shirts
    setSelectedSizes([]);
    setSearchQuery("");
  };

  if (!Array.isArray(filteredProducts)) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-red-500">
            Error: Products data is not in expected format. Please try again
            later.
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-red-500 text-xl">{error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <img
        src="https://www.redwolf.in/image/cache/catalog/banners/product-categories/t-shirts-india-banner-1920-1920x350.jpg?m=1710476997"
        alt="T-shirts banner"
        className="w-full object-cover"
        style={{ height: "350px" }}
      />

      <div className="flex flex-col md:flex-row flex-grow container mx-auto px-4 py-8 text-black">
        {/* Mobile filter button */}
        <button
          className="md:hidden flex items-center justify-center mb-4 bg-black text-white py-2 px-4 rounded-lg"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <FaFilter className="mr-2" />
          Filters
        </button>

        {/* Sidebar Filters - Desktop */}
        <div className="hidden md:block w-64 pr-8">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
            <h2 className="text-xl font-bold mb-6">Filters</h2>

            {/* Search */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Search</h3>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 border rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <div className="flex items-center justify-between mb-2">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
              <div className="flex space-x-4">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="mr-2"
                    />
                    <label htmlFor={`category-${category}`}>{category}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-3 py-1 rounded-full border ${
                      selectedSizes.includes(size)
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={clearFilters}
              className="text-sm text-gray-600 hover:text-black"
            >
              Clear all filters
            </button>
          </div>
        </div>

        {/* Mobile Filters Overlay */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 bg-gray-500 opacity-75"
                  onClick={() => setMobileFiltersOpen(false)}
                ></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>

                  {/* Mobile filter content */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Search</h3>
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full p-2 border rounded"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Price Range</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                    <div className="flex space-x-4">
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mobile-category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="mr-2"
                          />
                          <label htmlFor={`mobile-category-${category}`}>
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`px-3 py-1 rounded-full border ${
                            selectedSizes.includes(size)
                              ? "bg-black text-white border-black"
                              : "bg-white text-black border-gray-300"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    Apply Filters
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              T-Shirts ({filteredProducts.length})
            </h1>
            <div className="hidden md:block">
              <select className="p-2 border rounded">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <h3 className="text-lg font-medium mb-2">
                No products match your filters
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search term
              </p>
              <button
                onClick={clearFilters}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const frontImage = product.images?.find(
                  (img) => img.type === "front"
                );
                const backImage = product.images?.find(
                  (img) => img.type === "back"
                );
                const designImage = product.images?.find(
                  (img) => img.type === "design"
                );

                return (
                  <div
                    key={product._id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative group">
                      {/* Product Image with hover effect */}
                      <div className="aspect-square overflow-hidden bg-gray-100">
                        {frontImage ? (
                          <>
                            <img
                              src={frontImage.url}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                            />
                            <img
                              src={backImage?.url || frontImage.url}
                              alt={product.name}
                              className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            No Image Available
                          </div>
                        )}
                      </div>

                      {/* Wishlist button */}
                      <button
                        onClick={() => toggleWishlist(product._id)}
                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
                        aria-label="Add to wishlist"
                      >
                        {wishlist.includes(product._id) ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <FaRegHeart />
                        )}
                      </button>
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 truncate">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">₹{product.price}</span>
                        <div className="flex space-x-1">
                          {product.sizes?.slice(0, 3).map((size) => (
                            <span
                              key={size._id}
                              className="text-xs bg-gray-100 px-2 py-1 rounded"
                            >
                              {size.size}
                            </span>
                          ))}
                          {product.sizes?.length > 3 && (
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              +{product.sizes.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tshirts;
