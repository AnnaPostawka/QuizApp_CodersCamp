import { FETCH_QUIZ } from "../actions/quiz";

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_QUIZ:
            return action.payload;
        default:
            return state;
	}
};
