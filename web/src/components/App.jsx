import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginView from "../views/LoginView";
import HashRouter from "./ReduxedHashRouter";

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route to="/" component={LoginView} />
			</Switch>
		</HashRouter>
	);
}
