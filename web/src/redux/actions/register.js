import axios from "axios";

export const REGISTERED = "authenticated_user";
export const REGISTER_ERROR = "authentication_error";

const url = "https://supreme-potato-255105.appspot.com/";
export function register(username, email, password) {
	return async function(dispatch) {
		dispatch({ type: ADD_ALERT_TYPE });
		try {
			const response = await axios.post(`${url}/register`, { username, email, password });
			dispatch({ type: REGISTERED });
			dispatch({ type: SET_HISTORY, payload: "/login" });
		} catch (error) {
			dispatch({ type: REGISTERED, payload: "You passed wrong password." });
		}
		dispatch({ type: REMOVE_ALERT_TYPE });
	};
}
