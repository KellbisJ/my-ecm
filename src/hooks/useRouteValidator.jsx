import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useRouteValidator = () => {
	const location = useLocation();

	const routesToRenderProductDetailAndOrder = ['/', '/home'];
	const authRoutes = ['/sign-out', '/my-account'];

	const validateToShowProductDetailAndOrder = routesToRenderProductDetailAndOrder.includes(location.pathname);

	const validateToShowAuthRoutes = authRoutes.includes(location.pathname);

	return {
		validateToShowProductDetailAndOrder,
		validateToShowAuthRoutes,
	};
};

export { useRouteValidator };
