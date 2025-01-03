import react from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Checkout } from '../pages/checkout';
import { MyAccount } from '../pages/myAccount';
import { MyOrder } from '../pages/myOrder';
import { MyOrders } from '../pages/myOrders';
import { NotFound } from '../pages/notFound';
import { SignIn } from '../pages/signIn';
import { SignOut } from '../pages/signOut';
import { AuthRedirect } from '../auth';

const AppRoutes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/home',
			element: <Home />,
		},
		{
			path: '/checkout',
			element: <Checkout />,
		},
		{
			path: '/sign-in',
			element: <SignIn />,
		},
		{
			path: '/my-account',
			element: (
				<AuthRedirect>
					<MyAccount />
				</AuthRedirect>
			),
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
			path: '/sign-out',
			element: (
				<AuthRedirect>
					<SignOut />
				</AuthRedirect>
			),
		},
		{
			path: '/*',
			element: <NotFound />,
		},
	]);
	return routes;
};

export { AppRoutes };
