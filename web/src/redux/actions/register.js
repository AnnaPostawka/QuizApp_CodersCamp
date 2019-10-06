import axios from "axios";

import { startRequest, endRequest } from "./request";
import { addAlert } from "./alert";

const url = "https://supreme-potato-255105.appspot.com";
export function register(username, email, password) {
	return async function(dispatch, getState) {
		dispatch(startRequest());
		try {
			const response = await axios.post(`${url}/register`, { email, password });
			getState().history.push("/login");
		} catch (error) {
			console.error(error);
			dispatch(
				addAlert(
					"Error while registering",
					error.message || error.response.data || error.data || error.toString()
				)
			);
		} finally {
			dispatch(endRequest());
		}
	};
}
