import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import NavBar from "./components/Navbar";

function App() {
	// Cart state
	const [cart, setCart] = useState([]);

	// Add to Cart Function
	const addToCart = (product) => {
		console.log("Adding to cart:", product); // Debugging log
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				console.log("Product exists in cart. Incrementing quantity."); // Debugging log
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				console.log("Product does not exist in cart. Adding new item."); // Debugging log
				return [...prevCart, { ...product, quantity: 1 }];
			}
		});
		console.log("Updated cart:", cart); // Debugging log (may show stale state due to async nature of state updates)
	};
	

	// Remove from Cart Function
	const removeFromCart = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	// Increment Quantity Function
	const incrementQuantity = (id) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	// Decrement Quantity Function
	const decrementQuantity = (id) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	// Get Total Price Function
	const getTotalPrice = () => {
		return cart.reduce((total, item) => total + item.quantity * item.price, 0);
	};

	return (
		<Router>
			<NavBar cart={cart} />
			<Routes>
				<Route path='/' element={<Home addToCart={addToCart} />} />
				<Route
					path='/cart'
					element={
						<Cart
							cart={cart}
							handleRemove={removeFromCart}
							handleInc={incrementQuantity}
							handleDec={decrementQuantity}
							getTotalPrice={getTotalPrice}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
