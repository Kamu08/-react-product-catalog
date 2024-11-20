import React from "react";
import cartimage from "../assets/emptycart.png";
import { Link } from "react-router-dom";
const CartEmpty = () => {
	return (
		<>
			<div className='container mb-10 bg-gradient-to-br from-teal-400 to-indigo-500 mx-auto mt-28 w-full h-[80vh] px-4 py-8 shadow-lg rounded-md flex justify-center items-center'>
				<div className='text-center'>
					<img src={cartimage} alt='Empty Cart' className='mx-auto mb-6 w-32' />
					<h2 className='text-3xl font-bold text-white mb-4'>Oops!</h2>
					<p className='text-gray-200 text-lg mb-6'>
						It seems your cart is empty.
					</p>
					<Link to={"/"}>
						<button className='bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50'>
							Explore Products
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default CartEmpty;
