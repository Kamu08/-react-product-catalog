import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ cart = [] }) => {
	return (
		<header className="z-10 bg-zinc-100 w-full top-0 relative border-b border-gray-200">
			<div className="container mx-auto flex justify-between p-5 items-center">
				{/* Logo Section */}
				<Link to="/">
					<h3 className="font-black">
						FBTAdventures India <span className="text-orange-500">Pvt Ltd</span>
					</h3>
				</Link>

				{/* Navigation and Cart */}
				<div className="flex justify-center items-center gap-3">
					<Link to="/cart">
						<button className="relative">
							{/* Display item count in cart */}
							{cart.length > 0 && (
								<span className="absolute -top-2 -right-2 bg-red-700 text-white px-1  rounded-full text-xs">
									{cart.length}
								</span>
							)}
							<FaShoppingCart size={24} />
						</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
