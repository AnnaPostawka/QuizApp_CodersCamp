import { combineReducers } from "redux";
import questionsList from "./questionsList";
import question from "./question";
import answer from "./answer";
import points from "./points";
import { routerContext } from "./routerContext";
import { history } from "./history";
import { alertReducer } from "./alert";

export default combineReducers({
	questionsList,
	question,
	answer,
	points,
	routerContext,
	history,
	alertReducer
});
