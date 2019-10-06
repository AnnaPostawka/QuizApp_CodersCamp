import { QUIZ_FETCH } from "../actions/fetchQuiz";
import { CLEAN_QUESTIONS } from "../actions/cleanQuestions";

export default (state = [], action) => {
	switch (action.type) {
		case QUIZ_FETCH:
			return action.payload;
		case CLEAN_QUESTIONS:
			return [];
		default:
			return state;
	}
};
