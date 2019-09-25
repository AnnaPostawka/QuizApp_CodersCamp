import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./redux";
import "./global.module.css";

const root = document.querySelector("#root");

render(
	<Provider store={store}>
		<App />
	</Provider>,
	root
);
