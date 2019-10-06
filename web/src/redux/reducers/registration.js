import { REGISTERED, REGISTER_ERROR } from "../actions/register";
export default function(state = {}, action) {
	switch (action.type) {
		case REGISTERED:
			return { ...state, registered: true };
		case REGISTER_ERROR:
			return { ...state, error: action.payload };
	}
	return state;
}
