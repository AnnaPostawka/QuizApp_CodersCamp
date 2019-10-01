import { useContext, useEffect } from "react";
import { __RouterContext as RouterContext } from "react-router";
import { connect } from "react-redux";

import { setRouterContext } from "../redux/actions/setRouterContext";

function RouterContextToReduxProvider({ setRouterContext }) {
	const context = useContext(RouterContext);
	useEffect(() => {
		setRouterContext(context);
	});
	return null;
}

export default connect(
	null,
	{ setRouterContext }
)(RouterContextToReduxProvider);
