import React, { useState, useEffect, useContext } from 'react';
import { Layout } from '../../components/layout';
import { useUserData } from '../../hooks/useUserData';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { CircleLoader } from '../../components/circleLoader';

function SignOut() {
	const { user, token, userId } = useUserData();
	const { signOut } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const handleSignOut = () => {
		navigate('/home');
		signOut();
	};

	useEffect(() => {
		setLoading(true);
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 200);
		return () => clearTimeout(timeoutId);
	}, []);

	if (loading) {
		return (
			<Layout>
				<CircleLoader />
			</Layout>
		);
	}

	if (user && token && userId) {
		return (
			<Layout>
				<div className="flex flex-col items-center justify-center w-full min-h-[90vh]">
					<div className="flex flex-col items-center justify-center w-full p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
						<div className="w-full max-w-md bg-white p-6 rounded shadow-lg">
							<h2 className="text-lg font-bold text-gray-800 mb-6">Sign out</h2>
							<p className="text-gray-600 mb-4">Are you sure that you want to leave, {user}?</p>
							<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition mt-4" onClick={handleSignOut}>
								Logout
							</button>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export { SignOut };
