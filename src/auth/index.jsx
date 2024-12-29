import React, { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const AuthRedirect = ({ children }) => {
	const { user, token } = useContext(AuthContext);

	useEffect(() => {
		if (!user && !token) {
			<Navigate to="/sign-in" />;
		}
	}, [user, token]);

	return children;
};

export { AuthRedirect };
