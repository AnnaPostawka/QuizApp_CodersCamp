export const SET_ROUTER_CONTEXT = "SET_ROUTER_CONTEXT";
export function setRouterContext(context) {
	return {
		type: SET_ROUTER_CONTEXT,
		payload: context
	};
}
