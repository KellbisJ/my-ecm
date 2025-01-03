import React from 'react';
import { useState, useEffect } from 'react';

const useTempCartData = () => {
	const [cart, setCart] = useState(null);

	useEffect(() => {
		const storedCart = localStorage.getItem('CART_TEMP_FAKE');

		if (storedCart) {
			setCart(JSON.parse(storedCart));
		} else {
			setCart(null);
		}
	}, []);
};
