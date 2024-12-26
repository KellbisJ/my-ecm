import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [count, setCount] = useState(0);
	const [showProductOrder, setShowProductOrder] = useState(false);
	const [order, setOrder] = useState([]);

	const productInCart = 1;
	const productOrderLimit = 3;

	const findProductInCart = (product) => cart.filter((item) => item.id === product.id);

	const totalInMyOrder = (eachProductOrder) => {
		return eachProductOrder.reduce((total, order) => total + order.total, 0).toFixed(2);
	};

	const addToCart = (product) => {
		if (product) {
			const existingProduct = findProductInCart(product);

			if (existingProduct.length < productInCart) {
				setCart([...cart, product]);
				setCount(cart.length + 1);
				setShowProductOrder(true);
			} else {
				setShowProductOrder(true);
			}
		}
	};

	const removeFromCart = (productId) => {
		setCart(cart.filter((item) => item.id !== productId));
		setCount(cart.length - 1);
	};

	const updateProductOrder = (productId, increment) => {
		setCart((prevOrder) => {
			return prevOrder.map((order) => {
				if (order.id === productId) {
					const newQuantity = increment ? order.quantity + 1 : order.quantity - 1;
					const newTotal = newQuantity * order.price;
					if (newQuantity >= 1 && newQuantity <= productOrderLimit) {
						return {
							...order,
							quantity: newQuantity,
							total: newTotal,
						};
					}
				}
				return order;
			});
		});
	};

	console.log(cart);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				count,
				findProductInCart,
				addToCart,
				showProductOrder,
				setShowProductOrder,
				removeFromCart,
				updateProductOrder,
				totalInMyOrder,
				order,
				setOrder,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export { CartProvider, CartContext };
