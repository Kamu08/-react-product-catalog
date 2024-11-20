import { useState, useEffect } from "react";
import { fetchProducts } from "../api/productsApi";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";

const Home = ({ addToCart, cart }) => { // Accept addToCart and cart as props
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // Sorting state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort by price
    if (sortOrder === "asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [search, selectedCategory, sortOrder, products]);

  return (
    <div className=''>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='flex justify-between gap-2 px-10'>
            <SearchBar search={search} setSearch={setSearch} />
            <CategoryFilter
              categories={[...new Set(products.map((p) => p.category))]}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>

          <ProductList products={filteredProducts} addToCart={addToCart} /> {/* Pass addToCart to ProductList */}
        </>
      )}
    </div>
  );
};

export default Home;
