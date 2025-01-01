import React, { useEffect, useContext } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const AuthRedirect = ({ children }) => {
	const { user, token, userId, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const authRoutes = ['/sign-out', '/my-account'];

	useEffect(() => {
		if (!loading && (!user || !token || !userId)) {
			navigate('/sign-in');
		}
	}, [user, token, userId, loading, navigate]);

	if (!loading && (!user || !token || !userId)) {
		if (authRoutes.includes(location.pathname)) {
			return <Navigate to={'/sign-in'} />;
		}
		return null;
	}

	return children;
};

export { AuthRedirect };
