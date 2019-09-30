export const FETCH_QUIZ = "FETCH_QUIZ";

export const fetchQuiz = (url) => async dispatch => {
	const response = await fetch(url);

	dispatch({ type: FETCH_QUIZ, payload: response });
};
