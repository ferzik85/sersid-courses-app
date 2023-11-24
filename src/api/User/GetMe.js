import { backendUrl } from '../../const/AppConsts';

export async function getMeAsync(token) {
	try {
		const response = await fetch(`${backendUrl}/users/me`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				accept: '*/*',
				Authorization: token,
			},
		});
		const data = await response.json();
		return {
			ok: response.ok && data.successful,
			role: data.result.role,
		};
	} catch (error) {
		// ignore
	}
	return {
		ok: false,
	};
}
