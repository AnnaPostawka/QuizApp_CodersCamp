import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import LoginView from "../views/LoginView";
import RouterContextToReduxProvider from "./RouterContextToReduxProvider";

export default function App() {
	return (
		<HashRouter>
			<RouterContextToReduxProvider />
			<Switch>
				<Route to="/" component={LoginView} />
			</Switch>
		</HashRouter>
	);
}
