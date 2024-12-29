import { API_ALL_USERS } from '.';

async function getUsers() {
	try {
		const response = await fetch(`${API_ALL_USERS}`);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

export { getUsers };
