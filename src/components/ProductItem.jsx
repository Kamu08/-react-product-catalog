import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const ProductItem = ({ product, addToCart }) => {
  // Notify function for toast
  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function
  };

  return (
    <div className="border p-4 rounded shadow-lg hover:shadow-2xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain rounded"
      />
      <h3 className="font-bold mt-2">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <div className="flex justify-between gap-4 mt-2">
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>

        {/* View Details Button */}
        <Link
          to={`/product/${product.id}`}
          className="text-indigo-600 hover:text-indigo-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
