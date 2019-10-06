import { LOGGED_IN } from "../actions/login";
import { LOGGED_OUT } from "../actions/logout";

const initialState = !!localStorage.getItem("token");

export default function isLogged(state = initialState, action) {
	switch (action.type) {
		case LOGGED_IN:
			return true;
		case LOGGED_OUT:
			return false;
		default:
			return state;
	}
}
