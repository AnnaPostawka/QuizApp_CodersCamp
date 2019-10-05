import { HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import RouterContextToReduxProvider from "./RouterContextToReduxProvider";

export default function ReduxedHashRouter({ children }) {
	const history = useSelector(state => state.history);
	const render = !!history.length;
	return (
		<HashRouter>
			<RouterContextToReduxProvider />
			{render ? children : null}
		</HashRouter>
	);
}
