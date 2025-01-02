import React from 'react';
import { useLocation } from 'react-router-dom';

const useRouteValidator = () => {
	const location = useLocation();
	const routesToRenderProductDetailAndOrder = ['/', '/home'];

	const showRenderProductDetailAndOrder = routesToRenderProductDetailAndOrder.includes(location.pathname);

	return showRenderProductDetailAndOrder;
};

export { useRouteValidator };
