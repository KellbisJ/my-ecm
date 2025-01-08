import React from 'react';
import { useState, useEffect } from 'react';

const useUserData = () => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [userData, setUserData] = useState(null);
	const [loginProcess, setLoginProcess] = useState(false);

	useEffect(() => {
		const storedUser = localStorage.getItem('USER_FAKE');
		const storedToken = localStorage.getItem('TOKEN_FAKE');
		const storedUserId = localStorage.getItem('USER_ID_FAKE');
		const storedUserData = localStorage.getItem('USER_DATA_FAKE');
		const storedLoginProcess = localStorage.getItem('LOGIN_PROCESS_FAKE');

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
		if (storedLoginProcess) {
			setLoginProcess(storedLoginProcess === 'true');
		}
	}, []);

	const updateUserData = (newUser, newToken, newUserId, allUserData) => {
		setUser(newUser);
		setToken(newToken);
		setUserId(newUserId);
		setUserData(allUserData);
		setLoginProcess(false);
		localStorage.setItem('USER_FAKE', JSON.stringify(newUser));
		localStorage.setItem('TOKEN_FAKE', JSON.stringify(newToken));
		localStorage.setItem('USER_ID_FAKE', JSON.stringify(newUserId));
		localStorage.setItem('USER_DATA_FAKE', JSON.stringify(allUserData));
		localStorage.setItem('LOGIN_PROCESS_FAKE', 'false');
	};

	const clearUserData = () => {
		setUser(null);
		setToken(null);
		setUserId(null);
		setUserData(null);
		setLoginProcess(false);
		localStorage.removeItem('USER_FAKE');
		localStorage.removeItem('TOKEN_FAKE');
		localStorage.removeItem('USER_ID_FAKE');
		localStorage.removeItem('USER_DATA_FAKE');
		localStorage.removeItem('LOGIN_PROCESS_FAKE');
	};

	return { user, token, userId, userData, loginProcess, setLoginProcess, updateUserData, clearUserData };
};

export { useUserData };
