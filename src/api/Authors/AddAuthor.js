import { backendUrl } from '../../const/AppConsts';

export async function addAuthorApiAsync(token, author) {
	try {
		const response = await fetch(`${backendUrl}/authors/add`, {
			method: 'Post',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
				accept: '*/*',
			},
			body: JSON.stringify({
				name: author,
			}),
		});
		const data = await response.json();
		return {
			ok: response.ok && data.successful,
			author: data.result,
		};
	} catch (error) {
		// ignore
	}
	return {
		ok: false,
		author: null,
	};
}
