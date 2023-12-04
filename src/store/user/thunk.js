import { logoutUserAsync } from '../../api/User/LogoutUser';
import { logoutUserAction } from './actions';
import { clearLocalStorage, userTokenIsSet, getUserToken } from '../../localStorage/StorageAccess';

export const logoutUser = () =>
	async function logoutUserFromDbAndStore(dispatch) {
		if (userTokenIsSet()) {
			const token = getUserToken();
			const ok = await logoutUserAsync(token);
			if (ok) {
				clearLocalStorage();
				dispatch(logoutUserAction());
			}
		}
	};
