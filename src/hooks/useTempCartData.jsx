import React from 'react';
import { useState, useEffect } from 'react';

const useTempCartData = () => {
	const [cart, setCart] = useState([]);
	const [count, setCount] = useState(0);
	const [showProductOrder, setShowProductOrder] = useState(false);
	const [order, setOrder] = useState([]);

	// ProductOrder in cart limitations and validations ---->

	const isOrderInCart = (product) => cart.filter((item) => item.id === product.id);

	const totalAllproductsInMyOrder = (eachProductOrder) => {
		return eachProductOrder.reduce((quantity, order) => quantity + order.quantity, 0);
	};

	const totalPriceInMyOrder = (eachProductOrder) => {
		return eachProductOrder.reduce((total, order) => total + order.total, 0).toFixed(2);
	};

	const orderInCart = 1;
	const productOrderLimit = 3; // <----

	// ProductOrder in cart, logic to create, update, and delete them. ---->

	const createTempProductOrder = (product) => {
		const order = {
			...product,
			quantity: 1,
			total: product.price,
		};
		return addOrderToCart(order);
	};

	const addOrderToCart = (order) => {
		if (order) {
			const existingOrder = isOrderInCart(order);

			if (existingOrder.length < orderInCart) {
				setCart([...cart, order]);
				setCount(cart.length + 1);
				setShowProductOrder(true);
				localStorage.setItem('CART_TEMP_FAKE', JSON.stringify([...cart, order])); // Save cart status in LocalStorage
			} else {
				setShowProductOrder(true);
			}
		}
	};

	const updateOrderFromCart = (orderId, increment) => {
		const newCart = cart.map((order) => {
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
		setCart(newCart);
		localStorage.setItem('CART_TEMP_FAKE', JSON.stringify(newCart)); // Save cart status in LocalStorage
	};

	const removeOrderFromCart = (orderId) => {
		const newCart = cart.filter((item) => item.id !== orderId);
		setCart(newCart);
		setCount(newCart.length);
		localStorage.setItem('CART_TEMP_FAKE', JSON.stringify(newCart));
	};

	useEffect(() => {
		const storedCart = localStorage.getItem('CART_TEMP_FAKE'); // Getting cart status from LocalStorage
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		} else {
			setCart([]);
		}
	}, []); // <----

	return {
		cart,
		setCart,
		count,
		setCount,
		showProductOrder,
		setShowProductOrder,
		order,
		setOrder,
		isOrderInCart,
		totalAllproductsInMyOrder,
		totalPriceInMyOrder,
		orderInCart,
		productOrderLimit,
		createTempProductOrder,
		addOrderToCart,
		updateOrderFromCart,
		removeOrderFromCart,
	};
};

export { useTempCartData };
