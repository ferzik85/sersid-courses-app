import { getAuthorsApiAsync } from '../../api/Authors/GetAuthors';
import { addAuthorApiAsync } from '../../api/Authors/AddAuthor';
import { deleteAuthorApiAsync } from '../../api/Authors/DeleteAuthor';
import { saveAuthorsAction, addAuthorAction, deleteAuthorAction } from './actions';

export const getAuthors = (token) =>
	async function saveAuthorsFromDbToStore(dispatch) {
		const result = await getAuthorsApiAsync(token);
		if (result.ok) dispatch(saveAuthorsAction(result.authors));
	};

export const addAuthor = (token, author) =>
	async function addAuthorToDbAndStore(dispatch) {
		const result = await addAuthorApiAsync(token, author);
		if (result.ok) dispatch(addAuthorAction(result.author));
	};

export const deleteAuthor = (token, id) =>
	async function deleteAuthorFromDbAndStore(dispatch) {
		const result = await deleteAuthorApiAsync(token, id);
		if (result.ok) dispatch(deleteAuthorAction(id));
	};
