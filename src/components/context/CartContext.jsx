import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [count, setCount] = useState(0);

	const maximumPerProduct = 3;

	const findProductInCart = (product) => cart.filter((item) => item.id === product.id);

	const addToCart = (product) => {
		if (product) {
			const existingProduct = findProductInCart(product);

			if (existingProduct.length < maximumPerProduct) {
				setCart([...cart, product]);
				setCount(cart.length + 1);
			} else {
				// console.log('You can only add 3 items of the same product');
				return null;
			}
			// console.log(existingProduct);
		}
	};
	// console.log(count);
	// console.log(cart);

	return <CartContext.Provider value={{ cart, count, addToCart }}>{children}</CartContext.Provider>;
};

export { CartProvider, CartContext };
