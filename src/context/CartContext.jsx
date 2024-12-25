import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [count, setCount] = useState(0);
	const [productOrder, setProductOrder] = useState([]);
	const [showProductOrder, setShowProductOrder] = useState(false);
	const [order, setOrder] = useState([]);

	const productInCart = 1;
	const productOrderLimit = 3;

	const findProductInCart = (product) => cart.filter((item) => item.id === product.id);
	const totalInMyOrder = (eachProductOrder) => {
		return eachProductOrder.reduce((total, order) => total + order.total, 0).toFixed(2);
	};

	const addToCart = (product, newProductOrder) => {
		if (product) {
			const existingProduct = findProductInCart(product);

			if (existingProduct.length < productInCart) {
				setCart([...cart, product]);
				setProductOrder([...productOrder, newProductOrder]);
				setCount(cart.length + 1);
				setShowProductOrder(true);
			} else {
				setShowProductOrder(true);
			}
		}
	};

	const removeFromCart = (productId) => {
		setCart(cart.filter((item) => item.id !== productId));
		setProductOrder(productOrder.filter((order) => order.productId !== productId));
		setCount(cart.length - 1);
	};
	const updateProductOrder = (productId, increment) => {
		setProductOrder((prevOrder) => {
			return prevOrder.map((order) => {
				if (order.productId === productId) {
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
	console.log(productOrder);

	return (
		<CartContext.Provider
			value={{
				cart,
				count,
				findProductInCart,
				addToCart,
				showProductOrder,
				setShowProductOrder,
				productOrder,
				setProductOrder,
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
