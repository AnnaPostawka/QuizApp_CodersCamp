export const RECORD_QUIZ_CONFIG = "RECORD_QUIZ_CONFIG";

export const recordQuizConfig = config => {
	return {
		type: RECORD_QUIZ_CONFIG,
		payload: {
			questionsNumber: config.questionsNumber,
			category: config.category,
			difficulty: config.difficulty,
			type: config.type,
			configUrl: config.configUrl
		}
	};
};
