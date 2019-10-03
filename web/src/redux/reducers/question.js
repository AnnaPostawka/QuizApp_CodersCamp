import { QUESTION_INDEX_INCREMENT } from "../actions/incrementQuestionIndex";
import { QUESTION_SET } from "../actions/setQuestion";

const defaultState = {
	index: 1,
	current: null
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case QUESTION_INDEX_INCREMENT:
			return {
				...state,
				index: state.index + 1
			};
		case QUESTION_SET:
			return {
				...state,
				current: action.payload
			};
		default:
			return state;
	}
};
