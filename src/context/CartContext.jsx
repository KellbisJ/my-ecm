import React, { createContext, useState } from 'react';
import { useTempCartData } from '../hooks/useTempCartData';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const {
		cart,
		setCart,
		count,
		setCount,
		showProductOrder,
		setShowProductOrder,
		createTempProductOrder,
		updateOrderFromCart,
		removeOrderFromCart,
		addOrderToCart,
		order,
		setOrder,
		isOrderInCart,
		totalPriceInMyOrder,
		totalAllproductsInMyOrder,
		orderInCart,
		productOrderLimit,
	} = useTempCartData();

	console.log(cart);
	// console.log(order);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				count,
				setCount,
				createTempProductOrder,
				addOrderToCart,
				updateOrderFromCart,
				removeOrderFromCart,
				isOrderInCart,
				orderInCart,
				productOrderLimit,
				showProductOrder,
				setShowProductOrder,
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
