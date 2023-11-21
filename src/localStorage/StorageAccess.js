const activeUserKey = 'activeUser';

export function getUser() {
	const user = localStorage.getItem(activeUserKey);
	if (user != null) {
		return JSON.parse(user);
	}
	return null;
}

export function clearLocalStorage() {
	localStorage.clear();
}

export function putUser(user) {
	clearLocalStorage();
	localStorage.setItem(activeUserKey, JSON.stringify(user));
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
