import React, { createContext, useState, useEffect } from 'react';
import { useUserData } from '../hooks/useUserData';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const { user, token, userId, userData, updateUserData, clearUserData } = useUserData();
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
	};
	const signOut = () => {
		clearUserData();
	};

	return <AuthContext.Provider value={{ user, token, userId, signIn, signOut, loading, userData }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
