export const FETCH_QUIZ = "FETCH_QUIZ";

export const fetchQuiz = () => async dispatch => {
    // url to be changed
	const response = await fetch("https://opentdb.com/api.php?amount=10");

	dispatch({ type: FETCH_QUIZ, payload: response });
};
