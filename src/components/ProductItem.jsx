import React, { useState } from "react";
import ProductModal from "./ProductModal";

const ProductItem = ({ product, addToCart }) => {
	const [showModal, setShowModal] = useState(false);

	const handleAddToCart = () => {
		console.log("addToCart Function:", addToCart); // Debugging
		console.log("Product being added:", product); // Debugging
		if (addToCart) {
			addToCart(product);
			alert(`${product.name} added to cart!`);
		} else {
			console.error("addToCart function is not defined.");
		}
	};

	return (
		<div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
			{/* Product Image */}
			<img
				src={product.image}
				alt={product.name}
				className="w-full h-40 object-contain rounded"
			/>

			{/* Product Name and Price */}
			<h3 className="font-semibold mt-3 text-lg text-gray-800">{product.name}</h3>
			<p className="text-gray-700 text-sm mt-1">${product.price.toFixed(2)}</p>

			{/* Action Buttons */}
			<div className="flex justify-between items-center gap-4 mt-4">
				<button
					onClick={() => setShowModal(true)}
					className="text-sm underline hover:text-red-400"
				>
					View Details
				</button>
				<button
					onClick={handleAddToCart}
					className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600"
				>
					Add to Cart
				</button>
			</div>

			{/* Render Modal */}
			{showModal && (
				<ProductModal
					product={product}
					onClose={() => setShowModal(false)}
					addToCart={addToCart} // Pass addToCart to the modal as well
				/>
			)}
		</div>
	);
};

export default ProductItem;
