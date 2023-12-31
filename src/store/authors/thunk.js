import { getAuthorsApiAsync } from '../../api/Authors/GetAuthors';
import { addAuthorApiAsync } from '../../api/Authors/AddAuthor';
import { deleteAuthorApiAsync } from '../../api/Authors/DeleteAuthor';
import { saveAuthorsAction, addAuthorAction, deleteAuthorAction } from './actions';
import { userTokenIsSet, getUserToken } from '../../localStorage/StorageAccess';

export const getAuthors = () =>
	async function saveAuthorsFromDbToStore(dispatch) {
		const result = await getAuthorsApiAsync();
		if (result.ok) dispatch(saveAuthorsAction(result.authors));
	};

export const addAuthor = (name) =>
	async function addAuthorToDbAndStore(dispatch) {
		if (userTokenIsSet()) {
			const token = getUserToken();
			const result = await addAuthorApiAsync(token, name);
			if (result.ok) dispatch(addAuthorAction(result.author));
		}
	};

export const deleteAuthor = (id) =>
	async function deleteAuthorFromDbAndStore(dispatch) {
		if (userTokenIsSet()) {
			const token = getUserToken();
			const ok = await deleteAuthorApiAsync(token, id);
			if (ok) dispatch(deleteAuthorAction(id));
		}
	};
