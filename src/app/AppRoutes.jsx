import react from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Checkout } from '../pages/checkout';
import { MyAccount } from '../pages/myAccount';
import { MyOrder } from '../pages/myOrder';
import { MyOrders } from '../pages/myOrders';
import { NotFound } from '../pages/notFound';
import { SingIn } from '../pages/singIn';

const AppRoutes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/checkout',
			element: <Checkout />,
		},
		{
			path: '/my-account',
			element: <MyAccount />,
		},
		{
			path: '/my-order',
			element: <MyOrder />,
		},
		{
			path: '/my-orders',
			element: <MyOrders />,
		},
		{
			path: '/sing-in',
			element: <SingIn />,
		},
		{
			path: '/*',
			element: <NotFound />,
		},
	]);
	return routes;
};

export { AppRoutes };
