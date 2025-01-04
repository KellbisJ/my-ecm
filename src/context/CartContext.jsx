import React, { createContext, useState } from 'react';
import { useTempCartData } from '../hooks/useTempCartData';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const {
		cart,
		setCart,
		tempOrder,
		setTempOrder,
		orders,
		setOrders,
		showProductOrder,
		setShowProductOrder,
		createTempProductOrder,
		updateOrderFromCart,
		removeOrderFromCart,
		addOrderToCart,
		isOrderInCart,
		totalPriceInMyOrder,
		totalAllproductsInMyOrder,
		orderInCart,
		productOrderLimit,
		removeAllOrdersFromCart,
	} = useTempCartData();

	// console.log(cart);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				tempOrder,
				setTempOrder,
				orders,
				setOrders,
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
				removeAllOrdersFromCart,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export { CartProvider, CartContext };
