import React, { useState, useEffect, useContext } from 'react';
import { getUsers } from '../../api/getUsers';
import { Layout } from '../../components/layout';
import { AuthContext } from '../../context/authContext';
import { PostUserLogin } from '../../api/postUserLogin';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CircleLoader } from '../../components/circleLoader';

function SignIn() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();

	const { signIn, user, token, userId, loginProcess, setLoginProcess } = useContext(AuthContext);

	useEffect(() => {
		if (!loginProcess) {
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
		}
	}, [loginProcess]);

	const handleSelectUser = (event) => {
		const selectedUserId = event.target.value;
		const selectedUser = users.find((user) => user.id === parseInt(selectedUserId));
		setSelectedUser(selectedUser);
	};

	const handleLogin = async () => {
		try {
			setIsButtonDisabled(true);
			setLoginProcess(true);
			const response = await PostUserLogin(selectedUser);
			if (response) {
				const { token } = response;
				signIn(selectedUser.username, token, selectedUser.id, selectedUser);
				navigate('/home');
			}
		} catch (error) {
			console.error(error);
			setIsButtonDisabled(false);
			setLoginProcess(false);
		}
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	if (user && token && userId) {
		return (
			<Layout>
				<div className="flex items-center w-full min-h-[90vh]">
					<div className="text-center h-4/6 m-auto">
						<h2 className="p-4">You have already logged in.</h2>
						<Link to={'/home'}>
							<button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 text-center transition w-60 rounded">Back to home</button>
						</Link>
					</div>
				</div>
			</Layout>
		);
	}

	if (loginProcess) {
		return (
			<Layout>
				<div className="flex flex-col items-center justify-center min-h-[90vh]">
					<p className="text-xl font-semibold text-gray-800 mb-4">Login in progress...</p>
					<CircleLoader />
				</div>
			</Layout>
		);
	}

	return (
		<Layout>
			{loading ? (
				<CircleLoader />
			) : !selectedUser ? (
				<div className="min-h-[90vh] flex items-center justify-center">
					<div className="flex flex-col items-center justify-center w-full p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
						<div className="w-full max-w-md bg-white p-6 rounded shadow-lg">
							<h2 className="text-base sm:text-2xl font-semibold text-gray-800 mb-6">Select a user to sign-in</h2>
							<select
								className="block w-full px-4 py-3 text-gray-700 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300"
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
					</div>
				</div>
			) : (
				<div className="min-h-[90vh] flex items-center justify-center">
					<div className="flex flex-col items-center justify-center w-full h-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
						<div className="max-w-md border rounded shadow-md bg-white p-6">
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
										<span className="absolute top-2 right-3 cursor-pointer">
											<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="w-4" onClick={toggleShowPassword} />
										</span>
									</div>
								</div>
								<div className="mb-4">
									<button
										className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition"
										onClick={handleLogin}
										type="button"
										disabled={isButtonDisabled}>
										SignIn
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</Layout>
	);
}

export { SignIn };
