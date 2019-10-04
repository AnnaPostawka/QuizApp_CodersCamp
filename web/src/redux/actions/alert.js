export const ADD_ALERT_TYPE = "ADD_ALERT";
export const REMOVE_ALERT_TYPE = "REMOVE_ALERT";
export const REMOVE_ALL_ALERTS_TYPE = "REMOVE_ALL_ALERTS_TYPE";

var incrementalAlertID = 0;

export const addAlert = (alertContent = "Sample warning") => {
	return {
		type: ADD_ALERT_TYPE,
		payload: {
			id: incrementalAlertID++,
			alertContent
		}
	};
};

export const removeAlert = id => {
	return {
		type: REMOVE_ALERT_TYPE,
		payload: id
	};
};

export const removeAllAlerts = () => {
	return {
		type: REMOVE_ALL_ALERTS_TYPE
	};
};
