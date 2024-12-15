import react from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
};

export { App };
