import {RECORD_QUIZ_CONFIG} from "../actions/recordQuizConfig";

const defaultState = {
    questionsNumber: 10
}

const buildApiUrlFromConfig = (config = defaultState) => {
	const baseUrl = "https://opentdb.com/api.php?";
	let url = baseUrl;
	
	url+="amount="+(config.questionsNumber);
	if (config.category && config.category!=="any"){
		url+="&category="+encodeURIComponent(config.category);
	}
	if (config.difficulty && config.difficulty!=="any"){
		url+="&difficulty="+encodeURIComponent(config.difficulty);
	}
	if (config.type && config.type!=="any"){
		url+="&type="+encodeURIComponent(config.type);
    }
    console.log(url);
	return url;
}

export default (state = {}, action) => {
	switch (action.type) {
		case RECORD_QUIZ_CONFIG:
			return {...action.payload, configUrl: buildApiUrlFromConfig(action.payload)};
		default:
			return state;
	}
};