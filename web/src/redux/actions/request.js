function requestType(action) {
	return "REQUEST_" + action;
}

function higherOrderRequest(action) {
	return {
		func: () => ({
			type: requestType(action)
		}),
		type: requestType(action)
	};
}
const start = higherOrderRequest("START");
const end = higherOrderRequest("END");

const startRequest = start.func;
const REQUEST_START = start.type;
const endRequest = end.func;
const REQUEST_END = end.type;
export { startRequest, REQUEST_START, endRequest, REQUEST_END };
