import react from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Checkout } from '../pages/checkout';
import { MyAccount } from '../pages/myAccount';
import { MyOrders } from '../pages/myOrders';
import { MyOrder } from '../pages/myOrder';
import { MyOrderSuccess } from '../pages/myOrderSuccess';
import { NotFound } from '../pages/notFound';
import { SignIn } from '../pages/signIn';
import { SignOut } from '../pages/signOut';
import { AuthRedirect } from '../auth';
import { ErrorPage } from '../components/errorPage';

const AppRoutes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Home />,
			errorElement: <ErrorPage errMsg="Failed to load home page. Please try again later." />,
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
			path: '/my-orders',
			element: (
				<AuthRedirect>
					<MyOrders />
				</AuthRedirect>
			),
		},
		{
			path: '/my-order/:userName/:orderIndex',
			element: (
				<AuthRedirect>
					<MyOrder />
				</AuthRedirect>
			),
		},

		{
			path: '/my-order/success',
			element: (
				<AuthRedirect>
					<MyOrderSuccess />
				</AuthRedirect>
			),
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
