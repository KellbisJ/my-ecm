import React, { useContext } from 'react';
import { Layout } from '../../components/layout';
import { useUserData } from '../../hooks/useUserData';
import { AuthContext } from '../../context/authContext';
import { Navigate, useNavigate } from 'react-router-dom';

function SignOut() {
	const { user, token, userId } = useUserData();
	const { signOut } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut();
		navigate('/home');
	};

	if (user && token && userId) {
		return (
			<Layout>
				<div className="text-center max-w-md mx-auto h-full">
					<div className="flex flex-col items-center justify-center m-4 p-4 bg-white rounded-lg shadow-md min-h-56">
						<h2 className="text-lg font-bold mb-2">Sign out</h2>
						<p className="text-gray-600 mb-4">Are you sure that you want to leave, {user}?</p>
						<button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition" onClick={handleSignOut}>
							Logout
						</button>
					</div>
				</div>
			</Layout>
		);
	}
}

export { SignOut };
