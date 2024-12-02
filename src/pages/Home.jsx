import { useState, useEffect } from "react";
import { fetchProducts } from "../api/productsApi";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import FiltersPanel from "../components/FiltersPanel";
import ProductModal from "../components/ProductModal";

const Home = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortOrder === "asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [search, selectedCategory, sortOrder, products]);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Filters Panel */}
      <div
        className={`${
          showFilters ? "block" : "hidden"
        } md:block md:w-1/6 bg-gray-50 p-4 md:p-6 border-r`}
      >
        <FiltersPanel
          categories={[...new Set(products.map((p) => p.category))]}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          showFilters={showFilters}
          toggleFilters={() => setShowFilters(false)} // Close when selecting a filter
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="mb-4">
              <SearchBar search={search} setSearch={setSearch} />
            </div>
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
              handleOpenModal={handleOpenModal}
            />
          </>
        )}
      </div>

      {/* Mobile Filter Toggle Button */}
      <button
        className="fixed top-40 right-4 md:hidden bg-indigo-500 text-white p-3 rounded-full shadow-lg "
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Home;
