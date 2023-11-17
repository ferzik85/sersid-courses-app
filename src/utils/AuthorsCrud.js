import { v4 as uuidv4 } from 'uuid';
import mockedAuthorsList from '../data/AuthorsList';

export function getAuthors() {
	return mockedAuthorsList;
}

export function addAuthor(author) {
	mockedAuthorsList.push({ ...author, id: uuidv4() });
}

export function deleteAuthor(id) {
	const index = mockedAuthorsList.findIndex((author) => author.id === id);
	if (index !== -1) mockedAuthorsList.splice(index, 1);
}
