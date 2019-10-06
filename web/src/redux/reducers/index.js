import { combineReducers } from "redux";
import questionsList from "./questionsList";
import question from "./question";
import answer from "./answer";
import points from "./points";
import { routerContext } from "./routerContext";
import { history } from "./history";
import { alertReducer } from "./alert";
import quizConfig from "./quizConfig";
import token from "./token"
import isLogged from "./isLogged";

export default combineReducers({
	questionsList,
	question,
	answer,
	points,
	routerContext,
	history,
	alertReducer,
	quizConfig,
	token,
	isLogged
});
