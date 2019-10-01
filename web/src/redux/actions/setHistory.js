export const SET_HISTORY = "SET_HISTORY";

export function setHistory(history) {
	return {
		type: SET_HISTORY,
		payload: history
	};
}
