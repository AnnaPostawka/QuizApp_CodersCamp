import { AUTHENTICATED, AUTHENTICATION_ERROR } from "../actions/login";
export default function(state = {}, action) {
	switch (action.type) {
		case AUTHENTICATED:
			return { ...state, authenticated: true };
		case AUTHENTICATION_ERROR:
			return { ...state, error: action.payload };
	}
	return state;
}
