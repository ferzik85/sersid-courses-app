const activeUserKey = 'activeUser';

function getUser() {
	const user = localStorage.getItem(activeUserKey);
	if (user != null) {
		return JSON.parse(user);
	}
	return null;
}

export function clearLocalStorage() {
	localStorage.clear();
}

export function putUser(name, token, role) {
	clearLocalStorage();
	localStorage.setItem(activeUserKey, JSON.stringify({ name, token, role }));
}

export function getUserName() {
	return getUser()?.name;
}

export function getUserToken() {
	return getUser()?.token;
}

export function getUserRole() {
	return getUser()?.role;
}

export function userTokenIsSet() {
	return getUser()?.token != null;
}
