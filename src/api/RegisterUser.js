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
		const data = await response.json();
		return response.ok && data.successful;
	} catch (error) {
		// ignore
	}
	return false;
}

export default registerUserAsync;
