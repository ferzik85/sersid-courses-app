import { backendUrl } from '../../const/AppConsts';

export async function getAuthorsApiAsync() {
	try {
		const response = await fetch(`${backendUrl}/authors/all`, {
			method: 'Get',
			headers: {
				'Content-Type': 'application/json',
				accept: '*/*',
			},
		});
		const data = await response.json();
		return {
			ok: response.ok && data.successful,
			authors: data.result ?? [],
		};
	} catch (error) {
		// ignore
	}
	return {
		ok: false,
		authors: [],
	};
}
