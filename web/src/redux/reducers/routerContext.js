import { SET_ROUTER_CONTEXT } from "../actions/setRouterContext";

const initialState = {};

export function routerContext(state = initialState, action) {
	switch (action.type) {
		case SET_ROUTER_CONTEXT:
			return action.payload.context;
		default:
			return state;
	}
}
