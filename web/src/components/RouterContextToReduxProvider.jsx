import { useContext, useEffect } from "react";
import { __RouterContext as RouterContext } from "react-router";
import { useDispatch } from "react-redux";

import { setRouterContext } from "../redux/actions/setRouterContext";

export default function RouterContextToReduxProvider() {
	const context = useContext(RouterContext);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setRouterContext(context));
	});
	return null;
}
