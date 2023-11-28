import { fireEvent } from '@testing-library/react';

export const click = (htmlElement) => {
	fireEvent.click(
		htmlElement,
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})
	);
};
