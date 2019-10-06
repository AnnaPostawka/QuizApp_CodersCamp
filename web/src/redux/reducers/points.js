import { POINTS_INCREMENT } from "../actions/incrementPoints";
import { CLEAN_QUESTIONS } from "../actions/cleanQuestions";

export default (state = 0, action) => {
	switch (action.type) {
		case CLEAN_QUESTIONS:
			return 0;
		case POINTS_INCREMENT:
			return state + 1;
		default:
			return state;
	}
};
