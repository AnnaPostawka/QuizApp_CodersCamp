import axios from "axios";

export const AUTHENTICATED = "authenticated_user";
export const AUTHENTICATION_ERROR = "authentication_error";

const url = "https://supreme-potato-255105.appspot.com/";
export function login(username, password) {
	// zwraca funkcje, więc do akcji wchodzi redux thunk
	return async function(dispatch) {
		dispatch({ type: ADD_ALERT_TYPE });
		try {
			const response = await axios.post(`${url}/login`, { username, password });
			dispatch({ type: AUTHENTICATED });
			dispatch({ type: SET_HISTORY, payload: "/config" });
		} catch (error) {
			dispatch({ type: AUTHENTICATED_ERROR, payload: "There is no such user." });
		}
		dispatch({ type: REMOVE_ALERT_TYPE });
	};
}
