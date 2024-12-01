import React from "react";
import cartimage from "../assets/emptycart.png";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="container mb-10 bg-gradient-to-br from-slate-200 to-slate-600 mx-auto mt-16 w-full h-[80vh] px-4 py-8 shadow-lg rounded-md flex justify-center items-center">
      <div className="text-center">
        {/* Cart Image */}
        <img
          src={cartimage}
          alt="Empty Cart"
          className="mx-auto mb-6 w-40 md:w-48 lg:w-56"
        />

        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h2>

        {/* Subtitle */}
        <p className="text-gray-200 text-lg md:text-xl mb-6">
          Looks like you haven’t added anything to your cart yet.
        </p>

        {/* Explore Products Button */}
        <Link to={"/"}>
          <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
