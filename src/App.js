import React, { useState, useEffect } from "react";
import "./App.css";
import { commerce } from "./lib/commerce";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Products from "./components/Products/Products";
import Navbar from "./components/NavBar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import Hero from "./components/Hero";
import BrText from "./components/BrText";
import Email from "./components/Email";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function App() {
	const [products, setProducts] = useState([]);
	const [productsNew, setProductsNew] = useState([]);
	const [productsWomen, setProductsWomen] = useState([]);
	const [productsMan, setProductsMan] = useState([]);
	const [cart, setCart] = useState({});
	const [order, setOrder] = useState({});
	const [errorMessage, setErrorMessage] = useState("");

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();

		setProducts(data);
	};

	const fetchProductsNew = async () => {
		const { data } = await commerce.products.list({
			category_slug: "NEW",
		});
		setProductsNew(data);
	};

	const fetchProductsWomen = async () => {
		const { data } = await commerce.products.list({
			category_slug: "Women",
		});
		setProductsWomen(data);
	};

	const fetchProductsMan = async () => {
		const { data } = await commerce.products.list({
			category_slug: "man",
		});
		setProductsMan(data);
	};

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	};

	const handleAddToCart = async (productId, quantity) => {
		const response = await commerce.cart.add(productId, quantity);

		setCart(response.cart);
	};

	const handleUpdateCartQty = async (productId, quantity) => {
		const response = await commerce.cart.update(productId, { quantity });

		setCart(response.cart);
	};

	const handleRemoveFromCart = async productId => {
		const response = await commerce.cart.remove(productId);

		setCart(response.cart);
	};

	const handleEmptyCart = async () => {
		const response = await commerce.cart.empty();

		setCart(response.cart);
	};

	const refeshCart = async () => {
		const newCart = await commerce.cart.refresh();

		setCart(newCart);
	};

	const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
		try {
			const incomingOrder = await commerce.checkout.capture(
				checkoutTokenId,
				newOrder
			);

			setOrder(incomingOrder);
			refeshCart();
		} catch (error) {
			setErrorMessage(error.data.error.message);
		}
	};

	useEffect(() => {
		fetchProducts();
		fetchProductsNew();
		fetchProductsWomen();
		fetchProductsMan();
		fetchCart();
	}, []);

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div>
				<Navbar totalItems={cart.total_items} />
				<Switch>
					<Route exact path="/">
						<Hero />
						<div id="newin">
							<BrText text="New In" />
							<Products
								products={productsNew}
								onAddToCart={handleAddToCart}
							/>
						</div>
						<div id="man">
							<BrText text="Man" />
							<Products
								products={productsMan}
								onAddToCart={handleAddToCart}
							/>
						</div>
						<div id="woman">
							<BrText text="Woman" />
							<Products
								products={productsWomen}
								onAddToCart={handleAddToCart}
							/>
						</div>

						<BrText text="All" />
						<Products
							products={products}
							onAddToCart={handleAddToCart}
						/>
						<Email />
						<Brands />
					</Route>
					<Route exact path="/cart">
						<Cart
							cart={cart}
							handleUpdateCartQty={handleUpdateCartQty}
							handleRemoveFromCart={handleRemoveFromCart}
							handleEmptyCart={handleEmptyCart}
						/>
					</Route>
					<Route exact path="/checkout">
						<Checkout
							cart={cart}
							order={order}
							onCaptureCheckout={handleCaptureCheckout}
							error={errorMessage}
						/>
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
