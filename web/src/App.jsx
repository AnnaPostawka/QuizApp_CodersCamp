import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LandingView from "./views/LandingView";

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route to="/" component={LandingView} />
			</Switch>
		</HashRouter>
	);
}
