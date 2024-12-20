import react from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { NavBar } from '../../components/navBar';
import { CartProvider } from '../../components/context/CartContext';
import { ProductDetailProvider } from '../../components/context/ProductDetailContext';
import './App.css';

const App = () => {
	return (
		<CartProvider>
			<ProductDetailProvider>
				<BrowserRouter>
					<NavBar />
					<AppRoutes />
				</BrowserRouter>
			</ProductDetailProvider>
		</CartProvider>
	);
};

export { App };
