import React, { useState, useEffect, useContext } from 'react';
import { getUsers } from '../../api/getUsers';
import { Layout } from '../../components/layout';
import { AuthContext } from '../../context/authContext';
import { PostUserLogin } from '../../api/postUserLogin';
import { useNavigate } from 'react-router-dom';

function SignIn() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [userSelected, setUserSelected] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const navigate = useNavigate();

	const { signIn } = useContext(AuthContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getUsers();
				if (data) {
					setUsers(data);
					setLoading(false);
				}
			} catch (error) {
				console.error('Error fetching users:', error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (!userSelected && users.length > 0) {
			const randomUser = users[Math.floor(Math.random() * users.length)];
			setSelectedUser(randomUser);
			setUserSelected(true);
		}
	}, [users, userSelected]);

	const handleLogin = async () => {
		try {
			setIsButtonDisabled(true);
			const response = await PostUserLogin(selectedUser);
			if (response) {
				const { token } = response;
				signIn(token, selectedUser.username);
				navigate('/home');
			}
		} catch (error) {
			console.error(error);
			setIsButtonDisabled(false);
		}
	};

	return (
		<Layout>
			{loading ? (
				<div>Loading... skeleton*</div>
			) : !selectedUser ? (
				<div>Loading... skeleton*</div>
			) : (
				<div className="max-w-md mx-auto p-4 border border-gray-300 rounded-md shadow-md">
					<h2 className="text-lg font-bold mb-4">Sign In</h2>
					<form>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
								Username
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="username"
								type="text"
								value={selectedUser.username}
								readOnly
							/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
								Password
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								value={selectedUser.password}
								readOnly
							/>
						</div>
						<div className="mb-4">
							<button
								className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition"
								onClick={handleLogin}
								type="button"
								disabled={isButtonDisabled}>
								SignIn
							</button>
						</div>
					</form>
				</div>
			)}
		</Layout>
	);
}

export { SignIn };
