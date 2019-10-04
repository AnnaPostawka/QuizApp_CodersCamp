import { combineReducers } from "redux";
import questionsList from "./questionsList";
import question from "./question";
import answerIndex from "./answerIndex";

export default combineReducers({ questionsList, question, answerIndex });
