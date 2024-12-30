import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const AuthRedirect = ({ children }) => {
	const { user, token, userId } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user && !token && !userId) {
			navigate('/sign-in');
		}
	}, [user, token, userId, navigate]);

	return children;
};

export { AuthRedirect };
