import { SET_ROUTER_CONTEXT } from "../actions/setRouterContext";
import { SET_HISTORY } from "../actions/setHistory";

const initialState = {};

export function routerContext(state = initialState, action) {
	switch (action.type) {
		case SET_ROUTER_CONTEXT:
			return action.payload;
		case SET_HISTORY:
			return { ...state, history: action.payload };
		default:
			return state;
	}
}
