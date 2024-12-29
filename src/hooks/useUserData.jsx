import { useState, useEffect } from 'react';

const useUserData = () => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		const storedToken = localStorage.getItem('token');

		if (storedUser && storedToken) {
			setUser(JSON.parse(storedUser));
			setToken(JSON.parse(storedToken));
		} else {
			setUser(null);
			setToken(null);
		}
	}, []);

	const updateUserData = (newUser, newToken) => {
		setUser(newUser);
		setToken(newToken);
		localStorage.setItem('user', JSON.stringify(newUser));
		localStorage.setItem('token', JSON.stringify(newToken));
	};

	const clearUserData = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem('user');
		localStorage.removeItem('token');
	};

	return { user, token, updateUserData, clearUserData };
};

export { useUserData };
