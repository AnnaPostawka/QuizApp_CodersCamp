import { ANSWER_INDEX_SET } from "../actions/setAnswerIndex";
import { ANSWER_INDEX_SELECT } from "../actions/selectAnswerIndex";

const defaultState = {
	index: null,
	selected: null
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case ANSWER_INDEX_SET:
			return {
				...state,
				index: action.payload
			};
		case ANSWER_INDEX_SELECT:
			return {
				...state,
				selected: action.payload
			};
		default:
			return state;
	}
};
