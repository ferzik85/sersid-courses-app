import { backendUrl } from '../../const/AppConsts';

export async function loginUserAsync(email, password) {
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
		const data = await response.json();
		return {
			ok: response.ok && data.successful,
			user: { name: data.user.name, email: data.user.email, token: data.result },
		};
	} catch (error) {
		// ignore
	}
	return {
		ok: false,
	};
}
