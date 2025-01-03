import React from 'react';
import { useState, useEffect } from 'react';

const useUserData = () => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem('USER_FAKE');
		const storedToken = localStorage.getItem('TOKEN_FAKE');
		const storedUserId = localStorage.getItem('USER_ID_FAKE');
		const storedUserData = localStorage.getItem('USER_DATA_FAKE');

		if (storedUser && storedToken && storedUserId) {
			setUser(JSON.parse(storedUser));
			setToken(JSON.parse(storedToken));
			setUserId(JSON.parse(storedUserId));
			setUserData(JSON.parse(storedUserData));
		} else {
			setUser(null);
			setToken(null);
			setUserId(null);
			setUserData(null);
		}
	}, []);

	const updateUserData = (newUser, newToken, newUserId, allUserData) => {
		setUser(newUser);
		setToken(newToken);
		setUserId(newUserId);
		setUserData(allUserData);
		localStorage.setItem('USER_FAKE', JSON.stringify(newUser));
		localStorage.setItem('TOKEN_FAKE', JSON.stringify(newToken));
		localStorage.setItem('USER_ID_FAKE', JSON.stringify(newUserId));
		localStorage.setItem('USER_DATA_FAKE', JSON.stringify(allUserData));
	};

	const clearUserData = () => {
		setUser(null);
		setToken(null);
		setUserId(null);
		setUserData(null);
		localStorage.removeItem('USER_FAKE');
		localStorage.removeItem('TOKEN_FAKE');
		localStorage.removeItem('USER_ID_FAKE');
		localStorage.removeItem('USER_DATA_FAKE');
	};

	return { user, token, userId, userData, updateUserData, clearUserData };
};

export { useUserData };
