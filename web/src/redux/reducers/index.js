import { combineReducers } from "redux";
import questionsList from "./questionsList";
import question from "./question";
import answer from "./answer";
import points from "./points";

export default combineReducers({ questionsList, question, answer, points });
