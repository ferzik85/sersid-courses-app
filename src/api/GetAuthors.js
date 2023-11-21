import { backendUrl } from '../const/AppConsts';

async function getAuthorsApiAsync(token) {
	try {
		const response = await fetch(`${backendUrl}/authors/all`, {
			method: 'Get',
			headers: {
				Authorization: token,
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

export default getAuthorsApiAsync;
