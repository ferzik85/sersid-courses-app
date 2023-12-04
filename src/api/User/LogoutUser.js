import { backendUrl } from '../../const/AppConsts';

export async function logoutUserAsync(token) {
	try {
		const response = await fetch(`${backendUrl}/logout`, {
			method: 'Delete',
			headers: {
				'Content-Type': 'application/json',
				accept: '*/*',
				Authorization: token,
			},
		});
		return response.ok;
	} catch (error) {
		// ignore
	}
	return false;
}
