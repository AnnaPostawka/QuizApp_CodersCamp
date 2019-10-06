export const ANSWER_FINISHED_SET = "ANSWER_FINISHED_SET";

export const setAnswerFinished = answerFinished => {
	return {
		type: ANSWER_FINISHED_SET,
		payload: answerFinished
	};
};
