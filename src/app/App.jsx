import react from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { NavBar } from '../components/navBar';
import { CartProvider } from '../context/CartContext';
import { ProductDetailProvider } from '../context/ProductDetailContext';
import { ProductDetailAndOrderProvider } from '../context/productDetailAndOrderContext';
import { ProductDetailAndOrder } from '../components/productDetailAndOrder';

const App = () => {
	return (
		<CartProvider>
			<ProductDetailProvider>
				<ProductDetailAndOrderProvider>
					<BrowserRouter>
						<NavBar />
						<AppRoutes />
						<ProductDetailAndOrder />
					</BrowserRouter>
				</ProductDetailAndOrderProvider>
			</ProductDetailProvider>
		</CartProvider>
	);
};

export { App };
