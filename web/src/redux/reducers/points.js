import { POINTS_INCREMENT } from "../actions/incrementPoints";

export default (state = 0, action) => {
	switch (action.type) {
		case POINTS_INCREMENT:
			return state + 1;
		default:
			return state;
	}
};
