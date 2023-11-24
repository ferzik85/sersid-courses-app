import { backendUrl } from '../../const/AppConsts';

export async function deleteCourseApiAsync(token, id) {
	try {
		const response = await fetch(`${backendUrl}/courses/${id}`, {
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
