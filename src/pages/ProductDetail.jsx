import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProducts } from "../api/productsApi";
import Loader from "../components/Loader";

const ProductDetailsPage = ({ addToCart }) => {
	const { productID } = useParams(); // Get the product ID from the URL
	const [product, setProduct] = useState(null); // Store product data in state
	const [loading, setLoading] = useState(true); // Loading state
	const [error, setError] = useState(null); // Error state
	const navigate = useNavigate(); // Initialize the navigate function

	// Fetch the product details when the component loads
	useEffect(() => {
		const fetchDetails = async () => {
			setLoading(true); // Set loading state before fetching
			setError(null); // Clear any previous error

			try {
				const products = await fetchProducts(); // Fetch all products
				const singleProduct = products.find(
					(item) => item.id === parseInt(productID)
				); // Find the product by ID

				if (singleProduct) {
					setProduct(singleProduct); // Set the product details in state
				} else {
					setError("Product not found");
				}
			} catch (err) {
				setError("Failed to fetch product details");
			} finally {
				setLoading(false); // Update the loading state
			}
		};

		fetchDetails();
	}, [productID]); // Re-fetch the data if the productID changes

	if (loading) {
		return <Loader />; // Show loading state
	}

	if (error) {
		return <div>{error}</div>; // Show error message if there's any issue
	}

	if (!product) {
		return <div>Product not found!</div>; // Show if no product found
	}

	// Add to Cart Handler
	const handleAddToCart = () => {
		if (addToCart) {
			addToCart(product); // Call the parent function to add to cart
		}
	};

	return (
		<>
			<div className='product-details container mx-auto mt-28'>
				<button
					onClick={() => navigate(-1)} // Navigate back to the previous page
					className='mb-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700'
				>
					Go Back
				</button>
				<div className='grid lg:grid-cols-2 gap-8'>
					{/* Left: Product Image and Title */}
					<div>
						<img
							src={product.image}
							alt={product.name}
							className='w-full h-auto'
						/>
					</div>

					{/* Right: Product Details */}
					<div className='product-info'>
						<h2 className='text-3xl font-bold mt-4'>{product.name}</h2>

						<p className='text-xl font-bold text-violet-900 mt-4'>
							$ {product.price}
						</p>
						<p className='mt-1 text-sm'>Category: {product.category}</p>
						<p className='text-xl font-semibold text-gray-600 mt-2'>
							{product.description}
						</p>

						{/* Add to Cart button */}
						<button
							className='mt-6 px-6 py-2 bg-violet-900 text-white text-lg rounded hover:bg-blue-800'
							onClick={handleAddToCart} // Add to Cart action
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetailsPage;
