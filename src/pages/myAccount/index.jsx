import React, { useState } from 'react';
import { Layout } from '../../components/layout';
import { useUserData } from '../../hooks/useUserData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function MyAccount() {
	const { user, token, userId, userData } = useUserData();
	const [showUserPassword, setShowUserPassword] = useState(false);
	const [showUserAddress, setShowUserAddress] = useState(false);

	const handleShowUserPassword = () => setShowUserPassword(!showUserPassword);
	const handleShowUserAddress = () => setShowUserAddress(!showUserAddress);

	console.log(userData);

	if (user && token && userId) {
		return (
			<Layout>
				<div className="container mx-auto p-6 overflow-x-hidden">
					<div className="flex flex-col bg-gray-200 rounded">
						<div className="flex flex-wrap justify-center md:justify-between">
							<div className="flex flex-col items-center w-full md:w-6/12 text-lg p-6">
								<h1 className="p-2 text-3xl">User</h1>
								<div className="flex flex-col bg-white rounded-lg shadow-md mb-4 w-full">
									<h2 className="p-2 text-2xl">Welcome, {userData['username']}!</h2>
									<h2 className="p-2 font-bold">#{userData['id']}</h2>
								</div>

								<h2 className="p-2 bg-white rounded-lg shadow-md mb-4 w-full">First Name: {userData['name']['firstname']}</h2>
								<h2 className="p-2 bg-white rounded-lg shadow-md mb-4 w-full">Last Name: {userData['name']['lastname']}</h2>
							</div>

							<div className="flex flex-col items-center w-full md:w-6/12 text-lg p-6">
								<h1 className="p-2 text-3xl">Personal</h1>
								<p className="p-2 bg-white rounded-lg shadow-md mb-4 w-full">Email: {userData['email']}</p>
								<div className="flex items-center w-full relative bg-white rounded-lg shadow-md mb-4">
									<input
										type={!showUserPassword ? 'password' : 'text'}
										value={userData['password']}
										className="p-2 bg-white rounded-lg border-none outline-none break-all w-full"
										readOnly
									/>
									<span className="absolute right-2">
										<FontAwesomeIcon className="cursor-pointer w-5" icon={!showUserPassword ? faEyeSlash : faEye} onClick={handleShowUserPassword} />
									</span>
								</div>
								<p className="p-2 bg-white rounded-lg shadow-md mb-4 w-full">Phone number: {userData['phone']}</p>
								<div className="flex justify-between items-center bg-indigo-400 rounded-lg shadow-md text-white p-2 w-full transition">
									Address
									<FontAwesomeIcon className="cursor-pointer w-5" icon={!showUserAddress ? faCaretDown : faCaretUp} onClick={handleShowUserAddress} />
								</div>
							</div>
						</div>
						{user && showUserAddress && (
							<div className="flex flex-col items-center justify-center p-6 w-full m-auto">
								<h1 className="p-2 text-3xl">Address</h1>
								<div className="flex justify-between p-2 bg-white rounded-lg shadow-md mb-4 w-full lg:w-5/6">
									<p className="w-full lg:w-auto">Geolocation:</p>
									<p>lat: {userData['address']['geolocation']['lat']}</p>
									<p>long: {userData['address']['geolocation']['long']}</p>
								</div>
								<p className="p-2 bg-white rounded-lg shadow-md mb-4 w-full lg:w-5/6">City: {userData['address']['city']}</p>
								<p className="p-2 bg-white rounded-lg shadow-md mb-4 w-full lg:w-5/6">Number: {userData['address']['number']}</p>
								<p className="p-2 bg-white rounded-lg shadow-md mb-4 w-full lg:w-5/6">Street: {userData['address']['street']}</p>
								<p className="p-2 bg-white rounded-lg shadow-md mb-4 w-full lg:w-5/6">Zip code: {userData['address']['zipcode']}</p>
							</div>
						)}
					</div>
				</div>
			</Layout>
		);
	}
}

export { MyAccount };
