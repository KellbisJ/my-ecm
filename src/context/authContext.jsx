import React, { createContext, useState, useEffect } from 'react';
import { useUserData } from '../hooks/useUserData';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const { user, token, userId, userData, loginProcess, setLoginProcess, updateUserData, clearUserData } = useUserData();
	const [loading, setLoading] = useState(true);

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
		localStorage.setItem('LOGIN_PROCESS_FAKE', 'false');
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
