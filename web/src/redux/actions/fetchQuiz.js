export const QUIZ_FETCH = "QUIZ_FETCH";

export const fetchQuiz = url => async dispatch => {
	const response = await fetch(url).then(res => res.json());

	dispatch({ type: QUIZ_FETCH, payload: response.results });
};
