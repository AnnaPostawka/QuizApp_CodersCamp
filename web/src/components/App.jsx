import React from "react";
import "antd/dist/antd.css";

// import "../global.module.css";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import { Switch, Route } from "react-router-dom";
import HashRouter from "./ReduxedHashRouter";

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" exact component={LoginView} />
				<Route path="/register" component={RegisterView} />
			</Switch>
		</HashRouter>
	);
}
