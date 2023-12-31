import { getCoursesApiAsync } from '../../api/Courses/GetCourses';
import { addCourseApiAsync } from '../../api/Courses/AddCourse';
import { deleteCourseApiAsync } from '../../api/Courses/DeleteCourse';
import { updateCourseApiAsync } from '../../api/Courses/UpdateCourse';
import { saveCoursesAction, addCourseAction, deleteCourseAction, updateCourseAction } from './actions';
import { userTokenIsSet, getUserToken } from '../../localStorage/StorageAccess';

export const getCourses = () =>
	async function saveCoursesFromDbToStore(dispatch) {
		const result = await getCoursesApiAsync();
		if (result.ok) dispatch(saveCoursesAction(result.courses));
	};

export const addCourse = (course) =>
	async function addCourseToDbAndStore(dispatch) {
		if (userTokenIsSet()) {
			const token = getUserToken();
			const result = await addCourseApiAsync(token, course);
			if (result.ok) dispatch(addCourseAction(result.course));
		}
	};

export const deleteCourse = (id) =>
	async function deleteCourseFromDbAndStore(dispatch) {
		if (userTokenIsSet()) {
			const token = getUserToken();
			const ok = await deleteCourseApiAsync(token, id);
			if (ok) dispatch(deleteCourseAction(id));
		}
	};

export const updateCourse = (course) =>
	async function updateCourseInDbAndStore(dispatch) {
		if (userTokenIsSet()) {
			const token = getUserToken();
			const result = await updateCourseApiAsync(token, course);
			if (result.ok) dispatch(updateCourseAction(result.course));
		}
	};
