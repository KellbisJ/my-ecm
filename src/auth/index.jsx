import React, { useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { useRouteValidator } from '../hooks/useRouteValidator';

const AuthRedirect = ({ children }) => {
	const { user, token, userId, loading } = useContext(AuthContext);
	const navigate = useNavigate();

	const { validateToShowAuthRoutes } = useRouteValidator();

	useEffect(() => {
		if (!loading && (!user || !token || !userId)) {
			navigate('/sign-in');
		}
	}, [user, token, userId, loading, navigate]);

	if (!loading && (!user || !token || !userId)) {
		if (validateToShowAuthRoutes) {
			return <Navigate to={'/sign-in'} />;
		}
	}

	return children;
};

export { AuthRedirect };
