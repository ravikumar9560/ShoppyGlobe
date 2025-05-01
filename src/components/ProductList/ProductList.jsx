import React, { useState, useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";
import ProductItem from "../ProductItem/ProductItem";
import { BiSearch } from "react-icons/bi";
import Loading from "../Loading";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data, error, loading } = useFetchData(
    "https://dummyjson.com/products"
  );

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    );

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto px-4 py-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full md:w-1/2">
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full md:w-60 pl-3 pr-4 py-2 rounded-full border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          {Array.from(new Set(products.map((product) => product.category))).map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      {/* Product Grid or Loader/Error */}
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-red-500 font-semibold text-lg">
          Products Not Found
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
