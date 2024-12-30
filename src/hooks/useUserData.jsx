import { useState, useEffect } from 'react';

const useUserData = () => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		const storedToken = localStorage.getItem('token');
		const storedUserId = localStorage.getItem('userId');

		if (storedUser && storedToken && storedUserId) {
			setUser(JSON.parse(storedUser));
			setToken(JSON.parse(storedToken));
			setUserId(JSON.parse(storedUserId));
		} else {
			setUser(null);
			setToken(null);
			setUserId(null);
		}
	}, []);

	const updateUserData = (newUser, newToken, newUserId) => {
		setUser(newUser);
		setToken(newToken);
		setUserId(newUserId);
		localStorage.setItem('user', JSON.stringify(newUser));
		localStorage.setItem('token', JSON.stringify(newToken));
		localStorage.setItem('userId', JSON.stringify(newUserId));
	};

	const clearUserData = () => {
		setUser(null);
		setToken(null);
		setUserId(null);
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
	};

	return { user, token, userId, updateUserData, clearUserData };
};

export { useUserData };
