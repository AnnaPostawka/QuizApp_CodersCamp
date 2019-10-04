import { ANSWER_INDEX_SET } from "../actions/setAnswerIndex";
import { ANSWER_FINISHED_SET } from "../actions/setAnswerFinished";

const defaultState = {
	index: -1,
	finished: false
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case ANSWER_INDEX_SET:
			return {
				...state,
				index: action.payload
			};
		case ANSWER_FINISHED_SET:
			return {
				...state,
				finished: action.payload
			};
		default:
			return state;
	}
};
