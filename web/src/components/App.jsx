import "antd/dist/antd.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import HashRouter from "./ReduxedHashRouter";
import LoginView from "../views/LoginView";
import QuizView from "../views/QuizView";
import QuizConfigView from "../views/QuizConfigView";

export default function App() {
	// useAntDesignOverwrite();
	return (
		<HashRouter>
			<Switch>
				<Route path="/config" component={QuizConfigView} />
				<Route path="/quiz" component={QuizView} />
				<Route path="/" component={LoginView} />
			</Switch>
		</HashRouter>
	);
}
