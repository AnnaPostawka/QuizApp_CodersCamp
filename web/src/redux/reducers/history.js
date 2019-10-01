import { SET_HISTORY } from "../actions/setHistory";
import { SET_ROUTER_CONTEXT } from "../actions/setRouterContext";

const initialState = {};

export function history(state = initialState, action) {
	switch (action.type) {
		case SET_HISTORY:
			return action.payload;
		case SET_ROUTER_CONTEXT:
			return action.payload.history;
		default:
			return state;
	}
}
