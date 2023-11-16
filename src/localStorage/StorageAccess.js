const activeUserKey = 'activeUser';

function getUser() {
	const user = localStorage.getItem(activeUserKey);
	if (user !== null) {
		return JSON.parse(user);
	}
	return null;
}

export function clearLocalStorage() {
	localStorage.clear();
}

export function putUser(name, token) {
	clearLocalStorage();
	localStorage.setItem(activeUserKey, JSON.stringify({ name, token }));
}

export function getUserName() {
	return getUser()?.name;
}

export function getUserToken() {
	return getUser()?.token;
}

export function userTokenIsSet() {
	return getUser()?.token != null;
}
