import { API_ALL_PRODUCTS } from '.';

async function getProducts() {
	try {
		const response = await fetch(`${API_ALL_PRODUCTS}`);
		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

export { getProducts };
