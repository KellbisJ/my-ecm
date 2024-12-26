import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [count, setCount] = useState(0);
	const [showProductOrder, setShowProductOrder] = useState(false);
	const [order, setOrder] = useState([]);

	const orderInCart = 1;
	const productOrderLimit = 3;

	const isOrderInCart = (product) => cart.filter((item) => item.id === product.id);

	const totalPriceInMyOrder = (eachProductOrder) => {
		return eachProductOrder.reduce((total, order) => total + order.total, 0).toFixed(2);
	};

	const totalAllproductsInMyOrder = (eachProductOrder) => {
		return eachProductOrder.reduce((quantity, order) => quantity + order.quantity, 0);
	};

	const addOrderToCart = (order) => {
		if (order) {
			const existingOrder = isOrderInCart(order);

			if (existingOrder.length < orderInCart) {
				setCart([...cart, order]);
				setCount(cart.length + 1);
				setShowProductOrder(true);
			} else {
				setShowProductOrder(true);
			}
		}
	};

	const removeOrderFromCart = (orderId) => {
		setCart(cart.filter((item) => item.id !== orderId));
		setCount(cart.length - 1);
	};

	const updateOrderFromCart = (orderId, increment) => {
		setCart((prevOrder) => {
			return prevOrder.map((order) => {
				if (order.id === orderId) {
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
	console.log(order);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				count,
				setCount,
				isOrderInCart,
				addOrderToCart,
				showProductOrder,
				setShowProductOrder,
				removeOrderFromCart,
				updateOrderFromCart,
				totalPriceInMyOrder,
				totalAllproductsInMyOrder,
				order,
				setOrder,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export { CartProvider, CartContext };
