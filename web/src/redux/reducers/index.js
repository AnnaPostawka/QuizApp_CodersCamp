import { combineReducers } from "redux";
import { test } from "./test";
import { alertReducer } from "./alert";

export default combineReducers({ test, alertReducer });
