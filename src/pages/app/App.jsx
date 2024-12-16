import react from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { NavBar } from '../../components/navBar';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<AppRoutes />
			<NavBar />
		</BrowserRouter>
	);
};

export { App };
