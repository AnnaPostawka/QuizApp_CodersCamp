import { TEST } from "../actions/test";

const initialState = {
	id: 0,
	creationDate: Date.now()
};

export function test(state = initialState, action) {
	switch (action.type) {
		case TEST:
			return action.payload;
		default:
			return state;
	}
}
