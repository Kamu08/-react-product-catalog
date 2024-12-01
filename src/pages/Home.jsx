import { useState, useEffect } from "react";
import { fetchProducts } from "../api/productsApi";
import Loader from "../components/Loader";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import FiltersPanel from "../components/FiltersPanel";
import ProductModal from "../components/ProductModal";

const Home = ({ addToCart, cart }) => {
	// State management
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [search, setSearch] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [sortOrder, setSortOrder] = useState(""); // Sorting state
	const [loading, setLoading] = useState(true);
	const [showFilters, setShowFilters] = useState(false); // For mobile filter toggle
	const [selectedProduct, setSelectedProduct] = useState(null); // Product modal state
	// Fetch products on component mount
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

	// Update filtered products based on search, category, and sorting
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
	
  // Open product modal
	const handleOpenModal = (product) => {
		setSelectedProduct(product);
	};

	// Close product modal
	const handleCloseModal = () => {
		setSelectedProduct(null);
	};
	return (
		<div className='flex flex-col md:flex-row'>
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
				/>
			</div>

			{/* Main Content */}
			<div className='flex-1 p-4 md:p-6'>
				{loading ? (
					<Loader />
				) : (
					<>
						{/* Search Bar */}
						<div className='mb-4'>
							<SearchBar search={search} setSearch={setSearch} />
						</div>

						{/* Product List */}
						<ProductList products={filteredProducts} addToCart={addToCart} handleOpenModal={handleOpenModal} />
					</>
				)}
			</div>

			{/* Mobile Filter Toggle Button */}
			<button
				className='fixed top-4 left-4 md:hidden bg-indigo-500 text-white p-3 rounded-full shadow-lg'
				onClick={() => setShowFilters(!showFilters)}
			>
				{showFilters ? "Hide Filters" : "Show Filters"}
			</button>
      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
		</div>
	);
};

export default Home;
