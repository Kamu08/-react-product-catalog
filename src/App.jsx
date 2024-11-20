import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./components/Cart";
import NavBar from "./components/Navbar";

function App() {
	// Cart state
	const [cart, setCart] = useState([]);

	// Add to Cart Function
	const addToCart = (product) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevCart, { ...product, quantity: 1 }];
			}
		});
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
      <NavBar  cart={cart}/>
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
				<Route
					path='/product/:productID'
					element={<ProductDetail addToCart={addToCart} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
