import React from 'react';
import { useState, useEffect } from 'react';

const useTempCartData = () => {
	const [cart, setCart] = useState([]);
	const [showProductOrder, setShowProductOrder] = useState(false);
	const [tempOrder, setTempOrder] = useState([]);
	const [orders, setOrders] = useState([]);
	// const [allOrdersMadeData, setAllOrdersMadeData] = useState([]);

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
		localStorage.setItem('CART_TEMP_FAKE', JSON.stringify(newCart)); // Save cart status in LocalStorage
	};

	const removeAllOrdersFromCart = () => {
		setCart([]);
		localStorage.setItem('CART_TEMP_FAKE', JSON.stringify([])); // Save cart status in LocalStorage
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
		showProductOrder,
		setShowProductOrder,
		tempOrder,
		setTempOrder,
		orders,
		setOrders,
		// allOrdersMadeData,
		// setAllOrdersMadeData,
		isOrderInCart,
		totalAllproductsInMyOrder,
		totalPriceInMyOrder,
		orderInCart,
		productOrderLimit,
		createTempProductOrder,
		addOrderToCart,
		updateOrderFromCart,
		removeOrderFromCart,
		removeAllOrdersFromCart,
	};
};

export { useTempCartData };
