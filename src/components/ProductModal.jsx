import React from "react";

const ProductModal = ({ product, onClose, handleAddToCart }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 lg:w-1/2 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="text-gray-500 hover:text-black absolute top-3 right-3 text-lg"
        >
          &#10005;
        </button>

        {/* Product Details */}
        <div className="text-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-64 object-contain rounded mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            {product.description}
          </p>
          <p className="text-xl text-violet-900 font-semibold mb-6">
            ${product.price}
          </p>
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center">
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-violet-900 text-white px-6 py-2 rounded-md hover:bg-violet-700 transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
