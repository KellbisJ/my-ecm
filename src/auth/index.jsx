import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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

export { AuthRedirect };
