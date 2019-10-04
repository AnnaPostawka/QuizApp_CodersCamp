import { QUIZ_FETCH } from "../actions/fetchQuiz";

export default (state = [], action) => {
	switch (action.type) {
		case QUIZ_FETCH:
			return action.payload;
		default:
			return state;
	}
};
