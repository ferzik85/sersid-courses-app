import { backendUrl } from '../const/AppConsts';

async function registerUserAsync(name, email, password) {
	try {
		const response = await fetch(`${backendUrl}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: '*/*',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		});
		return response.ok;
	} catch (error) {
		// ignore
	}
	return false;
}

export default registerUserAsync;