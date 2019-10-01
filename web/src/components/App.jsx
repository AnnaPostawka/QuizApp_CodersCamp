import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LoginView from "../views/LoginView";
import QuizView from "../views/QuizView";
import "antd/dist/antd.css";

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route to="/quiz" component={QuizView} />
				<Route to="/" component={LoginView} />
			</Switch>
		</HashRouter>
	);
}
