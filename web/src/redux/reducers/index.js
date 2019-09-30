import { combineReducers } from "redux";
import { test } from "./test";
import questionsList from "./questionsList";

export default combineReducers({ test, questionsList });
