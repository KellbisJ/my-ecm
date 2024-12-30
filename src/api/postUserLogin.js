import { API_USER_LOGIN } from '.';

async function PostUserLogin(user) {
	try {
		const response = await fetch(API_USER_LOGIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: user.username,
				password: user.password,
			}),
		});

		const data = await response.json();

		// console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
}

export { PostUserLogin };
