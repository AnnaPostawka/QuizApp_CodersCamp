export const ANSWER_INDEX_SET = "ANSWER_INDEX_SET";

export const setAnswerIndex = answerIndex => {
	return {
		type: ANSWER_INDEX_SET,
		payload: answerIndex
	};
};
