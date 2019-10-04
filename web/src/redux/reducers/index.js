import { combineReducers } from "redux";
import questionsList from "./questionsList";
import question from "./question";
import answer from "./answer";

export default combineReducers({ questionsList, question, answerIndex: answer });
