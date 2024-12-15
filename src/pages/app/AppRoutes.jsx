import react from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../home';
import { MyAccount } from '../myAccount';
import { MyOrder } from '../myOrder';
import { MyOrders } from '../myOrders';
import { NotFound } from '../notFound';
import { SingIn } from '../singIn';

const AppRoutes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Home />,
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
