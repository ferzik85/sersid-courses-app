import { getCoursesApiAsync } from '../../api/Courses/GetCourses';
import { addCourseApiAsync } from '../../api/Courses/AddCourse';
import { deleteCourseApiAsync } from '../../api/Courses/DeleteCourse';
import { updateCourseApiAsync } from '../../api/Courses/UpdateCourse';
import { saveCoursesAction, addCourseAction, deleteCourseAction, updateCourseAction } from './actions';

export const getGourses = (token) =>
	async function saveCoursesFromDbToStore(dispatch) {
		const result = await getCoursesApiAsync(token);
		dispatch(saveCoursesAction(result.courses));
	};

export const addCourse = (token, course) =>
	async function addCourseToDbAndStore(dispatch) {
		const result = await addCourseApiAsync(token, course);
		if (result.ok) dispatch(addCourseAction(result.course));
	};

export const deleteCourse = (token, id) =>
	async function deleteCourseFromDbAndStore(dispatch) {
		const result = await deleteCourseApiAsync(token, id);
		if (result.ok) dispatch(deleteCourseAction(id));
	};

export const updateCourse = (token, course) =>
	async function updateCourseInDbAndStore(dispatch) {
		const result = await updateCourseApiAsync(token, course);
		if (result.ok) dispatch(updateCourseAction(result.course));
	};
