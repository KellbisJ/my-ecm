import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [count, setCount] = useState(0);
	const [showProductOrder, setShowProductOrder] = useState(false);

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
	const ProductOrderExist = () => {
		cart.length === 0 ? null : setShowProductOrder(true);
	};
	// console.log(count);
	console.log(cart);
	// console.log(showProductOrder);

	return (
		<CartContext.Provider value={{ cart, count, addToCart, showProductOrder, setShowProductOrder, ProductOrderExist }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartProvider, CartContext };
