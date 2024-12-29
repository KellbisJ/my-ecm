import React from 'react';
import { Layout } from '../../components/layout';
import { useUserData } from '../../hooks/useUserData';

function MyAccount() {
	const { user, token } = useUserData();

	if (user && token) {
		return (
			<Layout>
				<div>
					<h1>Welcome, {user}!</h1>
				</div>
			</Layout>
		);
	}
}

export { MyAccount };
