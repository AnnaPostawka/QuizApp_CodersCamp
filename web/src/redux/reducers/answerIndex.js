import { ANSWER_INDEX_SET } from "../actions/setAnswerIndex";

export default (state = -1, action) => {
	switch (action.type) {
        case ANSWER_INDEX_SET:
            return action.payload;
		default:
			return state;
	}
};
