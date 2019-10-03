import { combineReducers } from "redux";
import questionsList from "./questionsList";
import question from "./question";

export default combineReducers({ questionsList, question });
