import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function forceRedirect(path, key, value, deep) {
	const config = { path, key, value, deep };
	return forceRedirectHOC.bind(null, config);
}

function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function forceRedirectHOC(config, Component) {
	if (!isConfigValid(config)) throw Error("Some parameter is missing in config!");
	return createRedirect(config, Component);
}

function isConfigValid(config) {
	const keys = ["key", "path", "value"];
	return keys.every(key => key !== undefined);
}

function createRedirect(config, Component) {
	const Redirector = function(props) {
		useRedirect(config);
		return <Component {...props} />;
	};
	Redirector.displayName = `ForceRedirecting(${getDisplayName(Component)})`;
	return Redirector;
}

function useRedirect(config) {
	const history = useHistory();
	let mapState = state => {};
	if (config.deep) {
		const levels = config.key.split(".");
		mapState = state => {
			debugger;
			return levels.reduce((parent, child) => parent[child], state);
		};
	} else {
		mapState = state => state[config.key];
	}
	const condition = useSelector(mapState);
	useEffect(() => {
		if (condition === config.value) history.replace(config.path);
	});
}
