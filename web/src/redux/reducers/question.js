import { QUESTION_INDEX_INCREMENT } from "../actions/incrementQuestionIndex";

export default (state = 0, action) => {
	switch (action.type) {
        case QUESTION_INDEX_INCREMENT:
            return state + 1;
		default:
			return state;
	}
};
