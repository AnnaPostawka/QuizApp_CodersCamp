export const ANSWER_INDEX_SELECT = "ANSWER_INDEX_SELECT";

export const selectAnswerIndex = answerIndex => {
	return {
		type: ANSWER_INDEX_SELECT,
		payload: answerIndex
	};
};
