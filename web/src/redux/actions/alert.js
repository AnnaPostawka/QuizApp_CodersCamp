export const ADD_ALERT_TYPE = "ADD_ALERT";
export const REMOVE_ALERT_TYPE = "REMOVE_ALERT";

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
