import React from 'react';
import { useState, useEffect } from 'react';

const useTempCartData = () => {
	const [cart, setCart] = useState([]);
	const [showProductOrder, setShowProductOrder] = useState(false);
	const [tempOrder, setTempOrder] = useState([]);
	const [orders, setOrders] = useState([]);

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
	}; // <----

	const saveUserPurchasedOrder = (newOrder) => {
		const newOrders = [...orders, newOrder];
		setOrders(newOrders);
		localStorage.setItem('USER_PURCHASED_ORDER_FAKE', JSON.stringify(newOrders)); // Save orders status in LocalStorage
	};

	const removeUserPurchasedOrder = (orderBuyerId) => {
		const newOrders = orders.filter((item) => item.buyerId !== orderBuyerId);
		setCart(newOrders);
		localStorage.setItem('CART_TEMP_FAKE', JSON.stringify(newOrders)); // Save cart status in LocalStorage
	};

	useEffect(() => {
		// cart localStorage data
		const storedCart = localStorage.getItem('CART_TEMP_FAKE'); // Getting cart status from LocalStorage
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, []);

	useEffect(() => {
		// orders localStorage data
		const storedOrders = localStorage.getItem('USER_PURCHASED_ORDER_FAKE'); // Getting orders status from LocalStorage
		if (storedOrders) {
			setOrders(JSON.parse(storedOrders));
		}
	}, []);

	return {
		cart,
		setCart,
		showProductOrder,
		setShowProductOrder,
		tempOrder,
		setTempOrder,
		orders,
		setOrders,
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
		saveUserPurchasedOrder,
		removeUserPurchasedOrder,
	};
};

export { useTempCartData };
