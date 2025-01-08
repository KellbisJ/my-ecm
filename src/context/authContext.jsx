import React, { createContext, useState, useEffect } from 'react';
import { useUserData } from '../hooks/useUserData';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const { user, token, userId, userData, updateUserData, clearUserData } = useUserData();
	const [loading, setLoading] = useState(true);
	const [loginProcess, setLoginProcess] = useState(false);

	useEffect(() => {
		if (user && token && userId) {
			setLoading(false);
		} else {
			setLoading(false);
		}
	}, [user, token, userId]);

	const signIn = (username, token, userId, allUserData) => {
		updateUserData(username, token, userId, allUserData);
		setLoginProcess(false);
	};
	const signOut = () => {
		clearUserData();
	};

	return (
		<AuthContext.Provider value={{ user, token, userId, loginProcess, setLoginProcess, signIn, signOut, loading, userData }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
