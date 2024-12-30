import React, { useState, useEffect, useContext } from 'react';
import { getUsers } from '../../api/getUsers';
import { Layout } from '../../components/layout';
import { AuthContext } from '../../context/authContext';
import { PostUserLogin } from '../../api/postUserLogin';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

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

	const handleSelectUser = (event) => {
		const selectedUserId = event.target.value;
		const selectedUser = users.find((user) => user.id === parseInt(selectedUserId));
		setSelectedUser(selectedUser);
	};

	const handleLogin = async () => {
		try {
			setIsButtonDisabled(true);
			const response = await PostUserLogin(selectedUser);
			if (response) {
				const { token } = response;
				signIn(selectedUser.username, token, selectedUser.id);
				navigate('/home');
			}
		} catch (error) {
			console.error(error);
			setIsButtonDisabled(false);
		}
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	console.log(selectedUser);

	return (
		<Layout>
			{loading ? (
				<div>Loading... skeleton*</div>
			) : !selectedUser ? (
				<div>
					<h2 className="text-lg font-bold mb-4">Select a user to sign-in</h2>
					<select
						className="block w-full pl-10 pr-10 py-3 text-gray-700 border border-gray-300 rounded-md"
						value={selectedUser?.id}
						onChange={handleSelectUser}>
						<option value="">Select a user</option>
						{users.map((user) => (
							<option key={user.id} value={user.id}>
								{user.username}
							</option>
						))}
					</select>
				</div>
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
							<div className="relative">
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
									id="password"
									type={showPassword ? 'text' : 'password'}
									value={selectedUser.password}
									readOnly
								/>
								<span className="absolute top-1 right-3">
									<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="w-4 cursor-pointer" onClick={toggleShowPassword} />
								</span>
							</div>
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
