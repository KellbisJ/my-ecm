import { useState, useEffect } from 'react';

const useUserData = () => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem('user__fake');
		const storedToken = localStorage.getItem('token__fake');
		const storedUserId = localStorage.getItem('userId__fake');
		const storedUserData = localStorage.getItem('userData__fake');

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
		localStorage.setItem('user__fake', JSON.stringify(newUser));
		localStorage.setItem('token__fake', JSON.stringify(newToken));
		localStorage.setItem('userId__fake', JSON.stringify(newUserId));
		localStorage.setItem('userData__fake', JSON.stringify(allUserData));
	};

	const clearUserData = () => {
		setUser(null);
		setToken(null);
		setUserId(null);
		setUserData(null);
		localStorage.removeItem('user__fake');
		localStorage.removeItem('token__fake');
		localStorage.removeItem('userId__fake');
		localStorage.removeItem('userData__fake');
	};

	return { user, token, userId, userData, updateUserData, clearUserData };
};

export { useUserData };
