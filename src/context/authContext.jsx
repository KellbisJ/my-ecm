import React, { createContext, useState, useEffect } from 'react';
import { useUserData } from '../hooks/useUserData';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const { user, token, userId, updateUserData, clearUserData } = useUserData();

	const signIn = (username, token, userId) => {
		updateUserData(username, token, userId);
	};
	const signOut = () => {
		clearUserData();
	};

	return <AuthContext.Provider value={{ user, token, userId, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
