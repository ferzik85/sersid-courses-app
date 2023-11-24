import { backendUrl } from '../../const/AppConsts';

export async function deleteAuthorApiAsync(token, id) {
	try {
		const response = await fetch(`${backendUrl}/authors/${id}`, {
			method: 'Delete',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
				accept: '*/*',
			},
		});
		const data = await response.json();
		return response.ok && data.successful;
	} catch (error) {
		// ignore
	}
	return false;
}
