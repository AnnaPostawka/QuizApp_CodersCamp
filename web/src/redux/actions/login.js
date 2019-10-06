import axios from "axios";
import { addAlert } from "./alert";
import { startRequest, endRequest } from "./request";

export const LOGGED_IN = "LOGGED_IN";

const url = "https://supreme-potato-255105.appspot.com";
export function login(username, password) {
	// zwraca funkcje, więc do akcji wchodzi redux thunk
	const email = username;
	return async function(dispatch) {
		dispatch(startRequest());
		try {
			const response = await axios.post(`${url}/login`, { email, password });
			localStorage.setItem("token", response.data);
			dispatch({ type: LOGGED_IN, payload: response.data });
		} catch (error) {
			console.error(error);
			dispatch(
				addAlert(
					"Error while logging",
					error.message || error.response ? error.response.data : error.data || error.toString()
				)
			);
		} finally {
			dispatch(endRequest());
		}
	};
}
