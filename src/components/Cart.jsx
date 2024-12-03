import React from "react";
import { useNavigate } from "react-router-dom";
import CartEmpty from "./EmptyCart";

const Cart = ({
	cart,
	handleInc,
	handleDec,
	handleRemove,
	getTotalPrice,
	applyPromocode,
	promocode,
	setPromocode,
	invalid,
	discount,
  }) => {
  
	const navigate = useNavigate();
	const totalPriceWithDiscount = getTotalPrice() - discount + 10; // 10 for shipping

	// Render empty cart if no items
	if (!cart.length) return <CartEmpty />;

	return (
		<>
			<div className='container mx-auto mt-16 px-4 lg:px-10'>
				{/* Back Button */}
				<div className='mb-4'>
					<button
						className='flex items-center font-semibold text-indigo-600 text-sm'
						onClick={() => navigate("/")}
					>
						<svg
							className='fill-current mr-2 text-indigo-600 w-4'
							viewBox='0 0 448 512'
						>
							<path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971-4.411 40.971-16.971V296z' />
						</svg>
						Back
					</button>
				</div>

				<div className='flex flex-col lg:flex-row shadow-md my-10'>
					{/* Cart Items Section */}
					<div className='w-full lg:w-3/4 bg-white px-6 py-10'>
						{/* Cart Header */}
						<div className='flex justify-between border-b pb-8'>
							<h1 className='font-semibold text-xl'>Shopping Cart</h1>
							<h2 className='font-semibold text-xl'>{cart.length} Items</h2>
						</div>

						{/* Desktop Header */}
						<div className='hidden lg:flex mt-10 mb-5'>
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
							<h3 className='font-semibold text-center text-gray-600 text-xs uppercase'>
								Remove
							</h3>
						</div>

						{/* Cart Items */}
						{cart.map((cartItem) => (
							<div
								className='flex flex-col lg:flex-row items-center hover:bg-gray-100 -mx-4 lg:px-6 py-5'
								key={cartItem.id}
							>
								{/* Mobile View */}
								<div className='flex lg:hidden flex-col w-full border-t border-gray-300 py-4'>
									<div className='flex justify-between py-1'>
										<span className='font-semibold text-sm text-gray-600'>
											Product:
										</span>
										<img
											className='h-24 w-24 object-contain'
											src={cartItem.image}
											alt={cartItem.name}
										/>
										<span className='font-bold text-sm'>{cartItem.name}</span>
									</div>
									<div className='flex justify-between py-1'>
										<span className='font-semibold text-sm text-gray-600'>
											Quantity:
										</span>
										<div>
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
									</div>
									<div className='flex justify-between py-1'>
										<span className='font-semibold text-sm text-gray-600'>
											Price:
										</span>
										<span>Rs. {cartItem.price}</span>
									</div>
									<div className='flex justify-between py-1'>
										<span className='font-semibold text-sm text-gray-600'>
											Total:
										</span>
										<span>Rs. {cartItem.quantity * cartItem.price}</span>
									</div>
									<div className='flex justify-between py-1'>
										<span className='font-semibold text-sm text-gray-600'>
											Remove:
										</span>
										<button
											className='font-semibold hover:text-red-800 text-red-500 text-xs'
											onClick={() => handleRemove(cartItem.id)}
										>
											Remove
										</button>
									</div>
								</div>

								{/* Desktop View */}
								<div className='hidden lg:flex w-full lg:w-2/5 items-center'>
									<div className='w-20 mx-auto lg:mx-0'>
										<img
											className='h-24 object-contain'
											src={cartItem.image}
											alt={cartItem.name}
										/>
									</div>
									<div className='flex flex-col justify-between ml-0 lg:ml-4 flex-grow'>
										<span className='font-bold text-sm'>{cartItem.name}</span>
									</div>
								</div>
								<div className='hidden lg:flex justify-center w-full lg:w-1/5'>
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
								<span className='hidden lg:flex text-center w-full lg:w-1/5 font-semibold text-sm'>
									Rs. {cartItem.price}
								</span>
								<span className='hidden lg:flex text-center w-full lg:w-1/5 font-semibold text-sm'>
									Rs. {cartItem.quantity * cartItem.price}
								</span>
								<div className='hidden lg:flex text-center w-full lg:w-auto font-semibold text-sm'>
									<button
										className='font-semibold hover:text-red-800 text-red-500 text-xs'
										onClick={() => handleRemove(cartItem.id)}
									>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Order Summary */}
					<div id='summary' className='w-full lg:w-1/4 bg-gray-100 px-6 py-6'>
						<h1 className='font-semibold text-xl border-b pb-4'>
							Order Summary
						</h1>
						<div className='flex justify-between mt-6 mb-4'>
							<span className='font-semibold text-sm uppercase'>
								Items: {cart.length}
							</span>
							<span className='font-semibold text-sm'>
								Rs. {getTotalPrice()}
							</span>
						</div>
						<div>
							<label className='font-medium inline-block mb-3 text-sm uppercase'>
								Shipping
							</label>
							<select className='block p-2 text-gray-600 w-full text-sm'>
								<option>Standard shipping - Rs. 10</option>
							</select>
							<div className='py-10'>
								<label
									for='promo'
									className='font-semibold inline-block mb-3 text-sm uppercase'
								>
									Promo Code [DISCOUNT10]
								</label>
								<input
									type='text'
									id='promo'
									placeholder='Enter your code'
									className='p-2 text-sm w-full'
									value={promocode}
									onChange={(e) => setPromocode(e.target.value)}
								/>

								<span className='text-red-500 font-semibold text-[13px]'>
									{invalid}
								</span>
							</div>
							<button
								className='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'
								onClick={applyPromocode}
							>
								Apply
							</button>
						</div>
						<div className='border-t mt-6'>
							<div className='flex font-semibold justify-between py-4 text-sm uppercase'>
								<span>Total Cost</span>
								<span>Rs. {totalPriceWithDiscount}</span>
							</div>
						</div>
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
