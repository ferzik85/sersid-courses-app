import { backendUrl } from '../const/AppConsts';

async function loginUserAsync(email, password) {
	try {
		const response = await fetch(`${backendUrl}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				accept: '*/*',
			},
			body: JSON.stringify({
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

export default loginUserAsync;
