import { getAuthorsApiAsync } from '../../api/Authors/GetAuthors';
import { addAuthorApiAsync } from '../../api/Authors/AddAuthor';
import { deleteAuthorApiAsync } from '../../api/Authors/DeleteAuthor';
import { saveAuthorsAction, addAuthorAction, deleteAuthorAction } from './actions';
import { userTokenIsSet, getUserToken } from '../../localStorage/StorageAccess';

export const getAuthors = () =>
	async function saveAuthorsFromDbToStore(dispatch) {
		if (userTokenIsSet) {
			const token = getUserToken();
			const result = await getAuthorsApiAsync(token);
			if (result.ok) dispatch(saveAuthorsAction(result.authors));
		}
	};

export const addAuthor = (author) =>
	async function addAuthorToDbAndStore(dispatch) {
		if (userTokenIsSet) {
			const token = getUserToken();
			const result = await addAuthorApiAsync(token, author);
			if (result.ok) dispatch(addAuthorAction(result.author));
		}
	};

export const deleteAuthor = (id) =>
	async function deleteAuthorFromDbAndStore(dispatch) {
		if (userTokenIsSet) {
			const token = getUserToken();
			const result = await deleteAuthorApiAsync(token, id);
			if (result.ok) dispatch(deleteAuthorAction(id));
		}
	};
