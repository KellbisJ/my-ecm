import React, { createContext, useState, useEffect } from 'react';
import { useUserData } from '../hooks/useUserData';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const { user, token, updateUserData, clearUserData } = useUserData();

	const signIn = (token, username) => {
		updateUserData(username, token);
	};
	const signOut = () => {
		clearUserData();
	};

	return <AuthContext.Provider value={{ user, token, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
