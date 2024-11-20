import React from "react";
import { useNavigate } from "react-router-dom";
import CartEmpty from "./EmptyCart";
const Cart = ({
	cart = [],
	handleInc = () => {},
	getTotalPrice = () => 0,
	handleRemove = () => {},
	handleDec = () => {},
}) => {
	const navigate = useNavigate();
	console.log(cart);
	// Render empty cart if no items
	if (!cart.length) return <CartEmpty />;

	return (
		<>
			<div className='container mx-auto mt-28'>
				<div className='flex shadow-md my-10'>
					{/* Cart Items Section */}
					<div className='w-3/4 bg-white px-10 py-10'>
						{/* Continue Shopping Button */}
						<p
							className='flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer'
							onClick={() => navigate("/")}
						>
							<svg
								className='fill-current mr-2 text-indigo-600 w-4'
								viewBox='0 0 448 512'
							>
								<path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
							</svg>
							Continue Shopping
						</p>
						{/* Cart Header */}
						<div className='flex justify-between border-b pb-8'>
							<h1 className='font-semibold text-2xl'>Shopping Cart</h1>
							<h2 className='font-semibold text-2xl'>{cart.length} Items</h2>
						</div>

						{/* Cart Items List */}
						<div className='flex mt-10 mb-5'>
							<h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
								Product Details
							</h3>
							<h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>
								Quantity
							</h3>
							<h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>
								Price
							</h3>
							<h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>
								Total
							</h3>
						</div>

						{/* Map through cart items */}
						{cart.map((cartItem) => (
							<div
								className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'
								key={cartItem.id}
							>
								{/* Product Info */}
								<div className='flex w-2/5'>
									<div className='w-20'>
										<img
											className='h-24 object-cover'
											src={cartItem.image}
											alt={cartItem.name}
										/>
									</div>
									<div className='flex flex-col justify-between ml-4 flex-grow'>
										<span className='font-bold text-sm'>{cartItem.name}</span>
										<span className='text-red-500 text-xs'>
											{cartItem.brand}
										</span>
										<button
											className='font-semibold hover:text-red-500 text-gray-500 text-xs'
											onClick={() => handleRemove(cartItem.id)}
										>
											Remove
										</button>
									</div>
								</div>

								{/* Quantity Controls */}
								<div className='flex justify-center w-1/5'>
									<button
										className='border px-2 py-1'
										onClick={() => handleDec(cartItem.id)}
									>
										-
									</button>
									<span className='px-2'>{cartItem.quantity}</span>
									<button
										className='border px-2 py-1'
										onClick={() => handleInc(cartItem.id)}
									>
										+
									</button>
								</div>

								{/* Price and Total */}
								<span className='text-center w-1/5 font-semibold text-sm'>
									Rs. {cartItem.price}
								</span>
								<span className='text-center w-1/5 font-semibold text-sm'>
									Rs. {cartItem.quantity * cartItem.price}
								</span>
							</div>
						))}
					</div>

					{/* Order Summary */}
					<div id='summary' className='w-1/4 bg-gray-100 px-8 py-10'>
						<h1 className='font-semibold text-2xl border-b pb-8'>
							Order Summary
						</h1>

						{/* Items and Total Cost */}
						<div className='flex justify-between mt-10 mb-5'>
							<span className='font-semibold text-sm uppercase'>
								Items {cart.length}
							</span>
							<span className='font-semibold text-sm'>
								Rs. {getTotalPrice()}
							</span>
						</div>

						{/* Shipping */}
						<div>
							<label className='font-medium inline-block mb-3 text-sm uppercase'>
								Shipping
							</label>
							<select className='block p-2 text-gray-600 w-full text-sm'>
								<option>Standard shipping - Rs. 10</option>
							</select>
						</div>

						{/* Total Cost */}
						<div className='border-t mt-8'>
							<div className='flex font-semibold justify-between py-6 text-sm uppercase'>
								<span>Total Cost</span>
								<span>Rs. {getTotalPrice() + 10}</span>
							</div>
						</div>

						{/* Checkout Button */}
						<button className='bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded w-full uppercase font-semibold text-sm'>
							Checkout
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
