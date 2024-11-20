import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ cart = [] }) => {
	return (
		<header className='z-10 bg-zinc-100 w-full top-0 relative border-b border-gray-200'>
			<div className='container mx-auto flex justify-between p-5 items-center'>
				{/* Logo Section */}
				<Link to='/'>
					<h3 className='font-black'>
						MERA<span className='text-orange-500'>KEN</span>
					</h3>
				</Link>

				{/* Navigation and Cart */}
				<div className='flex justify-center items-center gap-3'>
					<Link to='/cart'>
						<button className='relative'>
							{cart.length > 0 && (
								<span className='absolute top-[-5px] bg-red-700 right-0 text-white px-1 rounded-full text-xs'>
									{cart.length}
								</span>
							)}
							<FaShoppingCart size={20} />
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
