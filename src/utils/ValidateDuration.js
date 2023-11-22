function validateDuration(str) {
	const num = +str;
	return typeof num === 'number' && !Number.isNaN(num) && num > 0 && num <= Number.MAX_SAFE_INTEGER;
}

export default validateDuration;
