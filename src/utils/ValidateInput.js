const checkString = (str) => typeof str === 'string' && str.trim().length > 0;

const checkEmail = (email) =>
	email
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

const checkPassword = (password) => password.length > 5;

export function validateInput(str) {
	return checkString(str);
}

export function validateEmail(str) {
	return checkString(str) && checkEmail(str);
}

export function validatePassword(str) {
	return checkString(str) && checkPassword(str);
}
