import React, { useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const AuthRedirect = ({ children }) => {
	const { user, token, userId, loading } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!loading && (!user || !token || !userId)) {
			navigate('/sign-in');
		}
	}, [user, token, userId, loading, navigate]);

	return children;
};

const ProtectedRoute = ({ children }) => {
	const { user, token, userId } = useContext(AuthContext);

	if (!user || !token || !userId) {
		return <Navigate to="/home" />;
	}

	return children;
};

export { AuthRedirect, ProtectedRoute };
