function formatDuration(duration) {
	let hh = Math.floor(duration / 60);
	let mm = Math.floor(duration % 60);
	let hours = 'hours';
	if (hh === 1) {
		hours = 'hour';
	}

	if (hh < 10) {
		hh = `0${hh}`;
	}

	if (mm < 10) {
		mm = `0${mm}`;
	}

	return `${hh}:${mm} ${hours}`;
}

export default formatDuration;
