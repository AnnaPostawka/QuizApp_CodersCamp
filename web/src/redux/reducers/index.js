import { combineReducers } from "redux";
import { test } from "./test";
import { routerContext } from "./routerContext";
import { history } from "./history";

export default combineReducers({ test, routerContext, history });
