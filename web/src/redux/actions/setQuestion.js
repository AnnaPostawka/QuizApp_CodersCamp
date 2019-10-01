export const QUESTION_SET = "QUESTION_SET";

export const setQuestion = question => {
	return {
		type: QUESTION_SET,
		payload: question
	};
};
