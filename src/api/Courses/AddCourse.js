import { backendUrl } from '../../const/AppConsts';

export async function addCourseApiAsync(token, course) {
	try {
		const response = await fetch(`${backendUrl}/courses/add`, {
			method: 'Post',
			headers: {
				Authorization: token,
				'Content-Type': 'application/json',
				accept: '*/*',
			},
			body: JSON.stringify(course),
		});
		const data = await response.json();
		return {
			ok: response.ok && data.successful,
			course: data.result,
		};
	} catch (error) {
		// ignore
	}
	return {
		ok: false,
		course: null,
	};
}
