import { QUESTION_INDEX_INCREMENT } from "../actions/incrementQuestionIndex";
import { CLEAN_QUESTIONS } from "../actions/cleanQuestions";

export default (state = 0, action) => {
	switch (action.type) {
		case QUESTION_INDEX_INCREMENT:
			return state + 1;
		case CLEAN_QUESTIONS:
			return 0;
		default:
			return state;
	}
};
