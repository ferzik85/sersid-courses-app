import { backendUrl } from '../../const/AppConsts';

export async function getCoursesApiAsync() {
	try {
		const response = await fetch(`${backendUrl}/courses/all`, {
			method: 'Get',
			headers: {
				'Content-Type': 'application/json',
				accept: '*/*',
			},
		});
		const data = await response.json();
		return {
			ok: response.ok && data.successful,
			courses: data.result ?? [],
		};
	} catch (error) {
		// ignore
	}
	return {
		ok: false,
		courses: [],
	};
}
